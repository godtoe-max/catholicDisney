// Catholic Disney: Live Park Wait Times Board
// Fetches real-time queue times from Queue-Times API (proxied via /api/queue-times/:park_id)
// Matches attractions with tier classifications, 0.72 deflated real waits, and Catholic prayer nooks

import { RIDE_TIERS } from '../data/ride-tiers.js';

const PARKS = [
  { id: 6, name: "Magic Kingdom", icon: "🏰" },
  { id: 5, name: "EPCOT", icon: "🌐" },
  { id: 7, name: "Hollywood Studios", icon: "🎬" },
  { id: 8, name: "Animal Kingdom", icon: "🌳" }
];

let activeLiveParkId = 6;
let liveDataCache = {};
let isLoading = false;
let searchQuery = "";
let statusFilter = "all"; // 'all', 'open', 'low'

export function initLiveWaitTimes(containerId = 'live-wait-times-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  renderLiveWaitTimes(containerId);
  loadParkWaitTimes(activeLiveParkId, containerId);
}

export async function loadParkWaitTimes(parkId, containerId = 'live-wait-times-container') {
  isLoading = true;
  activeLiveParkId = parkId;
  renderLiveWaitTimes(containerId);

  try {
    const targetUrl = `/api/queue-times/${parkId}`;
    const resp = await fetch(targetUrl);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    liveDataCache[parkId] = {
      timestamp: new Date(),
      data: data
    };
  } catch (err) {
    console.error("Failed to load live wait times:", err);
    liveDataCache[parkId] = {
      timestamp: new Date(),
      error: "Unable to retrieve live wait times from queue servers. Please try again shortly."
    };
  } finally {
    isLoading = false;
    renderLiveWaitTimes(containerId);
  }
}

export function renderLiveWaitTimes(containerId = 'live-wait-times-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const currentPark = PARKS.find(p => p.id === activeLiveParkId) || PARKS[0];
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

  container.innerHTML = `
    <div class="live-wait-times-board" style="margin-top: 10px;">
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
            <button class="btn btn-sun" onclick="window.refreshLivePark(${activeLiveParkId})" ${isLoading ? 'disabled' : ''} style="font-size: 0.88rem; padding: 8px 16px;">
              ${isLoading ? '⏳ Refreshing...' : '🔄 Refresh Live Data'}
            </button>
          </div>
        </div>

        <!-- 4 Park Switcher Pills -->
        <div style="display: flex; gap: 8px; flex-wrap: wrap; padding-bottom: 14px; border-bottom: 1px solid #f1f5f9;">
          ${PARKS.map(p => `
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
            const isWalkOn = r.is_open && r.wait_time <= 15;
            const tierMeta = Object.values(RIDE_TIERS).find(t => t.name.toLowerCase() === r.name.toLowerCase() || r.name.toLowerCase().includes(t.name.toLowerCase()));
            const prayerNook = tierMeta ? tierMeta.nearbyPrayerNook : null;

            return `
              <div style="background: #ffffff; border: 1.5px solid ${!r.is_open ? '#f1f5f9' : (isLongWait ? '#fde68a' : '#e2e8f0')}; border-radius: 16px; padding: 16px 18px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03); opacity: ${r.is_open ? '1' : '0.65'};">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; margin-bottom: 8px;">
                  <div style="flex: 1;">
                    <span style="font-size: 0.75rem; color: #64748b; font-weight: 700; text-transform: uppercase;">
                      ${r.landName || currentPark.name}
                    </span>
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
