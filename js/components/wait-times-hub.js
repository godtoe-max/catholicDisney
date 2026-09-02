// Catholic Disney: Wait Time Analytics & Itinerary Integration Hub
// Implements CATHOLIC_DISNEY_WAIT_TIMES_SPEC.md

import { RIDE_TIERS, SUNDAY_MASS_PRESETS, CROWD_MULTIPLIERS } from '../data/ride-tiers.js';
import { PARKS_METADATA, HOURLY_CROWD_CURVES } from '../data/wait-times-data.js';
import { calculateItineraryProjections } from './wait-time-insights.js';

let selectedMassId = "mary-queen-730";
let selectedParkId = 6; // Magic Kingdom default
let selectedCrowdKey = "moderate";
let selectedRideIds = [129, 136, 140, 131]; // Default Magic Kingdom classics: Seven Dwarfs, Peter Pan, Haunted Mansion, Buzz Lightyear

export function initWaitTimesHub() {
  const container = document.getElementById('wait-times-container');
  if (!container) return;

  renderWaitTimesHub();
}

function renderWaitTimesHub() {
  const container = document.getElementById('wait-times-container');
  if (!container) return;

  // Filter available rides for selected park
  const parkRides = Object.values(RIDE_TIERS).filter(r => r.parkId === selectedParkId);

  // Validate selected ride IDs belong to current park
  const validSelectedRides = selectedRideIds.filter(id => RIDE_TIERS[id] && RIDE_TIERS[id].parkId === selectedParkId);
  if (validSelectedRides.length === 0 && parkRides.length > 0) {
    // Pick top 4 default rides for this park
    selectedRideIds = parkRides.slice(0, 4).map(r => r.id);
  }

  // Calculate mathematical projections
  const projections = calculateItineraryProjections({
    massPresetId: selectedMassId,
    parkId: selectedParkId,
    rideIds: selectedRideIds,
    crowdLevelKey: selectedCrowdKey
  });

  const currentPark = PARKS_METADATA[selectedParkId] || PARKS_METADATA[6];
  const hourlyData = HOURLY_CROWD_CURVES[selectedParkId] || HOURLY_CROWD_CURVES[6] || {};

  container.innerHTML = `
    <div class="crowd-planner-engine">
      <!-- Embedded Component Styles -->
      <style>
        .crowd-planner-engine {
          font-family: var(--font-body, 'Inter', sans-serif);
          color: #0f172a;
        }
        .planner-hero-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 10px 25px -3px rgba(15, 23, 42, 0.06);
          margin-bottom: 24px;
        }
        .config-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin: 22px 0 10px;
        }
        .config-block {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 18px 20px;
        }
        .config-label {
          font-size: 0.85rem;
          font-weight: 800;
          color: #1e40af;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .park-tab-pill {
          padding: 8px 16px;
          border-radius: 999px;
          border: 1.5px solid #cbd5e1;
          background: #ffffff;
          color: #475569;
          font-weight: 700;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .park-tab-pill.active {
          background: #1a73e8;
          border-color: #1a73e8;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(26, 115, 232, 0.25);
        }
        .rides-checkbox-container {
          max-height: 240px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-right: 6px;
        }
        .ride-checkbox-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 8px 12px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s;
        }
        .ride-checkbox-item:hover {
          border-color: #93c5fd;
          background: #f0fdf4;
        }
        .ride-checkbox-item.checked {
          background: #eff6ff;
          border-color: #3b82f6;
          color: #1e3a8a;
        }
        .results-summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin: 24px 0;
        }
        .result-metric-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
          text-align: center;
        }
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 18px;
          margin: 24px 0;
        }
        .insight-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 22px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .breakdown-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          margin-top: 14px;
        }
        .breakdown-table th {
          background: #f1f5f9;
          padding: 10px 14px;
          text-align: left;
          font-size: 0.8rem;
          color: #475569;
          font-weight: 800;
          border-bottom: 2px solid #e2e8f0;
        }
        .breakdown-table td {
          padding: 12px 14px;
          border-bottom: 1px solid #f1f5f9;
        }
        @media (max-width: 768px) {
          .planner-hero-card {
            padding: 20px 16px;
          }
          .breakdown-table th, .breakdown-table td {
            padding: 8px 10px;
          }
        }
      </style>

      <!-- Top Interactive Calculator Frame -->
      <div class="planner-hero-card">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
          <div>
            <span class="park-pill" style="background: #fef3c7; color: #92400e; font-weight: 800; font-size: 0.85rem;">
              ⛪ Sunday Mass &amp; Crowd Strategy Engine
            </span>
            <h3 style="font-size: 1.75rem; color: #0f172a; margin: 8px 0 4px; font-weight: 800;">
              The Catholic Disney Wait Times &amp; Itinerary Calculator
            </h3>
            <p style="font-size: 0.95rem; color: #475569; margin-bottom: 0;">
              Harmonize Sunday Mass obligations, real-world queue deflation (0.72 factor), and financial stewardship for your family.
            </p>
          </div>

          <button class="btn btn-sun" onclick="window.navigateToTab('rosary-tab')" style="font-size: 0.92rem; padding: 10px 18px;">
            Open Queue Rosary 📿
          </button>
        </div>

        <!-- 3-Step Config Grid -->
        <div class="config-grid">
          <!-- Step 1: Sunday Mass Picker -->
          <div class="config-block">
            <div class="config-label">
              <span>⛪ Step 1: Sunday Mass Schedule</span>
            </div>
            <select class="form-select" id="mass-schedule-select" onchange="window.handleMassChange(this.value)" style="background: #ffffff; border-radius: 10px; font-weight: 600;">
              ${SUNDAY_MASS_PRESETS.map(m => `
                <option value="${m.id}" ${m.id === selectedMassId ? 'selected' : ''}>
                  ${m.name}
                </option>
              `).join('')}
            </select>
            <div style="font-size: 0.8rem; color: #64748b; margin-top: 8px; line-height: 1.35;">
              ⏱️ <strong>Buffer:</strong> ${projections.massPreset.massDurationMin}m Mass + ${projections.massPreset.transitBufferMin}m parking/TTC/monorail ➔ <strong>Gate Arrival: ${projections.massPreset.gateArrivalFormatted}</strong>
            </div>
          </div>

          <!-- Step 2: Park & Crowd Multiplier -->
          <div class="config-block">
            <div class="config-label">
              <span>🏰 Step 2: Park &amp; Crowd Season</span>
            </div>
            <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px;">
              ${[
                { id: 6, icon: "🏰", name: "Magic Kingdom" },
                { id: 5, icon: "🌐", name: "EPCOT" },
                { id: 7, icon: "🎬", name: "Hollywood Studios" },
                { id: 8, icon: "🌳", name: "Animal Kingdom" }
              ].map(p => `
                <button class="park-tab-pill ${p.id === selectedParkId ? 'active' : ''}" onclick="window.handleParkChange(${p.id})">
                  ${p.icon} ${p.name}
                </button>
              `).join('')}
            </div>

            <select class="form-select" id="crowd-level-select" onchange="window.handleCrowdChange(this.value)" style="background: #ffffff; border-radius: 10px; font-weight: 600;">
              ${Object.values(CROWD_MULTIPLIERS).map(c => `
                <option value="${c.id}" ${c.id === selectedCrowdKey ? 'selected' : ''}>
                  ${c.label}
                </option>
              `).join('')}
            </select>
          </div>

          <!-- Step 3: Must-Do Family Wishlist -->
          <div class="config-block">
            <div class="config-label">
              <span>🎢 Step 3: Must-Do Wishlist (${selectedRideIds.length} Selected)</span>
            </div>
            <div class="rides-checkbox-container">
              ${parkRides.map(r => {
                const isChecked = selectedRideIds.includes(r.id);
                return `
                  <label class="ride-checkbox-item ${isChecked ? 'checked' : ''}">
                    <input type="checkbox" value="${r.id}" ${isChecked ? 'checked' : ''} onchange="window.handleRideToggle(${r.id})" style="accent-color: #1a73e8;">
                    <span style="flex: 1;">${r.name}</span>
                    <span style="font-size: 0.72rem; background: #e2e8f0; padding: 2px 6px; border-radius: 4px; color: #475569;">
                      Tier ${r.tier}
                    </span>
                  </label>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- Metric Cards -->
        <div class="results-summary-grid">
          <div class="result-metric-card">
            <span style="font-size: 0.8rem; font-weight: 700; color: #64748b; text-transform: uppercase;">Post-Mass Gate Arrival</span>
            <div style="font-size: 1.8rem; font-weight: 900; color: #0284c7; margin: 4px 0;">
              ${projections.gateArrivalFormatted}
            </div>
            <span style="font-size: 0.78rem; color: #64748b;">Includes 45m TTC Transit Buffer</span>
          </div>

          <div class="result-metric-card">
            <span style="font-size: 0.8rem; font-weight: 700; color: #64748b; text-transform: uppercase;">Disney Posted Wait Sum</span>
            <div style="font-size: 1.8rem; font-weight: 900; color: #dc2626; margin: 4px 0;">
              ${projections.totalPostedWaitMin}m
            </div>
            <span style="font-size: 0.78rem; color: #64748b;">${projections.totalPostedHours} hrs on Disney App Boards</span>
          </div>

          <div class="result-metric-card" style="border: 2px solid #10b981; background: #f0fdf4;">
            <span style="font-size: 0.8rem; font-weight: 800; color: #15803d; text-transform: uppercase;">Real Actual Standby Time</span>
            <div style="font-size: 1.8rem; font-weight: 900; color: #16a34a; margin: 4px 0;">
              ~${projections.totalActualWaitMin}m
            </div>
            <span style="font-size: 0.78rem; font-weight: 700; color: #15803d;">~${projections.totalActualHours} hrs (0.72 Deflation Reality)</span>
          </div>

          <div class="result-metric-card" style="border: 2px solid #f59e0b; background: #fffbeb;">
            <span style="font-size: 0.8rem; font-weight: 800; color: #b45309; text-transform: uppercase;">Time Saved via Reality</span>
            <div style="font-size: 1.8rem; font-weight: 900; color: #d97706; margin: 4px 0;">
              -${projections.totalPostedWaitMin - projections.totalActualWaitMin}m
            </div>
            <span style="font-size: 0.78rem; font-weight: 700; color: #b45309;">Over 1 Hour Less Than Posted!</span>
          </div>
        </div>

        <!-- Natural Language Rule-Based Coaching Cards -->
        <h4 style="font-size: 1.3rem; color: #0f172a; margin: 28px 0 14px; font-weight: 800;">
          💡 Strategic Catholic Family Coaching Insights
        </h4>

        <div class="insights-grid">
          ${projections.insights.map(ins => `
            <div class="insight-card">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                  <span style="font-size: 1.5rem;">${ins.icon}</span>
                  <span style="font-size: 0.78rem; font-weight: 800; background: ${ins.badgeBg}; color: ${ins.badgeColor}; padding: 4px 10px; border-radius: 999px;">
                    ${ins.badge}
                  </span>
                </div>
                <strong style="font-size: 1.1rem; color: #0f172a; display: block; margin-bottom: 8px;">
                  ${ins.title}
                </strong>
                <p style="font-size: 0.92rem; color: #475569; line-height: 1.5; margin-bottom: 0;">
                  ${ins.text}
                </p>
              </div>

              ${ins.type === 'spiritual' ? `
                <div style="margin-top: 14px; padding-top: 12px; border-top: 1px dashed #e2e8f0;">
                  <button class="btn btn-sun" onclick="window.navigateToTab('rosary-tab')" style="width: 100%; font-size: 0.88rem;">
                    Launch Queue Rosary in Line 📿
                  </button>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>

        <!-- Wishlist Attraction Breakdown Table -->
        <h4 style="font-size: 1.25rem; color: #0f172a; margin: 30px 0 12px; font-weight: 800;">
          📋 Wishlist Time Breakdown &amp; Queue Rosary Pairing
        </h4>

        <div style="overflow-x: auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px;">
          <table class="breakdown-table">
            <thead>
              <tr>
                <th>Attraction</th>
                <th>Tier / Ratio</th>
                <th>Disney Posted</th>
                <th>Real Actual Wait</th>
                <th>Queue Rosary Devotion</th>
                <th>Nearby Sanctuary</th>
              </tr>
            </thead>
            <tbody>
              ${projections.rides.map(r => `
                <tr>
                  <td>
                    <strong>${r.name}</strong>
                    <div style="font-size: 0.75rem; color: #64748b;">${r.land}</div>
                  </td>
                  <td>
                    <span style="font-weight: 700; color: #1e40af;">Tier ${r.tier}</span>
                    <div style="font-size: 0.72rem; color: #64748b;">${r.ratio}x anchor</div>
                  </td>
                  <td>
                    <span style="color: #dc2626; font-weight: 800;">${r.postedWait} min</span>
                  </td>
                  <td>
                    <span style="color: #16a34a; font-weight: 800; background: #f0fdf4; padding: 2px 8px; border-radius: 6px;">
                      ~${r.actualWait} min
                    </span>
                  </td>
                  <td>
                    <span style="color: #6d28d9; font-weight: 700; font-size: 0.85rem;">
                      📿 ${r.rosaryText}
                    </span>
                  </td>
                  <td>
                    <span style="font-size: 0.82rem; color: #475569;">
                      🕊️ ${r.nearbyNook}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Hourly Curve Visualizer -->
        <div style="margin-top: 36px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
            <h4 style="font-size: 1.15rem; color: #0f172a; margin-bottom: 0;">
              📈 Full Hourly Baseline Curve: <span style="color: #1a73e8;">${currentPark.name}</span>
            </h4>
            <span style="font-size: 0.82rem; color: #64748b;">
              891,000+ Historical TouringPlans Observations
            </span>
          </div>

          <div style="width: 100%; overflow-x: auto;">
            <svg viewBox="0 0 900 180" style="width: 100%; height: auto; min-width: 600px; display: block;">
              <defs>
                <linearGradient id="barGradGreen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#34d399" />
                  <stop offset="100%" stop-color="#059669" />
                </linearGradient>
                <linearGradient id="barGradAmber" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#fbbf24" />
                  <stop offset="100%" stop-color="#d97706" />
                </linearGradient>
                <linearGradient id="barGradRed" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#f87171" />
                  <stop offset="100%" stop-color="#dc2626" />
                </linearGradient>
                <linearGradient id="barGradBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#60a5fa" />
                  <stop offset="100%" stop-color="#2563eb" />
                </linearGradient>
              </defs>

              <line x1="30" y1="150" x2="880" y2="150" stroke="#cbd5e1" stroke-width="1.5" />

              ${[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map((hour, idx) => {
                const wait = hourlyData[hour] || 25;
                const xPos = 50 + idx * 56;
                const barHeight = Math.min(125, Math.max(16, Math.round((wait / 85) * 125)));
                const yPos = 150 - barHeight;

                let grad = "url(#barGradGreen)";
                if (wait >= 50) grad = "url(#barGradRed)";
                else if (wait >= 35) grad = "url(#barGradAmber)";
                else if (hour >= 20) grad = "url(#barGradBlue)";

                const isArrivalHour = Math.floor(projections.arrivalHour) === hour;
                const labelHour = hour > 12 ? `${hour - 12} PM` : hour === 12 ? '12 PM' : `${hour} AM`;

                return `
                  <g>
                    <rect x="${xPos}" y="${yPos}" width="36" height="${barHeight}" rx="5" fill="${grad}" ${isArrivalHour ? 'stroke="#0f172a" stroke-width="2.5"' : ''} />
                    <text x="${xPos + 18}" y="${yPos - 5}" font-size="10.5" font-weight="700" fill="#334155" text-anchor="middle">
                      ${Math.round(wait)}m
                    </text>
                    <text x="${xPos + 18}" y="168" font-size="10.5" font-weight="${isArrivalHour ? '800' : '600'}" fill="${isArrivalHour ? '#0284c7' : '#64748b'}" text-anchor="middle">
                      ${labelHour}
                    </text>
                    ${isArrivalHour ? `
                      <text x="${xPos + 18}" y="${yPos - 18}" font-size="11" font-weight="800" fill="#0284c7" text-anchor="middle">
                        Gate ➔
                      </text>
                    ` : ''}
                  </g>
                `;
              }).join('')}
            </svg>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Interactive Event Handlers
window.handleMassChange = (massId) => {
  selectedMassId = massId;
  renderWaitTimesHub();
};

window.handleParkChange = (parkId) => {
  selectedParkId = parkId;
  // Pre-select top 4 rides for the new park
  const parkRides = Object.values(RIDE_TIERS).filter(r => r.parkId === parkId);
  selectedRideIds = parkRides.slice(0, 4).map(r => r.id);
  renderWaitTimesHub();
};

window.handleCrowdChange = (crowdKey) => {
  selectedCrowdKey = crowdKey;
  renderWaitTimesHub();
};

window.handleRideToggle = (rideId) => {
  const numId = parseInt(rideId, 10);
  if (selectedRideIds.includes(numId)) {
    // Keep at least 1 ride selected
    if (selectedRideIds.length > 1) {
      selectedRideIds = selectedRideIds.filter(id => id !== numId);
    }
  } else {
    selectedRideIds.push(numId);
  }
  renderWaitTimesHub();
};
