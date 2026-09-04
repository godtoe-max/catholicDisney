// Catholic Disney: Ride Wait Time Drop Alerts & In-Park Notifications Engine
// Allows pilgrims to set wait time targets (e.g., "Alert me when Space Mountain <= 30 min")
// Triggers audio chimes, mobile vibrations, OS lock-screen notifications, and suggests walking prayer companions.

const ALERTS_STORAGE_KEY = 'catholic_disney_ride_alerts';

export let activeAlerts = [];
export let swRegistration = null;
let currentModalRide = null;

// Initialize Service Worker and Alert Engine
export function initWaitTimeAlerts() {
  loadAlertsFromStorage();
  initServiceWorker();
  injectAlertModalDOM();
  injectToastContainerDOM();
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

    // Condition A: Wait Time Reached / Dropped
    if (isOpen && waitTime <= targetThreshold) {
      const nowMs = Date.now();
      const lastNotifiedMs = alert.last_notified_at ? new Date(alert.last_notified_at).getTime() : 0;
      const reAlertWindowMs = 6 * 60 * 1000; // 6 mins re-alert interval

      const shouldAlert = !alert.last_notified_at || (nowMs - lastNotifiedMs >= reAlertWindowMs) || (alert.last_notified_wait !== waitTime);

      if (shouldAlert) {
        const prayerSuggestion = waitTime <= 15
          ? 'Walk-on opportunity! Perfect time to walk over with a short prayer of gratitude.'
          : 'Great queue window! Ideal for 1-2 Decades of the Rosary during your walk & wait.';

        sendPushNotification(
          `🔔 Goal Reached: ${ride.name} (${waitTime}m)!`,
          `Standby wait dropped to ${waitTime} min (Goal ≤ ${targetThreshold}m) at ${parkName}! ${prayerSuggestion}`,
          { rideId: ride.id }
        );

        alert.last_notified_wait = waitTime;
        alert.last_notified_at = new Date().toISOString();
        stateModified = true;
      }
    } else if (isOpen && waitTime > targetThreshold) {
      if (alert.last_notified_wait !== null || alert.last_notified_at) {
        alert.last_notified_wait = null;
        alert.last_notified_at = null;
        stateModified = true;
      }
    }

    // Condition B: Ride Reopening from Downtime
    if (alert.notify_reopen && alert.was_down && isOpen) {
      sendPushNotification(
        `✨ Reopened: ${ride.name}!`,
        `${ride.name} is back up with a ${waitTime} min standby wait! Head over now before lines build up.`,
        { rideId: ride.id }
      );
      alert.was_down = false;
      stateModified = true;
    } else if (!isOpen) {
      alert.was_down = true;
    }
  });

  if (stateModified) {
    saveAlertsToStorage();
  }
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

  const existingAlert = activeAlerts.find((a) => String(a.ride_id) === String(ride.id) || Number(a.ride_id) === Number(ride.id));
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

  const existingIdx = activeAlerts.findIndex((a) => String(a.ride_id) === String(currentModalRide.id) || Number(a.ride_id) === Number(currentModalRide.id));

  const newAlert = {
    id: existingIdx >= 0 ? activeAlerts[existingIdx].id : `cd_alert_${Date.now()}`,
    ride_id: currentModalRide.id,
    ride_name: currentModalRide.name,
    park_name: currentModalRide.parkName || 'Disney Park',
    land_name: currentModalRide.landName || 'Attraction',
    threshold: threshold,
    notify_reopen: notifyReopen,
    is_active: true,
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
    `🔔 Alert Set for ${currentModalRide.name}`,
    `You'll be alerted when wait drops to ≤ ${threshold} min${notifyReopen ? ' or reopens' : ''}!`,
    '✅'
  );
  playChimeSound();

  // Re-render live board so alert badges update
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

// Generates HTML for the Goal Reached strip at the top of the wait times board
export function getTriggeredAlertsBannerHTML(allRides) {
  if (!activeAlerts || activeAlerts.length === 0 || !allRides || allRides.length === 0) {
    return '';
  }

  const triggered = [];

  activeAlerts.forEach((alert) => {
    if (!alert.is_active) return;
    const ride = allRides.find((r) =>
      String(r.id) === String(alert.ride_id) ||
      Number(r.id) === Number(alert.ride_id) ||
      (alert.ride_name && r.name && r.name.toLowerCase().trim() === alert.ride_name.toLowerCase().trim())
    );

    if (ride && ride.is_open && Number(ride.wait_time) <= Number(alert.threshold)) {
      triggered.push({
        alert,
        ride,
        waitTime: Number(ride.wait_time)
      });
    }
  });

  if (triggered.length === 0) return '';

  return `
    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border: 1.5px solid #86efac; border-radius: 16px; padding: 14px 18px; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(22, 101, 52, 0.08);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 1.4rem;">🎯</span>
          <div>
            <h4 style="margin: 0; font-size: 1rem; font-weight: 800; color: #166534;">
              Goal Reached! Walk-On &amp; Queue Prayer Opportunities (${triggered.length})
            </h4>
            <p style="margin: 2px 0 0; font-size: 0.8rem; color: #15803d;">
              Standby wait times have dropped into your target window. Perfect time to walk over!
            </p>
          </div>
        </div>
        <button class="btn btn-sm btn-sun" onclick="window.testDeviceAlertChime()" style="font-size: 0.78rem; padding: 4px 10px;">
          🔔 Test Chime &amp; Push
        </button>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px;">
        ${triggered.map(t => `
          <div style="background: #ffffff; border: 1px solid #86efac; border-radius: 10px; padding: 6px 12px; display: inline-flex; align-items: center; gap: 8px; font-size: 0.84rem; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
            <span style="font-weight: 800; color: #0f172a;">🎢 ${escapeHtml(t.ride.name)}</span>
            <span style="background: #dcfce7; color: #166534; font-weight: 800; padding: 2px 8px; border-radius: 999px; font-size: 0.76rem;">
              ${t.waitTime}m (Goal &le;${t.alert.threshold}m)
            </span>
            <button onclick="window.deleteActiveAlert('${t.alert.id}')" title="Dismiss Alert" style="background:none; border:none; color:#94a3b8; font-size:1.1rem; cursor:pointer; padding:0 2px; line-height:1;">&times;</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
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
