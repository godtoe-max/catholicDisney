// Disney World Wait Times & Crowd Intelligence Hub - Premium Catholic Disney Edition
import { PARKS_METADATA, HOURLY_CROWD_CURVES, ALL_ATTRACTIONS } from '../data/wait-times-data.js';

let activeParkId = 'all'; // 'all', '6', '5', '7', '8'
let activeTier = 'all'; // 'all', 'headliner', 'popular', 'walkon'
let searchQuery = '';

export function initWaitTimesHub() {
  const container = document.getElementById('wait-times-container');
  if (!container) return;

  renderWaitTimesHub();
}

function renderWaitTimesHub() {
  const container = document.getElementById('wait-times-container');
  if (!container) return;

  // Filter rides
  const filteredRides = ALL_ATTRACTIONS.filter(ride => {
    if (activeParkId !== 'all' && String(ride.parkId) !== String(activeParkId)) return false;
    if (activeTier === 'headliner' && ride.avgWait < 50) return false;
    if (activeTier === 'popular' && (ride.avgWait < 25 || ride.avgWait >= 50)) return false;
    if (activeTier === 'walkon' && ride.avgWait >= 25) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = ride.name.toLowerCase().includes(q);
      const matchLand = ride.land.toLowerCase().includes(q);
      const matchPark = ride.parkName.toLowerCase().includes(q);
      if (!matchName && !matchLand && !matchPark) return false;
    }
    return true;
  });

  // Calculate stats
  const totalRides = filteredRides.length;
  const avgWait = totalRides > 0 
    ? Math.round(filteredRides.reduce((acc, r) => acc + r.avgWait, 0) / totalRides) 
    : 0;

  // Hourly curve data
  const selectedParkKey = activeParkId !== 'all' ? parseInt(activeParkId) : 6;
  const currentPark = PARKS_METADATA[selectedParkKey] || PARKS_METADATA[6];
  const hourlyData = HOURLY_CROWD_CURVES[selectedParkKey] || HOURLY_CROWD_CURVES[6] || {};

  container.innerHTML = `
    <!-- Embedded Self-Contained Styles (Guaranteed to apply regardless of CDN/browser caching) -->
    <style>
      .crowd-hub-wrapper {
        font-family: var(--font-body, 'Inter', sans-serif);
        color: var(--text-primary, #0f172a);
      }
      .parks-hero-banner {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 24px;
        padding: 28px;
        box-shadow: 0 10px 25px -3px rgba(15, 23, 42, 0.06);
        margin-bottom: 28px;
      }
      .park-cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 16px;
        margin: 20px 0;
      }
      .park-summary-card {
        background: #f8fafc;
        border: 2px solid #e2e8f0;
        border-radius: 16px;
        padding: 18px 20px;
        cursor: pointer;
        transition: all 0.2s ease;
        text-align: left;
      }
      .park-summary-card:hover, .park-summary-card.active {
        background: #ffffff;
        border-color: var(--blue-primary, #1a73e8);
        box-shadow: 0 8px 20px rgba(26, 115, 232, 0.15);
        transform: translateY(-2px);
      }
      .curve-chart-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 24px;
        padding: 26px 28px;
        box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
        margin-bottom: 28px;
      }
      .svg-chart-wrapper {
        width: 100%;
        overflow-x: auto;
        padding: 10px 0;
      }
      .catholic-timing-tips {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 16px;
        margin-top: 20px;
        padding-top: 18px;
        border-top: 1px dashed #e2e8f0;
      }
      .timing-tip-card {
        background: #f8fafc;
        border-radius: 12px;
        padding: 14px 16px;
        font-size: 0.9rem;
        line-height: 1.45;
      }
      .rides-table-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 24px;
        padding: 24px;
        box-shadow: 0 10px 25px -3px rgba(15, 23, 42, 0.06);
      }
      .rides-list-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 18px;
        margin-top: 20px;
      }
      .ride-tile {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        padding: 18px 20px;
        transition: all 0.2s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .ride-tile:hover {
        border-color: #93c5fd;
        box-shadow: 0 6px 18px rgba(30, 64, 175, 0.08);
        transform: translateY(-2px);
      }
      .rosary-pill-badge {
        background: #fffbeb;
        border: 1px solid #fde68a;
        color: #92400e;
        border-radius: 8px;
        padding: 8px 12px;
        font-size: 0.85rem;
        font-weight: 700;
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      @media (max-width: 768px) {
        .parks-hero-banner, .curve-chart-card, .rides-table-card {
          padding: 20px 16px;
          border-radius: 18px;
        }
        .rides-list-container {
          grid-template-columns: 1fr;
        }
      }
    </style>

    <div class="crowd-hub-wrapper">
      <!-- Top Overview Banner -->
      <div class="parks-hero-banner">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
          <div>
            <span class="park-pill" style="background: #e8f0fe; color: #1a73e8; font-weight: 800; font-size: 0.85rem;">
              📊 891,000+ Verified Observations
            </span>
            <h3 style="font-size: 1.7rem; color: #0f172a; margin: 8px 0 4px; font-weight: 800;">
              Disney World Wait Times &amp; Crowd Strategy
            </h3>
            <p style="font-size: 0.95rem; color: #475569; margin-bottom: 0;">
              Historical crowd trends from the <em>Wait Times Updater</em> paired with the <strong>Queue Rosary</strong> and <strong>Prayer Nook escapes</strong>.
            </p>
          </div>

          <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
            <button class="btn btn-sun" onclick="window.navigateToTab('rosary-tab')" style="font-size: 0.92rem; padding: 10px 18px;">
              Open Queue Rosary 📿
            </button>
            <button class="btn btn-outline" onclick="window.navigateToTab('pilgrimage-tab')" style="font-size: 0.92rem; padding: 10px 16px;">
              Quiet Sanctuaries 🕊️
            </button>
          </div>
        </div>

        <!-- 4 Park Overview Selector Cards -->
        <div class="park-cards-grid">
          ${[
            { id: 'all', icon: '🏰', name: 'All 4 Parks', wait: '38m avg', desc: '108 Attractions' },
            { id: '6', icon: '🏰', name: 'Magic Kingdom', wait: '44m avg', desc: 'Fantasyland & Tomorrowland' },
            { id: '5', icon: '🌐', name: 'EPCOT', wait: '31m avg', desc: 'World Showcase & Discovery' },
            { id: '7', icon: '🎬', name: 'Hollywood Studios', wait: '51m avg', desc: 'Galaxy\'s Edge & Toy Story' },
            { id: '8', icon: '🌳', name: 'Animal Kingdom', wait: '42m avg', desc: 'Pandora & Africa' }
          ].map(p => `
            <div class="park-summary-card ${activeParkId === p.id ? 'active' : ''}" onclick="window.filterByPark('${p.id}')">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <span style="font-size: 1.35rem;">${p.icon}</span>
                <span style="font-size: 0.85rem; font-weight: 800; color: #1a73e8; background: #e8f0fe; padding: 2px 8px; border-radius: 999px;">
                  ${p.wait}
                </span>
              </div>
              <strong style="font-size: 1.05rem; color: #0f172a; display: block;">${p.name}</strong>
              <span style="font-size: 0.82rem; color: #64748b;">${p.desc}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Hourly Wait Time Curve (Rendered as Crisp Responsive SVG) -->
      <div class="curve-chart-card">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
          <div>
            <h4 style="font-size: 1.25rem; color: #0f172a; margin-bottom: 2px;">
              📈 Hourly Wait Curve: <span style="color: #1a73e8;">${currentPark.name}</span>
            </h4>
            <span style="font-size: 0.85rem; color: #64748b;">
              Based on historical hourly averages from 8:00 AM to 10:00 PM
            </span>
          </div>
          <div style="display: flex; gap: 8px; font-size: 0.82rem; font-weight: 700;">
            <span style="color: #10b981; background: #dcfce7; padding: 4px 10px; border-radius: 999px;">🌅 Rope Drop Lull</span>
            <span style="color: #dc2626; background: #fee2e2; padding: 4px 10px; border-radius: 999px;">☀️ 1-4 PM Peak</span>
            <span style="color: #2563eb; background: #dbeafe; padding: 4px 10px; border-radius: 999px;">🌙 Evening Drop</span>
          </div>
        </div>

        <!-- Render Crisp Inline SVG Bar Chart -->
        <div class="svg-chart-wrapper">
          <svg viewBox="0 0 900 200" style="width: 100%; height: auto; min-width: 600px; display: block;">
            <defs>
              <linearGradient id="barGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#34d399" />
                <stop offset="100%" stop-color="#059669" />
              </linearGradient>
              <linearGradient id="barAmber" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#fbbf24" />
                <stop offset="100%" stop-color="#d97706" />
              </linearGradient>
              <linearGradient id="barRed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#f87171" />
                <stop offset="100%" stop-color="#dc2626" />
              </linearGradient>
              <linearGradient id="barBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#60a5fa" />
                <stop offset="100%" stop-color="#2563eb" />
              </linearGradient>
            </defs>

            <!-- Guide gridlines -->
            <line x1="40" y1="30" x2="880" y2="30" stroke="#f1f5f9" stroke-dasharray="4" />
            <text x="10" y="34" font-size="11" fill="#94a3b8">70m</text>

            <line x1="40" y1="80" x2="880" y2="80" stroke="#f1f5f9" stroke-dasharray="4" />
            <text x="10" y="84" font-size="11" fill="#94a3b8">50m</text>

            <line x1="40" y1="130" x2="880" y2="130" stroke="#f1f5f9" stroke-dasharray="4" />
            <text x="10" y="134" font-size="11" fill="#94a3b8">25m</text>

            <line x1="40" y1="165" x2="880" y2="165" stroke="#cbd5e1" stroke-width="1.5" />

            <!-- Hourly Bars -->
            ${[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map((hour, idx) => {
              const wait = hourlyData[hour] || 25;
              const xPos = 60 + idx * 56;
              const maxWaitScale = 85;
              const barHeight = Math.min(135, Math.max(20, Math.round((wait / maxWaitScale) * 135)));
              const yPos = 165 - barHeight;
              
              let grad = "url(#barGreen)";
              if (wait >= 50) grad = "url(#barRed)";
              else if (wait >= 35) grad = "url(#barAmber)";
              else if (hour >= 20) grad = "url(#barBlue)";

              const labelHour = hour > 12 ? `${hour - 12} PM` : hour === 12 ? '12 PM' : `${hour} AM`;

              return `
                <g>
                  <!-- Bar Rect with rounded top corners -->
                  <rect x="${xPos}" y="${yPos}" width="34" height="${barHeight}" rx="6" fill="${grad}" />
                  <!-- Wait text on top -->
                  <text x="${xPos + 17}" y="${yPos - 6}" font-size="11" font-weight="700" fill="#334155" text-anchor="middle">
                    ${Math.round(wait)}m
                  </text>
                  <!-- Hour label below -->
                  <text x="${xPos + 17}" y="184" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle">
                    ${labelHour}
                  </text>
                </g>
              `;
            }).join('')}
          </svg>
        </div>

        <!-- Catholic Strategy Guidance -->
        <div class="catholic-timing-tips">
          <div class="timing-tip-card">
            <strong style="color: #059669; font-size: 0.95rem; display: block; margin-bottom: 4px;">
              🌅 8:00 AM - 9:30 AM (Rope Drop Strategy)
            </strong>
            Lines are 40-50% shorter. Attend 7:30 AM early Sunday Mass at the <em>Basilica of Mary Queen of the Universe</em>, then head directly to your top headliner walk-on!
          </div>

          <div class="timing-tip-card">
            <strong style="color: #dc2626; font-size: 0.95rem; display: block; margin-bottom: 4px;">
              ☀️ 1:00 PM - 4:00 PM (Midday Peak &amp; Retreat)
            </strong>
            Lines hit daily maximums in the Florida heat. Escape congested midways to pray in quiet shade at a <strong>Prayer Nook</strong> (Liberty Square or Morocco Mosaic Fountain).
          </div>

          <div class="timing-tip-card">
            <strong style="color: #2563eb; font-size: 0.95rem; display: block; margin-bottom: 4px;">
              🌙 8:00 PM - 10:00 PM (Evening Lull)
            </strong>
            Wait times drop sharply during and after fireworks. Perfect time for family walk-ons with peaceful evening temperatures!
          </div>
        </div>
      </div>

      <!-- Attraction Directory & Queue Rosary Pairings -->
      <div class="rides-table-card">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; margin-bottom: 16px;">
          <div>
            <h4 style="font-size: 1.3rem; color: #0f172a; margin-bottom: 2px;">
              Attraction Wait Times &amp; Queue Rosary Matcher
            </h4>
            <span style="font-size: 0.88rem; color: #64748b;">
              Showing ${filteredRides.length} attractions (${avgWait}m average wait)
            </span>
          </div>

          <!-- Live Search Bar -->
          <div style="max-width: 320px; width: 100%;">
            <input type="text" class="form-input" placeholder="🔍 Search rides, lands, or parks..." 
                   value="${searchQuery}" oninput="window.handleRideSearch(this.value)"
                   style="border-radius: 999px; padding: 10px 18px; font-size: 0.92rem; border-color: #cbd5e1;">
          </div>
        </div>

        <!-- Filter Chips Bar -->
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px;">
          <button class="filter-chip ${activeTier === 'all' ? 'active' : ''}" onclick="window.filterByTier('all')">
            All Attractions (${ALL_ATTRACTIONS.length})
          </button>
          <button class="filter-chip ${activeTier === 'headliner' ? 'active' : ''}" onclick="window.filterByTier('headliner')" style="border-color: #fca5a5;">
            🔥 Headliners (50m+ • Full Rosary)
          </button>
          <button class="filter-chip ${activeTier === 'popular' ? 'active' : ''}" onclick="window.filterByTier('popular')" style="border-color: #fde047;">
            ⭐ Popular (25-50m • 2-3 Decades)
          </button>
          <button class="filter-chip ${activeTier === 'walkon' ? 'active' : ''}" onclick="window.filterByTier('walkon')" style="border-color: #86efac;">
            🕊️ Family Walk-Ons (&lt;25m • 1 Decade)
          </button>
        </div>

        <!-- Attraction Cards Grid -->
        <div class="rides-list-container">
          ${filteredRides.length > 0 ? filteredRides.map(ride => {
            const waitColor = ride.avgWait >= 50 ? '#dc2626' : ride.avgWait >= 30 ? '#d97706' : '#16a34a';
            const badgeBg = ride.avgWait >= 50 ? '#fee2e2' : ride.avgWait >= 30 ? '#fef3c7' : '#dcfce7';

            return `
              <div class="ride-tile">
                <div>
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 6px;">
                    <div>
                      <span class="park-pill" style="font-size: 0.72rem; padding: 2px 8px; display: inline-block; margin-bottom: 4px;">
                        ${ride.parkIcon} ${ride.parkName} • ${ride.land}
                      </span>
                      <h5 style="font-size: 1.12rem; color: #0f172a; margin: 0; line-height: 1.3; font-weight: 700;">
                        ${ride.name}
                      </h5>
                    </div>
                    <div style="text-align: right; flex-shrink: 0;">
                      <span style="background: ${badgeBg}; color: ${waitColor}; font-weight: 800; font-size: 1.05rem; padding: 4px 10px; border-radius: 8px; display: inline-block;">
                        ⏱️ ${ride.avgWait}m
                      </span>
                      <div style="font-size: 0.72rem; color: #94a3b8; margin-top: 2px;">Peak: ~${ride.maxWait}m</div>
                    </div>
                  </div>

                  <!-- Queue Rosary Pairing Badge -->
                  <div class="rosary-pill-badge">
                    <span>📿 Queue Devotion: <strong>${ride.rosaryRec}</strong></span>
                    <span style="font-size: 0.75rem; color: #78350f;">(Wait: ~${ride.avgWait}m)</span>
                  </div>

                  <!-- Strategic Guidance -->
                  <div style="font-size: 0.85rem; color: #475569; margin: 8px 0 14px; line-height: 1.4;">
                    <div style="margin-bottom: 4px;">
                      ⏰ <strong>Best Window:</strong> ${ride.bestTime}
                    </div>
                    <div>
                      🕊️ <strong>Nearby Retreat:</strong> ${ride.prayerNook}
                    </div>
                  </div>
                </div>

                <!-- Action Button -->
                <button class="btn btn-sun" onclick="window.startQueueRosaryForRide('${ride.name.replace(/'/g, "\\'")}')" 
                        style="width: 100%; font-size: 0.88rem; padding: 8px 14px; min-height: 38px;">
                  Pray in Line 📿
                </button>
              </div>
            `;
          }).join('') : `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #f8fafc; border-radius: 16px;">
              <p style="font-size: 1.05rem; color: #64748b; margin-bottom: 10px;">
                No attractions found matching "${searchQuery}".
              </p>
              <button class="btn btn-outline" onclick="window.resetRideFilters()">
                Clear Search &amp; Filters
              </button>
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}

// Global Hooks
window.filterByPark = (parkId) => {
  activeParkId = parkId;
  renderWaitTimesHub();
};

window.filterByTier = (tier) => {
  activeTier = tier;
  renderWaitTimesHub();
};

window.handleRideSearch = (query) => {
  searchQuery = query;
  renderWaitTimesHub();
};

window.resetRideFilters = () => {
  activeParkId = 'all';
  activeTier = 'all';
  searchQuery = '';
  renderWaitTimesHub();
};

window.startQueueRosaryForRide = (rideName) => {
  if (window.setIntention) {
    window.setIntention(`Patience and family peace in line for ${rideName}`);
  }
  if (window.navigateToTab) {
    window.navigateToTab('rosary-tab');
  }
};
