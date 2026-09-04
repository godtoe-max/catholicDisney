// Catholic Disney: Ride Wait Time Drop Alerts & In-Park Notifications Engine
// Allows pilgrims to set wait time targets (e.g., "Alert me when Space Mountain <= 30 min" or reopens)
// Triggers audio chimes, mobile vibrations, OS lock-screen notifications, and suggests walking prayer companions.

import { getActiveResortId } from './resort-switcher.js';

const ALERTS_STORAGE_KEY = 'catholic_disney_ride_alerts';

export let activeAlerts = [];
export let swRegistration = null;
let currentModalRide = null;
let backgroundPollTimer = null;

// Initialize Service Worker and Alert Engine
export function initWaitTimeAlerts() {
  loadAlertsFromStorage();
  initServiceWorker();
  injectAlertModalDOM();
  injectToastContainerDOM();
  startBackgroundAlertPolling();
}

function loadAlertsFromStorage() {
  try {
    const saved = localStorage.getItem(ALERTS_STORAGE_KEY);
    activeAlerts = saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.warn('Failed to load active alerts from localStorage:', e);
    activeAlerts = [];
  }
}

export function saveAlertsToStorage() {
  try {
    localStorage.setItem(ALERTS_STORAGE_KEY, JSON.stringify(activeAlerts));
  } catch (e) {
    console.warn('Failed to save alerts to localStorage:', e);
  }
}

function initServiceWorker() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

  navigator.serviceWorker
    .register('sw.js')
    .then((reg) => {
      swRegistration = reg;
      console.log('Catholic Disney Service Worker registered.');
    })
    .catch((err) => {
      console.warn('Catholic Disney Service Worker registration fallback:', err);
    });

  if (navigator.serviceWorker.ready) {
    navigator.serviceWorker.ready.then((reg) => {
      swRegistration = reg;
    });
  }
}

// Sound Chime generator using Web Audio API (church bell / cheerful harp tone)
export function playChimeSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const now = ctx.currentTime;

    // Harmonic bell chord: C5, E5, G5, C6
    const chordFrequencies = [523.25, 659.25, 783.99, 1046.5];

    chordFrequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);

      gain.gain.setValueAtTime(0, now + idx * 0.1);
      gain.gain.linearRampToValueAtTime(0.2, now + idx * 0.1 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 0.55);
    });
  } catch (e) {
    console.warn('Chime audio playback prevented:', e);
  }
}

// In-app Toast message
export function showToast(title, desc, icon = '🔔', durationMs = 6000) {
  const container = document.getElementById('cdToastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'cd-toast-item';
  toast.innerHTML = `
    <span class="cd-toast-icon">${icon}</span>
    <div class="cd-toast-content">
      <span class="cd-toast-title">${escapeHtml(title)}</span>
      <span class="cd-toast-desc">${escapeHtml(desc)}</span>
    </div>
    <button class="cd-toast-close" aria-label="Dismiss">&times;</button>
  `;

  toast.querySelector('.cd-toast-close').addEventListener('click', () => {
    toast.remove();
  });

  container.appendChild(toast);

  if (durationMs > 0) {
    setTimeout(() => {
      if (toast.parentNode) {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }
    }, durationMs);
  }
}

// Request Browser Notification Permission
export async function requestNotificationPermission() {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    showToast('Notifications Unavailable', 'This browser does not support web push notifications.', '⚠️');
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      sendPushNotification(
        '☩ In-Park Wait Alerts Active!',
        'You will now receive device notifications when wait times drop or rides reopen! ✨'
      );
      if (typeof window !== 'undefined' && window.renderLiveWaitTimes) {
        window.renderLiveWaitTimes();
      }
      return true;
    }
  } catch (e) {
    console.warn('Error requesting notification permission:', e);
  }
  return false;
}

// Dispatches OS / Screen Notification
export function sendPushNotification(title, body, data = {}) {
  // 1. Play Chime
  playChimeSound();

  // 2. Hardware vibration
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try {
      navigator.vibrate([350, 150, 350]);
    } catch (e) {}
  }

  // 3. In-App Visual Toast
  showToast(title, body, '🔔', 8000);

  // 4. OS System Lock-Screen Banner
  if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
    const options = {
      body: body,
      icon: 'https://emojicdn.elk.sh/☩',
      badge: 'https://emojicdn.elk.sh/🔔',
      vibrate: [350, 150, 350],
      tag: `cd-alert-${Date.now()}`,
      renotify: true,
      requireInteraction: true,
      data: { url: window.location.href, ...data }
    };

    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'SHOW_NOTIFICATION',
        title: title,
        options: options
      });
    } else if (swRegistration && swRegistration.showNotification) {
      swRegistration.showNotification(title, options).catch(() => {
        tryDirectNotification(title, options);
      });
    } else {
      tryDirectNotification(title, options);
    }
  }
}

function tryDirectNotification(title, options) {
  try {
    new Notification(title, options);
  } catch (e) {
    console.warn('Direct Notification constructor failed:', e);
  }
}

// Evaluates all live rides against active alerts
export function evaluateWaitAlerts(allRides, parkName = 'Disney Park') {
  if (!activeAlerts || activeAlerts.length === 0 || !allRides || allRides.length === 0) {
    return;
  }

  let stateModified = false;

  activeAlerts.forEach((alert) => {
    if (alert.is_active === false) return;

    const ride = allRides.find((r) =>
      String(r.id) === String(alert.ride_id) ||
      Number(r.id) === Number(alert.ride_id) ||
      (alert.ride_name && r.name && r.name.toLowerCase().trim() === alert.ride_name.toLowerCase().trim())
    );

    if (!ride) return;

    const isOpen = Boolean(ride.is_open);
    const waitTime = Number(ride.wait_time) || 0;
    const targetThreshold = Number(alert.threshold) || 30;

    // Update alert's last known live state
    alert.current_wait = isOpen ? waitTime : 'Closed';
    alert.is_open = isOpen;
    if (parkName && parkName !== 'Disney Park') alert.park_name = parkName;

    // Condition A: Wait Time Reached / Dropped
    if (isOpen && waitTime <= targetThreshold) {
      const nowMs = Date.now();
      const lastNotifiedMs = alert.last_notified_at ? new Date(alert.last_notified_at).getTime() : 0;
      const reAlertWindowMs = 5 * 60 * 1000; // 5 mins re-alert interval

      const shouldAlert = !alert.last_notified_at || (nowMs - lastNotifiedMs >= reAlertWindowMs) || (alert.last_notified_wait !== waitTime);

      if (shouldAlert) {
        const prayerSuggestion = waitTime <= 15
          ? 'Walk-on opportunity! Perfect time to head over with a prayer of gratitude.'
          : 'Great queue window! Ideal for 1-2 Decades of the Rosary during your walk & wait.';

        sendPushNotification(
          `🔔 Goal Reached: ${ride.name} (${waitTime}m)!`,
          `Standby wait dropped to ${waitTime} min (Goal ≤ ${targetThreshold}m) at ${alert.park_name || parkName}! ${prayerSuggestion}`,
          { rideId: ride.id }
        );

        alert.last_notified_wait = waitTime;
        alert.last_notified_at = new Date().toISOString();
        alert.status = 'triggered';
        stateModified = true;
      }
    } else if (isOpen && waitTime > targetThreshold) {
      alert.status = 'watching';
      if (alert.was_down) {
        // Reopened from downtime
        if (alert.notify_reopen) {
          sendPushNotification(
            `✨ Reopened: ${ride.name} is Back Online!`,
            `${ride.name} has just reopened from downtime with a ${waitTime} min standby wait at ${alert.park_name || parkName}! Head over now!`,
            { rideId: ride.id }
          );
        }
        alert.was_down = false;
        stateModified = true;
      }
    } else if (!isOpen) {
      alert.status = 'down';
      alert.was_down = true;
      stateModified = true;
    }
  });

  if (stateModified) {
    saveAlertsToStorage();
  }
}

// Multi-park background polling engine
export function startBackgroundAlertPolling() {
  if (backgroundPollTimer) clearInterval(backgroundPollTimer);

  backgroundPollTimer = setInterval(async () => {
    if (!activeAlerts || activeAlerts.length === 0) return;

    // Check if any alerts are active
    const hasActive = activeAlerts.some((a) => a.is_active);
    if (!hasActive) return;

    // Determine unique parks to poll based on active alerts
    const isDlr = getActiveResortId() === 'dlr';
    const parksToPoll = isDlr ? [16, 17] : [6, 5, 7, 8];

    for (const parkId of parksToPoll) {
      try {
        const resp = await fetch(`/api/queue-times/${parkId}`);
        if (!resp.ok) continue;
        const data = await resp.json();
        if (data && data.lands) {
          const parkRides = [];
          data.lands.forEach((land) => {
            if (land.rides) {
              land.rides.forEach((r) => {
                parkRides.push({ ...r, landName: land.name });
              });
            }
          });
          const parkNames = { 6: 'Magic Kingdom', 5: 'EPCOT', 7: 'Hollywood Studios', 8: 'Animal Kingdom', 16: 'Disneyland Park', 17: 'Disney California Adventure' };
          evaluateWaitAlerts(parkRides, parkNames[parkId] || 'Disney Park');
        }
      } catch (e) {
        // Offline / CORS fallback
      }
    }
  }, 45000);
}

// Generates the comprehensive Active Alerts & Notification Center HTML
export function getActiveAlertsManagerHTML(allRides = []) {
  const isDlr = getActiveResortId() === 'dlr';
  const permissionStatus = typeof window !== 'undefined' && 'Notification' in window ? Notification.permission : 'unsupported';
  const alertsCount = (activeAlerts || []).length;
  const activeCount = (activeAlerts || []).filter((a) => a.is_active).length;

  return `
    <!-- Active Alerts & In-Park Notification Center -->
    <div class="cd-alerts-manager-card" id="cd-alerts-manager-card" style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 20px; padding: 22px; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05); margin-bottom: 24px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid #f1f5f9;">
        <div>
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span class="park-pill" style="background: #e0f2fe; color: #0369a1; font-weight: 800; font-size: 0.78rem;">
              🔔 In-Park Notification Center
            </span>
            <span style="font-size: 0.78rem; font-weight: 800; color: ${activeCount > 0 ? '#166534' : '#64748b'}; background: ${activeCount > 0 ? '#dcfce7' : '#f1f5f9'}; padding: 2px 8px; border-radius: 999px;">
              ${activeCount} Active ${activeCount === 1 ? 'Alert' : 'Alerts'}
            </span>
          </div>
          <h3 style="font-size: 1.35rem; color: #0f172a; margin: 6px 0 2px; font-weight: 800;">
            My Ride Wait Alerts &amp; Reopen Tracker
          </h3>
          <p style="font-size: 0.86rem; color: #64748b; margin: 0; max-width: 650px;">
            Set your target wait times for headliners. Our engine monitors live standby lines every 45s and triggers phone chimes, haptics, and lock-screen alerts the moment waits drop or rides reopen!
          </p>
        </div>

        <!-- Controls: Permission & Test Chime -->
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          ${permissionStatus !== 'granted' ? `
            <button class="btn btn-sm btn-sun" onclick="window.requestDeviceNotificationPermission()" style="font-size: 0.82rem; padding: 6px 14px; font-weight: 800;">
              📲 Enable Phone Push Alerts
            </button>
          ` : `
            <span style="font-size: 0.78rem; color: #166534; background: #dcfce7; padding: 6px 12px; border-radius: 10px; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
              📱 Lock-Screen Alerts: <strong>Active ✅</strong>
            </span>
          `}
          <button class="btn btn-sm btn-outline" onclick="window.testDeviceAlertChime()" style="font-size: 0.82rem; padding: 6px 12px;" title="Test Harmonic Chime, Vibration & Lock-Screen Push">
            🎵 Test Chime &amp; Push
          </button>
        </div>
      </div>

      <!-- Alerts List / Grid -->
      ${alertsCount > 0 ? `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 12px; margin-bottom: 16px;">
          ${activeAlerts.map((alert) => {
            const currentWait = alert.current_wait !== undefined ? alert.current_wait : '--';
            const isClosed = currentWait === 'Closed' || alert.status === 'down';
            const isGoalMet = !isClosed && typeof currentWait === 'number' && currentWait <= alert.threshold;
            
            let statusBadge = '';
            if (isGoalMet) {
              statusBadge = `<span style="background: #dcfce7; color: #166534; font-weight: 800; padding: 3px 8px; border-radius: 6px; font-size: 0.76rem;">🎯 GOAL MET (${currentWait}m ≤ ${alert.threshold}m)</span>`;
            } else if (isClosed) {
              statusBadge = `<span style="background: #fee2e2; color: #991b1b; font-weight: 800; padding: 3px 8px; border-radius: 6px; font-size: 0.76rem;">🔴 CLOSED (Reopen Alert ON)</span>`;
            } else {
              statusBadge = `<span style="background: #eff6ff; color: #1e40af; font-weight: 800; padding: 3px 8px; border-radius: 6px; font-size: 0.76rem;">👀 WATCHING (${currentWait}m / Goal ≤${alert.threshold}m)</span>`;
            }

            return `
              <div style="background: #f8fafc; border: 1.5px solid ${isGoalMet ? '#86efac' : '#cbd5e1'}; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; justify-content: space-between; gap: 10px; box-shadow: ${isGoalMet ? '0 4px 12px rgba(22, 101, 52, 0.08)' : 'none'};">
                <div>
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 6px; margin-bottom: 6px;">
                    <div>
                      <strong style="color: #0f172a; font-size: 0.95rem; display: block;">🎢 ${escapeHtml(alert.ride_name)}</strong>
                      <span style="font-size: 0.76rem; color: #64748b;">${escapeHtml(alert.park_name || 'Disney Park')} • ${escapeHtml(alert.land_name || 'Attraction')}</span>
                    </div>
                    ${statusBadge}
                  </div>

                  <div style="font-size: 0.8rem; color: #475569; line-height: 1.4; margin-top: 4px;">
                    <div>🎯 <strong>Target:</strong> Alert when wait drops to <strong>&le; ${alert.threshold} mins</strong></div>
                    <div>🔔 <strong>Reopen Alert:</strong> ${alert.notify_reopen !== false ? 'Enabled (Notifies when back up)' : 'Off'}</div>
                  </div>
                </div>

                <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px; border-top: 1px solid #e2e8f0; padding-top: 10px; margin-top: 4px; flex-wrap: wrap;">
                  <button class="btn btn-sm btn-sun" onclick="window.simulateRideAlert('${alert.id}')" style="font-size: 0.76rem; padding: 4px 10px;" title="Test notification for this attraction">
                    🧪 Simulate Alert
                  </button>
                  <div style="display: flex; gap: 6px;">
                    <button class="btn btn-sm btn-outline" onclick="window.editAlert('${alert.id}')" style="font-size: 0.76rem; padding: 4px 8px;">
                      ✏️ Edit
                    </button>
                    <button class="btn btn-sm btn-outline" onclick="window.deleteActiveAlert('${alert.id}')" style="font-size: 0.76rem; padding: 4px 8px; color: #dc2626;" title="Delete Alert">
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      ` : `
        <!-- Empty State: No alerts configured -->
        <div style="background: #f8fafc; border: 1.5px dashed #cbd5e1; border-radius: 14px; padding: 20px; text-align: center; margin-bottom: 16px;">
          <div style="font-size: 1.8rem; margin-bottom: 6px;">🔔</div>
          <h4 style="font-size: 1.05rem; color: #0f172a; margin: 0 0 4px; font-weight: 800;">
            No Active Wait Alerts Configured
          </h4>
          <p style="font-size: 0.86rem; color: #64748b; margin: 0 0 14px; max-width: 520px; margin-left: auto; margin-right: auto;">
            Tap the <strong>🔔 Alert</strong> button on any attraction card below to monitor wait time drops, or use the 1-click quick presets below for popular headliners!
          </p>

          <!-- 1-Click Preset Shortcuts -->
          <div style="display: flex; justify-content: center; gap: 8px; flex-wrap: wrap;">
            ${isDlr ? `
              <button class="btn btn-sm btn-outline" onclick="window.quickSetAlert('Space Mountain', 16, 25)" style="font-size: 0.78rem;">
                + 🚀 Space Mountain (&le;25m)
              </button>
              <button class="btn btn-sm btn-outline" onclick="window.quickSetAlert('Radiator Springs Racers', 17, 35)" style="font-size: 0.78rem;">
                + 🏎️ Radiator Springs (&le;35m)
              </button>
              <button class="btn btn-sm btn-outline" onclick="window.quickSetAlert('Indiana Jones Adventure', 16, 30)" style="font-size: 0.78rem;">
                + 🐍 Indiana Jones (&le;30m)
              </button>
              <button class="btn btn-sm btn-outline" onclick="window.quickSetAlert('Matterhorn Bobsleds', 16, 25)" style="font-size: 0.78rem;">
                + 🏔️ Matterhorn (&le;25m)
              </button>
            ` : `
              <button class="btn btn-sm btn-outline" onclick="window.quickSetAlert('Space Mountain', 6, 30)" style="font-size: 0.78rem;">
                + 🚀 Space Mountain (&le;30m)
              </button>
              <button class="btn btn-sm btn-outline" onclick="window.quickSetAlert('Star Wars: Rise of the Resistance', 7, 45)" style="font-size: 0.78rem;">
                + ⚔️ Rise of Resistance (&le;45m)
              </button>
              <button class="btn btn-sm btn-outline" onclick="window.quickSetAlert('Seven Dwarfs Mine Train', 6, 35)" style="font-size: 0.78rem;">
                + 💎 Seven Dwarfs (&le;35m)
              </button>
              <button class="btn btn-sm btn-outline" onclick="window.quickSetAlert('Avatar Flight of Passage', 8, 45)" style="font-size: 0.78rem;">
                + 🦅 Flight of Passage (&le;45m)
              </button>
            `}
          </div>
        </div>
      `}
    </div>
  `;
}

// Injects the alert configuration modal into DOM
function injectAlertModalDOM() {
  if (document.getElementById('cdAlertModal')) return;

  const modalEl = document.createElement('div');
  modalEl.id = 'cdAlertModal';
  modalEl.className = 'cd-modal-overlay hidden';
  modalEl.setAttribute('role', 'dialog');
  modalEl.setAttribute('aria-modal', 'true');
  modalEl.innerHTML = `
    <div class="cd-modal-card">
      <div class="cd-modal-header">
        <div>
          <span class="cd-modal-badge">🔔 IN-PARK WAIT ALERT</span>
          <h3 id="cdModalRideTitle" class="cd-modal-title">Set Wait Alert</h3>
          <p id="cdModalRideMeta" class="cd-modal-meta">Disneyland Resort</p>
        </div>
        <button id="cdCloseAlertModalBtn" class="cd-modal-close-btn" aria-label="Close">&times;</button>
      </div>

      <div class="cd-modal-body">
        <div class="cd-current-wait-box">
          <span class="cd-wait-label">Current Standby Time:</span>
          <span id="cdModalCurrentWaitVal" class="cd-wait-val">-- min</span>
        </div>

        <div class="cd-modal-control-group">
          <label class="cd-modal-input-label">
            Notify me when wait drops to or below:
            <span id="cdThresholdDisplay" class="cd-threshold-badge">30 mins</span>
          </label>
          <input type="range" id="cdThresholdSlider" min="5" max="90" step="5" value="30" class="cd-threshold-slider">
          
          <div class="cd-preset-chips">
            <button type="button" class="cd-preset-chip" data-threshold="15">&le; 15 min (Walk-On)</button>
            <button type="button" class="cd-preset-chip active" data-threshold="30">&le; 30 min</button>
            <button type="button" class="cd-preset-chip" data-threshold="45">&le; 45 min</button>
            <button type="button" class="cd-preset-chip" data-threshold="60">&le; 60 min</button>
          </div>
        </div>

        <div class="cd-modal-toggle-row">
          <label style="display:flex; align-items:center; gap:8px; cursor:pointer; font-size:0.88rem; color:#1e293b; font-weight:600;">
            <input type="checkbox" id="cdNotifyReopenCheckbox" checked style="width:18px; height:18px; accent-color:#1a73e8;">
            Also notify if ride reopens from downtime
          </label>
        </div>

        <div id="cdPermissionNoticeBox" class="cd-permission-notice hidden">
          <span>🔔 <strong>Device Alerts:</strong> Click "Save Alert" to enable lock-screen notifications and audio chimes on your phone.</span>
        </div>
      </div>

      <div class="cd-modal-footer">
        <button id="cdCancelAlertBtn" class="btn btn-outline" style="font-size:0.88rem; padding:8px 16px;">Cancel</button>
        <button id="cdSaveAlertBtn" class="btn btn-primary" style="font-size:0.88rem; padding:8px 20px;">
          <span>🔔 Save In-Park Alert</span>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modalEl);

  // Setup listeners
  document.getElementById('cdCloseAlertModalBtn').addEventListener('click', closeAlertModal);
  document.getElementById('cdCancelAlertBtn').addEventListener('click', closeAlertModal);
  document.getElementById('cdSaveAlertBtn').addEventListener('click', saveCurrentModalAlert);

  const slider = document.getElementById('cdThresholdSlider');
  const display = document.getElementById('cdThresholdDisplay');
  if (slider && display) {
    slider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      display.textContent = `${val} mins`;
      document.querySelectorAll('.cd-preset-chip').forEach((c) => {
        c.classList.toggle('active', parseInt(c.getAttribute('data-threshold'), 10) === val);
      });
    });
  }

  document.querySelectorAll('.cd-preset-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.cd-preset-chip').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      const val = parseInt(chip.getAttribute('data-threshold'), 10);
      if (slider) slider.value = val;
      if (display) display.textContent = `${val} mins`;
    });
  });
}

function injectToastContainerDOM() {
  if (document.getElementById('cdToastContainer')) return;
  const toastContainer = document.createElement('div');
  toastContainer.id = 'cdToastContainer';
  toastContainer.className = 'cd-toast-container';
  document.body.appendChild(toastContainer);
}

// Opens the Alert modal for a specific ride
export function openSetAlertModal(ride, parkName = 'Disney Park') {
  if (!ride) return;
  currentModalRide = { ...ride, parkName };

  const modal = document.getElementById('cdAlertModal');
  const titleEl = document.getElementById('cdModalRideTitle');
  const metaEl = document.getElementById('cdModalRideMeta');
  const waitValEl = document.getElementById('cdModalCurrentWaitVal');
  const slider = document.getElementById('cdThresholdSlider');
  const display = document.getElementById('cdThresholdDisplay');
  const reopenCb = document.getElementById('cdNotifyReopenCheckbox');
  const noticeBox = document.getElementById('cdPermissionNoticeBox');

  if (titleEl) titleEl.textContent = ride.name;
  if (metaEl) metaEl.textContent = `🏰 ${parkName} • ${ride.landName || 'Attraction'}`;

  if (waitValEl) {
    if (ride.is_open) {
      waitValEl.textContent = `${ride.wait_time} min standby`;
      waitValEl.style.color = ride.wait_time <= 25 ? '#166534' : '#1a73e8';
    } else {
      waitValEl.textContent = 'Closed (Downtime)';
      waitValEl.style.color = '#dc2626';
    }
  }

  const existingAlert = activeAlerts.find((a) => String(a.ride_id) === String(ride.id) || Number(a.ride_id) === Number(ride.id) || (a.ride_name && a.ride_name === ride.name));
  const defaultThreshold = existingAlert ? existingAlert.threshold : (ride.wait_time > 30 ? Math.min(60, Math.floor(ride.wait_time / 10) * 10 - 10) : 25);
  const finalThreshold = Math.max(5, defaultThreshold || 30);

  if (slider) slider.value = finalThreshold;
  if (display) display.textContent = `${finalThreshold} mins`;
  if (reopenCb) reopenCb.checked = existingAlert ? existingAlert.notify_reopen !== false : true;

  document.querySelectorAll('.cd-preset-chip').forEach((chip) => {
    chip.classList.toggle('active', parseInt(chip.getAttribute('data-threshold'), 10) === finalThreshold);
  });

  if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission !== 'granted') {
    if (noticeBox) noticeBox.classList.remove('hidden');
  } else {
    if (noticeBox) noticeBox.classList.add('hidden');
  }

  if (modal) modal.classList.remove('hidden');
}

export function closeAlertModal() {
  const modal = document.getElementById('cdAlertModal');
  if (modal) modal.classList.add('hidden');
  currentModalRide = null;
}

async function saveCurrentModalAlert() {
  if (!currentModalRide) return;

  const slider = document.getElementById('cdThresholdSlider');
  const reopenCb = document.getElementById('cdNotifyReopenCheckbox');
  const threshold = slider ? parseInt(slider.value, 10) : 30;
  const notifyReopen = reopenCb ? reopenCb.checked : true;

  if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'default') {
    await requestNotificationPermission();
  }

  const existingIdx = activeAlerts.findIndex((a) => String(a.ride_id) === String(currentModalRide.id) || Number(a.ride_id) === Number(currentModalRide.id) || (a.ride_name && a.ride_name.toLowerCase() === currentModalRide.name.toLowerCase()));

  const newAlert = {
    id: existingIdx >= 0 ? activeAlerts[existingIdx].id : `cd_alert_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    ride_id: currentModalRide.id,
    ride_name: currentModalRide.name,
    park_name: currentModalRide.parkName || 'Disney Park',
    land_name: currentModalRide.landName || 'Attraction',
    threshold: threshold,
    notify_reopen: notifyReopen,
    is_active: true,
    current_wait: currentModalRide.is_open ? currentModalRide.wait_time : 'Closed',
    is_open: Boolean(currentModalRide.is_open),
    last_notified_wait: null,
    was_down: !currentModalRide.is_open,
    created_at: new Date().toISOString()
  };

  if (existingIdx >= 0) {
    activeAlerts[existingIdx] = newAlert;
  } else {
    activeAlerts.push(newAlert);
  }

  saveAlertsToStorage();
  closeAlertModal();

  showToast(
    `🔔 Alert Active for ${currentModalRide.name}`,
    `You will be notified when wait drops to ≤ ${threshold} min${notifyReopen ? ' or reopens' : ''}!`,
    '✅'
  );
  playChimeSound();

  // Re-render live board & alert center
  if (typeof window !== 'undefined' && window.renderLiveWaitTimes) {
    window.renderLiveWaitTimes();
  }
}

export function deleteAlert(alertId) {
  activeAlerts = activeAlerts.filter((a) => a.id !== alertId);
  saveAlertsToStorage();
  showToast('Alert Removed', 'You will no longer receive alerts for this attraction.', 'ℹ️');
  if (typeof window !== 'undefined' && window.renderLiveWaitTimes) {
    window.renderLiveWaitTimes();
  }
}

// 1-Click Preset Setup
export function quickSetAlert(rideName, parkId, threshold = 30) {
  if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'default') {
    requestNotificationPermission().catch(() => {});
  }

  const parkNames = { 6: 'Magic Kingdom', 5: 'EPCOT', 7: 'Hollywood Studios', 8: 'Animal Kingdom', 16: 'Disneyland Park', 17: 'Disney California Adventure' };
  const parkName = parkNames[parkId] || 'Disney Park';


  const existingIdx = activeAlerts.findIndex((a) => a.ride_name && a.ride_name.toLowerCase().trim() === rideName.toLowerCase().trim());

  const newAlert = {
    id: existingIdx >= 0 ? activeAlerts[existingIdx].id : `cd_alert_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    ride_id: existingIdx >= 0 ? activeAlerts[existingIdx].ride_id : `ride_${rideName.replace(/\W+/g, '_').toLowerCase()}`,
    ride_name: rideName,
    park_name: parkName,
    land_name: 'Attraction',
    threshold: threshold,
    notify_reopen: true,
    is_active: true,
    current_wait: 'Watching',
    is_open: true,
    last_notified_wait: null,
    was_down: false,
    created_at: new Date().toISOString()
  };

  if (existingIdx >= 0) {
    activeAlerts[existingIdx] = newAlert;
  } else {
    activeAlerts.push(newAlert);
  }


  saveAlertsToStorage();
  playChimeSound();
  showToast(
    `🔔 Alert Active: ${rideName}`,
    `Monitoring standby lines for drops &le; ${threshold} mins & reopenings!`,
    '✅'
  );

  if (typeof window !== 'undefined' && window.renderLiveWaitTimes) {
    window.renderLiveWaitTimes();
  }
}

// Simulates an alert trigger on demand so the user can verify device chimes & push
export function simulateRideAlert(alertId) {
  const alert = (activeAlerts || []).find((a) => a.id === alertId);
  if (!alert) return;

  const targetThreshold = alert.threshold || 30;
  const simulatedWait = Math.max(5, targetThreshold - 10);

  sendPushNotification(
    `🔔 Goal Reached: ${alert.ride_name} (${simulatedWait}m)!`,
    `Standby wait dropped to ${simulatedWait} min (Goal ≤ ${targetThreshold}m) at ${alert.park_name}! Walk-on window open! Perfect time for 1 Decade of the Rosary on your walk. ✨`,
    { rideId: alert.ride_id }
  );

  alert.current_wait = simulatedWait;
  alert.is_open = true;
  alert.status = 'triggered';
  saveAlertsToStorage();

  if (typeof window !== 'undefined' && window.renderLiveWaitTimes) {
    window.renderLiveWaitTimes();
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Global Window Helpers
if (typeof window !== 'undefined') {
  window.getActiveAlerts = () => activeAlerts;

  window.setRideAlert = (rideName, threshold, parkId = 'magic-kingdom', notifyReopen = true) => {
    quickSetAlert(rideName, parkId, threshold);
  };

  window.openSetAlertModal = (rideJsonStr, parkName) => {
    try {
      const ride = typeof rideJsonStr === 'string' ? JSON.parse(decodeURIComponent(rideJsonStr)) : rideJsonStr;
      openSetAlertModal(ride, parkName);
    } catch (e) {
      console.warn('Failed to parse ride data for alert modal:', e);
    }
  };

  window.deleteActiveAlert = (alertId) => {
    deleteAlert(alertId);
  };

  window.editAlert = (alertId) => {
    const alert = (activeAlerts || []).find((a) => a.id === alertId);
    if (alert) {
      openSetAlertModal({
        id: alert.ride_id,
        name: alert.ride_name,
        wait_time: typeof alert.current_wait === 'number' ? alert.current_wait : alert.threshold,
        is_open: alert.is_open !== false,
        landName: alert.land_name
      }, alert.park_name);
    }
  };

  window.quickSetAlert = (rideName, parkId, threshold) => {
    quickSetAlert(rideName, parkId, threshold);
  };

  window.simulateRideAlert = (alertId) => {
    simulateRideAlert(alertId);
  };

  window.requestDeviceNotificationPermission = async () => {
    await requestNotificationPermission();
  };

  window.testDeviceAlertChime = async () => {
    if ('Notification' in window && Notification.permission !== 'granted') {
      await requestNotificationPermission();
    }
    sendPushNotification(
      '☩ Catholic Disney In-Park Alert Test',
      'Harmonic chime, haptic vibration, and lock-screen alerts are working! You will be alerted when wait times drop. ✨'
    );
  };
}


