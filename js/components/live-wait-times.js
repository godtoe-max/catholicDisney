// Catholic Disney: Live Park Wait Times Board
// Fetches real-time queue times from Queue-Times API (proxied via /api/queue-times/:park_id)
// Matches attractions with tier classifications, 0.72 deflated real waits, Catholic prayer nooks, and In-Park Drop Alerts

import { RIDE_TIERS } from '../data/ride-tiers.js?v=20260902_v2';
import { getCompanionForRide } from '../data/queue-companions-data.js?v=20260902_v2';
import { getDisneylandCompanionForRide } from '../data/disneyland-queue-companions-data.js?v=20260902_v2';
import { getActiveResort, getActiveResortId } from './resort-switcher.js?v=20260902_v2';
import { 
  initWaitTimeAlerts, 
  evaluateWaitAlerts, 
  getTriggeredAlertsBannerHTML, 
  activeAlerts,
  openSetAlertModal,
  requestNotificationPermission
} from './wait-time-alerts.js?v=20260904_v1';

function getLiveParks() {
  return getActiveResort().parks;
}

let activeLiveParkId = getActiveResort().defaultLiveParkId;
let liveDataCache = {};
let isLoading = false;
let searchQuery = "";
let statusFilter = "all"; // 'all', 'open', 'low'
let autoPollInterval = null;

export function initLiveWaitTimes(containerId = 'live-wait-times-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  initWaitTimeAlerts();

  activeLiveParkId = getActiveResort().defaultLiveParkId;
  renderLiveWaitTimes(containerId);
  loadParkWaitTimes(activeLiveParkId, containerId);

  window.addEventListener('catholic-resort-changed', (e) => {
    const res = (e && e.detail && e.detail.resort) || getActiveResort();
    activeLiveParkId = res ? res.defaultLiveParkId : 16;
    loadParkWaitTimes(activeLiveParkId, containerId);
  });

  // Background auto-refresh polling every 90 seconds while tab is active in-park
  if (!autoPollInterval) {
    autoPollInterval = setInterval(() => {
      const waitTimesTab = document.getElementById('wait-times-tab');
      if (waitTimesTab && !waitTimesTab.classList.contains('hidden') && !isLoading) {
        loadParkWaitTimes(activeLiveParkId, containerId, true);
      }
    }, 90000);
  }
}

export async function loadParkWaitTimes(parkId, containerId = 'live-wait-times-container', isSilent = false) {
  if (!isSilent) {
    isLoading = true;
    renderLiveWaitTimes(containerId);
  }
  activeLiveParkId = parkId;

  try {
    const targetUrl = `/api/queue-times/${parkId}`;
    const resp = await fetch(targetUrl);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    liveDataCache[parkId] = {
      timestamp: new Date(),
      data: data
    };

    // Extract all rides for evaluating active alerts
    let parkRides = [];
    if (data && data.lands) {
      data.lands.forEach(land => {
        if (land.rides) {
          land.rides.forEach(r => {
            parkRides.push({ ...r, landName: land.name });
          });
        }
      });
    }

    const currentPark = getLiveParks().find(p => p.id === parkId) || { name: 'Disney Park' };
    evaluateWaitAlerts(parkRides, currentPark.name);

  } catch (err) {
    console.error("Failed to load live wait times:", err);
    if (!liveDataCache[parkId]) {
      liveDataCache[parkId] = {
        timestamp: new Date(),
        error: "Unable to retrieve live wait times from queue servers. Please try again shortly."
      };
    }
  } finally {
    isLoading = false;
    renderLiveWaitTimes(containerId);
  }
}

export function renderLiveWaitTimes(containerId = 'live-wait-times-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const parksList = getLiveParks();
  const currentPark = parksList.find(p => p.id === activeLiveParkId) || parksList[0];
  if (currentPark && activeLiveParkId !== currentPark.id) {
    activeLiveParkId = currentPark.id;
  }
  const cached = liveDataCache[activeLiveParkId];
  const lastUpdated = cached && cached.timestamp ? cached.timestamp.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) : null;

  let allRides = [];
  let lands = [];

  if (cached && cached.data && cached.data.lands) {
    lands = cached.data.lands;
    cached.data.lands.forEach(land => {
      if (land.rides) {
        land.rides.forEach(r => {
          allRides.push({
            ...r,
            landName: land.name
          });
        });
      }
    });
  }

  // Filter rides
  const filteredRides = allRides.filter(r => {
    const matchesSearch = !searchQuery || r.name.toLowerCase().includes(searchQuery.toLowerCase()) || (r.landName && r.landName.toLowerCase().includes(searchQuery.toLowerCase()));
    if (!matchesSearch) return false;
    if (statusFilter === 'open') return r.is_open;
    if (statusFilter === 'low') return r.is_open && r.wait_time <= 25;
    return true;
  });

  const openCount = allRides.filter(r => r.is_open).length;
  const closedCount = allRides.filter(r => !r.is_open).length;
  const avgWait = openCount > 0 
    ? Math.round(allRides.filter(r => r.is_open && r.wait_time > 0).reduce((acc, r) => acc + r.wait_time, 0) / Math.max(1, allRides.filter(r => r.is_open && r.wait_time > 0).length)) 
    : 0;

  const triggeredBannerHTML = getTriggeredAlertsBannerHTML(allRides);

  container.innerHTML = `
    <div class="live-wait-times-board" style="margin-top: 10px;">
      <!-- Triggered Goal Alert Banner (if threshold is met) -->
      ${triggeredBannerHTML}

      <!-- Header & Park Selector Bar -->
      <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 20px; padding: 22px 24px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04); margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; margin-bottom: 18px;">
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 8px #22c55e;"></span>
              <span style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #166534; letter-spacing: 0.5px;">
                Live Theme Park Wait Times
              </span>
            </div>
            <h3 style="font-size: 1.65rem; color: #0f172a; margin: 4px 0 2px; font-weight: 800;">
              ${currentPark.icon} ${currentPark.name} Live Queue Board
            </h3>
            <div style="font-size: 0.88rem; color: #64748b;">
              ${lastUpdated ? `Live sync as of <strong>${lastUpdated}</strong> • ` : ''}
              <strong>${openCount}</strong> open attractions (${closedCount} temporarily closed) • Park Avg Wait: <strong>${avgWait}m</strong>
            </div>
          </div>

          <div style="display: flex; gap: 8px; align-items: center;">
            <button class="btn btn-outline" onclick="window.testDeviceAlertChime()" style="font-size: 0.84rem; padding: 8px 14px;" title="Test Lock-Screen Notifications & Chime">
              🔔 Test Alert Sound
            </button>
            <button class="btn btn-sun" onclick="window.refreshLivePark(${activeLiveParkId})" ${isLoading ? 'disabled' : ''} style="font-size: 0.88rem; padding: 8px 16px;">
              ${isLoading ? '⏳ Refreshing...' : '🔄 Refresh Live Data'}
            </button>
          </div>
        </div>

        <!-- Park Switcher Pills -->
        <div style="display: flex; gap: 8px; flex-wrap: wrap; padding-bottom: 14px; border-bottom: 1px solid #f1f5f9;">
          ${parksList.map(p => `
            <button class="park-tab-pill ${p.id === activeLiveParkId ? 'active' : ''}" onclick="window.switchLivePark(${p.id})" style="font-size: 0.88rem; padding: 8px 18px;">
              ${p.icon} ${p.name}
            </button>
          `).join('')}
        </div>

        <!-- Search & Filter Controls -->
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-top: 14px;">
          <div style="flex: 1; min-width: 220px;">
            <input type="text" class="form-input" placeholder="🔍 Search attraction or land..." value="${searchQuery}" oninput="window.handleLiveSearch(this.value)" style="padding: 8px 12px; font-size: 0.88rem; border-radius: 10px; background: #f8fafc;">
          </div>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-sm ${statusFilter === 'all' ? 'btn-primary' : 'btn-outline'}" onclick="window.handleStatusFilter('all')" style="font-size: 0.8rem; padding: 6px 12px;">
              All (${allRides.length})
            </button>
            <button class="btn btn-sm ${statusFilter === 'open' ? 'btn-primary' : 'btn-outline'}" onclick="window.handleStatusFilter('open')" style="font-size: 0.8rem; padding: 6px 12px;">
              Open Only (${openCount})
            </button>
            <button class="btn btn-sm ${statusFilter === 'low' ? 'btn-primary' : 'btn-outline'}" onclick="window.handleStatusFilter('low')" style="font-size: 0.8rem; padding: 6px 12px;">
              Walk-Ons &le;25m
            </button>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      ${isLoading && (!cached || !cached.data) ? `
        <div style="text-align: center; padding: 60px 20px; background: #ffffff; border-radius: 20px; border: 1.5px solid #e2e8f0;">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">⏳</div>
          <h4 style="font-size: 1.25rem; color: #0f172a; margin-bottom: 6px;">Connecting to Live Disney Queue Servers...</h4>
          <p style="color: #64748b; font-size: 0.92rem; margin: 0;">Pulling live standby times for ${currentPark.name}...</p>
        </div>
      ` : ''}

      <!-- Error State -->
      ${cached && cached.error ? `
        <div style="background: #fef2f2; border: 1.5px solid #fca5a5; border-radius: 16px; padding: 24px; text-align: center; margin-bottom: 24px;">
          <span style="font-size: 2rem;">⚠️</span>
          <h4 style="color: #991b1b; font-size: 1.15rem; margin: 8px 0 4px;">Live Queue Feed Unavailable</h4>
          <p style="color: #7f1d1d; font-size: 0.9rem; margin-bottom: 14px;">${cached.error}</p>
          <button class="btn btn-primary" onclick="window.refreshLivePark(${activeLiveParkId})">
            Try Reconnecting 🔄
          </button>
        </div>
      ` : ''}

      <!-- Live Rides Grid -->
      ${!isLoading && filteredRides.length > 0 ? `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 14px;">
          ${filteredRides.map(r => {
            const deflatedWait = Math.round(r.wait_time * 0.72);
            const isLongWait = r.wait_time >= 35;
            const tierMeta = Object.values(RIDE_TIERS).find(t => t.name.toLowerCase() === r.name.toLowerCase() || r.name.toLowerCase().includes(t.name.toLowerCase()));
            const prayerNook = tierMeta ? tierMeta.nearbyPrayerNook : null;

            const companion = getActiveResortId() === 'dlr'
              ? (getDisneylandCompanionForRide(r.name) || getCompanionForRide(r.name))
              : (getCompanionForRide(r.name) || getDisneylandCompanionForRide(r.name));

            const existingAlert = (activeAlerts || []).find(a => String(a.ride_id) === String(r.id) || Number(a.ride_id) === Number(r.id));
            const rideJsonSafe = encodeURIComponent(JSON.stringify({
              id: r.id,
              name: r.name,
              wait_time: r.wait_time,
              is_open: r.is_open,
              landName: r.landName || currentPark.name
            }));

            return `
              <div style="background: #ffffff; border: 1.5px solid ${existingAlert ? '#86efac' : (!r.is_open ? '#f1f5f9' : (isLongWait ? '#fde68a' : '#e2e8f0'))}; border-radius: 16px; padding: 16px 18px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03); opacity: ${r.is_open ? '1' : '0.65'};">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; margin-bottom: 8px;">
                  <div style="flex: 1;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                      <span style="font-size: 0.75rem; color: #64748b; font-weight: 700; text-transform: uppercase;">
                        ${r.landName || currentPark.name}
                      </span>
                      ${existingAlert ? `<span style="font-size: 0.7rem; font-weight: 800; background: #dcfce7; color: #166534; padding: 1px 6px; border-radius: 999px;">🔔 Alert &le;${existingAlert.threshold}m</span>` : ''}
                    </div>
                    <h4 style="font-size: 1.05rem; color: #0f172a; margin: 2px 0 0; font-weight: 800; line-height: 1.3;">
                      ${r.name}
                    </h4>
                  </div>

                  <!-- Wait Time Badge -->
                  <div>
                    ${!r.is_open ? `
                      <span style="background: #f1f5f9; color: #64748b; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 999px; white-space: nowrap;">
                        Closed
                      </span>
                    ` : (r.wait_time === 0 ? `
                      <span style="background: #dcfce7; color: #166534; font-size: 0.78rem; font-weight: 800; padding: 4px 10px; border-radius: 999px; white-space: nowrap;">
                        Walk-On ⚡
                      </span>
                    ` : `
                      <div style="text-align: right;">
                        <span style="font-size: 1.3rem; font-weight: 800; color: ${isLongWait ? '#b45309' : '#1a73e8'};">
                          ${r.wait_time}m
                        </span>
                        <div style="font-size: 0.72rem; color: #166534; font-weight: 700;" title="Estimated real in-park wait via 0.72 deflation factor">
                          Real: ~${deflatedWait}m
                        </div>
                      </div>
                    `)}
                  </div>
                </div>

                <!-- Action Toolbar: Set Alert & Read Companion -->
                <div style="display: flex; gap: 6px; margin-top: 10px; flex-wrap: wrap;">
                  <button class="btn-alert-bell ${existingAlert ? 'active' : ''}" onclick="window.openSetAlertModal('${rideJsonSafe}', '${currentPark.name}')" title="Set wait time drop alert for ${escapeHtml(r.name)}">
                    ${existingAlert ? '🔔 Alert Set' : '🔔 Set Drop Alert'}
                  </button>

                  ${companion ? `
                    <button class="btn btn-sm btn-outline" onclick="window.openCompanionModal('${companion.id}')" style="font-size: 0.75rem; padding: 4px 10px; border-radius: 8px; background: #f0fdf4; border-color: #bbf7d0; color: #166534; font-weight: 700;">
                      📖 ${companion.saint.split(' (')[0]}
                    </button>
                  ` : ''}
                </div>

                <!-- Catholic Queue Rosary Opportunity & Nearby Nook -->
                ${r.is_open && isLongWait ? `
                  <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 6px 10px; margin-top: 10px; font-size: 0.78rem; color: #92400e; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                    <span>
                      📿 <strong>${r.wait_time >= 50 ? 'Full Rosary Line' : '1-2 Decades Window'}</strong> (${deflatedWait}m actual)
                    </span>
                    <button class="btn btn-sm btn-sun" onclick="window.navigateToTab('rosary-tab')" style="font-size: 0.72rem; padding: 2px 8px; border-radius: 6px; white-space: nowrap;">
                      Pray 📿
                    </button>
                  </div>
                ` : ''}

                ${prayerNook ? `
                  <div style="margin-top: 8px; font-size: 0.74rem; color: #475569;">
                    📍 <strong>Nearby Sanctuary:</strong> ${prayerNook}
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      ` : ''}

      ${!isLoading && filteredRides.length === 0 && cached && cached.data ? `
        <div style="text-align: center; padding: 40px 20px; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; color: #64748b;">
          No attractions found matching "${searchQuery}".
        </div>
      ` : ''}
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

// Window Event Handlers for interactive live board
window.switchLivePark = (parkId) => {
  activeLiveParkId = parkId;
  searchQuery = "";
  if (!liveDataCache[parkId]) {
    loadParkWaitTimes(parkId);
  } else {
    renderLiveWaitTimes();
  }
};

window.refreshLivePark = (parkId) => {
  loadParkWaitTimes(parkId);
};

window.handleLiveSearch = (query) => {
  searchQuery = query;
  renderLiveWaitTimes();
};

window.handleStatusFilter = (filter) => {
  statusFilter = filter;
  renderLiveWaitTimes();
};
