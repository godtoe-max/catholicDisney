// Catholic Disney: Liturgical Living, Holy Days of Obligation & Abstinence Tracker
// Supports 4 Liturgical Traditions: Roman (USCCB), TLM (1962), Byzantine, and Anglican Ordinariate

import { liturgicalPairingsData } from '../data/liturgical-pairings.js?v=20260902_v2';
import { TRADITIONS_LITURGICAL, DISNEY_ABSTINENCE_DINING, DISNEYLAND_ABSTINENCE_DINING } from '../data/holy-days-data.js?v=20260902_v2';
import { DISNEYLAND_TRADITIONS_LITURGICAL, DISNEYLAND_MISSION_EXCURSION } from '../data/disneyland-churches-data.js?v=20260902_v2';
import { getActiveResortId, getActiveResort } from './resort-switcher.js?v=20260902_v2';

let activeTraditionId = "roman";
let activeViewTab = "holydays"; // 'holydays', 'abstinence', 'dining', 'movies'
let activeDiningPark = "all";

export function initLiturgicalHub() {
  renderLiturgicalHub();
  window.addEventListener('catholic-resort-changed', () => {
    renderLiturgicalHub();
  });
}

export function renderLiturgicalHub() {
  const container = document.getElementById('liturgical-hub-container');
  if (!container) return;

  const isDlr = getActiveResortId() === 'dlr';
  const activeTraditions = isDlr ? DISNEYLAND_TRADITIONS_LITURGICAL : TRADITIONS_LITURGICAL;
  const tradition = activeTraditions[activeTraditionId] || activeTraditions.roman;
  const church = tradition.churchInfo || (isDlr ? DISNEYLAND_TRADITIONS_LITURGICAL.roman.churchInfo : TRADITIONS_LITURGICAL.roman.churchInfo);

  // Filter dining items
  const diningDataset = isDlr ? DISNEYLAND_ABSTINENCE_DINING : DISNEY_ABSTINENCE_DINING;
  const filteredDining = activeDiningPark === 'all'
    ? diningDataset
    : diningDataset.filter(d => String(d.parkId) === String(activeDiningPark));

  container.innerHTML = `
    <!-- Tradition Selector Navigation -->
    <div class="liturgical-control-bar" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 20px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05); margin-bottom: 24px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
        <div>
          <span class="section-tag" style="background: #fef3c7; color: #92400e; margin-bottom: 4px;">
            ${isDlr ? '🌴 Southern California Parishes & Traditions' : '🏰 Central Florida Parishes & Traditions'}
          </span>
          <h3 style="font-size: 1.45rem; color: #0f172a; margin: 0; font-weight: 800;">
            Select Your Liturgical Tradition
          </h3>
        </div>
        <span style="font-size: 0.85rem; color: #64748b;">
          ${isDlr ? 'Mass obligations & churches in Anaheim / Orange County' : 'Mass obligation & fasting rules tailored to your family'}
        </span>
      </div>

      <!-- Tradition Selector Pills -->
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        ${Object.keys(activeTraditions).map(k => {
          const t = activeTraditions[k];
          return `
            <button class="filter-chip ${activeTraditionId === k ? 'active' : ''}" 
                    onclick="window.switchLiturgicalTradition('${k}')"
                    style="font-size: 0.9rem; padding: 8px 16px;">
              ${t.icon} ${t.name}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Current Tradition & Designated Local Church Banner -->
      <div style="background: #f8fafc; border-left: 4px solid #1a73e8; border-radius: 8px; padding: 14px 16px; margin-top: 16px;">
        <div style="font-weight: 800; color: #0f172a; font-size: 1rem; margin-bottom: 4px;">
          ${tradition.name}
        </div>
        <div style="color: #475569; font-size: 0.88rem; line-height: 1.45; margin-bottom: 8px;">
          ${tradition.summary || tradition.description}
        </div>
        <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 8px 12px; font-size: 0.84rem; color: #1e40af;">
          <strong>📍 Designated ${isDlr ? 'Orange County' : 'Orlando'} Parish:</strong> <span style="font-weight: 700;">${church.parishName}</span> (${church.address})<br>
          ⏰ <strong>Sunday Times:</strong> ${church.sundayTimes} • <em>${church.distanceFromPark}</em>
        </div>
      </div>

      ${isDlr ? `
        <!-- Historic Mission Excursion Callout (California Exclusive) -->
        <div style="background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%); border: 1.5px solid #fde68a; border-radius: 12px; padding: 14px 16px; margin-top: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          <div style="flex: 1; min-width: 260px;">
            <div style="font-weight: 800; color: #92400e; font-size: 0.95rem; display: flex; align-items: center; gap: 6px;">
              <span>🔔</span> Historic California Pilgrimage: ${DISNEYLAND_MISSION_EXCURSION.name}
            </div>
            <p style="font-size: 0.85rem; color: #78350f; margin: 4px 0 0; line-height: 1.4;">
              ${DISNEYLAND_MISSION_EXCURSION.transitDescription}
            </p>
          </div>
          <span style="background: #ffffff; color: #b45309; font-weight: 800; font-size: 0.78rem; padding: 4px 10px; border-radius: 999px; border: 1px solid #fcd34d;">
            Serra Chapel (1782)
          </span>
        </div>
      ` : ''}

      <!-- Feature View Navigation Tabs -->
      <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px; border-top: 1px dashed #e2e8f0; padding-top: 16px;">
        <button class="btn ${activeViewTab === 'holydays' ? 'btn-sun' : 'btn-outline'}" 
                onclick="window.switchLiturgicalView('holydays')" style="font-size: 0.88rem; padding: 8px 16px;">
          ⛪ Holy Days of Obligation (${tradition.holyDays.length})
        </button>
        <button class="btn ${activeViewTab === 'abstinence' ? 'btn-sun' : 'btn-outline'}" 
                onclick="window.switchLiturgicalView('abstinence')" style="font-size: 0.88rem; padding: 8px 16px;">
          🐟 Fasting &amp; Abstinence Rules
        </button>
        <button class="btn ${activeViewTab === 'dining' ? 'btn-sun' : 'btn-outline'}" 
                onclick="window.switchLiturgicalView('dining')" style="font-size: 0.88rem; padding: 8px 16px;">
          🍽️ Disney Meatless Dining Guide (${DISNEY_ABSTINENCE_DINING.length})
        </button>
        <button class="btn ${activeViewTab === 'movies' ? 'btn-sun' : 'btn-outline'}" 
                onclick="window.switchLiturgicalView('movies')" style="font-size: 0.88rem; padding: 8px 16px;">
          🎬 Feast Days &amp; Disney Movie Pairings (${liturgicalPairingsData.length})
        </button>
      </div>
    </div>

    <!-- VIEW 1: HOLY DAYS OF OBLIGATION -->
    ${activeViewTab === 'holydays' ? `
      <div class="holydays-view-container animate-fade-in">
        <div style="margin-bottom: 18px;">
          <h4 style="font-size: 1.35rem; color: #0f172a; margin-bottom: 4px; font-weight: 800;">
            ⛪ Holy Days of Obligation (${tradition.name})
          </h4>
          <p style="font-size: 0.92rem; color: #475569; margin-bottom: 0;">
            Never miss a Mass on vacation. Here are the feasts of precept, canonical relaxation rules, and local Orlando Mass locations.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 18px;">
          ${tradition.holyDays.map(hd => `
            <div class="parish-card" style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 18px; padding: 22px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 10px;">
                  <span class="park-pill" style="background: #fee2e2; color: #b91c1c; font-weight: 800; font-size: 0.78rem;">
                    🔴 Holy Day of Precept
                  </span>
                  <span style="font-size: 0.85rem; font-weight: 800; color: #1a73e8; background: #eff6ff; padding: 3px 10px; border-radius: 999px;">
                    📅 ${hd.date}
                  </span>
                </div>

                <h4 style="font-size: 1.22rem; color: #0f172a; margin: 0 0 6px; font-weight: 800;">
                  ${hd.feast}
                </h4>
                <p style="font-size: 0.88rem; color: #475569; line-height: 1.45; margin-bottom: 12px;">
                  ${hd.notes}
                </p>

                <!-- Canonical Abrogation / Transfer Rule -->
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px 12px; margin-bottom: 12px; font-size: 0.82rem;">
                  <strong style="color: #92400e;">⚖️ Canonical Rule:</strong> ${hd.abrogationRule}
                </div>
              </div>

              <!-- Mass at Disney Tip -->
              <div style="border-top: 1px dashed #e2e8f0; padding-top: 12px; margin-top: 10px; font-size: 0.84rem; color: #1e40af;">
                <strong>⛪ Where to Fulfill Near Disney:</strong><br>
                ${hd.massAtDisney}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- VIEW 2: FASTING & ABSTINENCE RULES -->
    ${activeViewTab === 'abstinence' ? `
      <div class="abstinence-view-container animate-fade-in">
        <div style="margin-bottom: 18px;">
          <h4 style="font-size: 1.35rem; color: #0f172a; margin-bottom: 4px; font-weight: 800;">
            🐟 Fasting &amp; Abstinence Rules (${tradition.name})
          </h4>
          <p style="font-size: 0.92rem; color: #475569; margin-bottom: 0;">
            ${tradition.abstinenceRules.summary}
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px; margin-bottom: 24px;">
          ${tradition.abstinenceRules.details.map(rule => `
            <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 18px; padding: 22px; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);">
              <span class="park-pill" style="background: #dbeafe; color: #1e40af; font-weight: 800; font-size: 0.78rem; margin-bottom: 8px; display: inline-block;">
                ${rule.rule}
              </span>
              <h5 style="font-size: 1.15rem; color: #0f172a; margin: 0 0 4px; font-weight: 800;">
                ${rule.title}
              </h5>
              <div style="font-size: 0.8rem; font-weight: 700; color: #64748b; margin-bottom: 10px;">
                👥 Obligation Ages: ${rule.ages}
              </div>
              <p style="font-size: 0.9rem; color: #475569; line-height: 1.5; margin-bottom: 0;">
                ${rule.guidance}
              </p>
            </div>
          `).join('')}
        </div>

        <!-- Quick Jump to Dining Guide Callout -->
        <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 16px; padding: 18px 22px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
          <div>
            <strong style="color: #1e40af; font-size: 1.05rem;">Visiting the parks on Friday or during Lent?</strong>
            <p style="font-size: 0.88rem; color: #3b82f6; margin: 4px 0 0;">
              Check our Disney Park Fish &amp; Meatless Dining Guide for the best salmon, lobster rolls, and veggie platters!
            </p>
          </div>
          <button class="btn btn-primary" onclick="window.switchLiturgicalView('dining')" style="font-size: 0.88rem; padding: 8px 16px;">
            View Meatless Dining Guide 🍽️
          </button>
        </div>
      </div>
    ` : ''}

    <!-- VIEW 3: DISNEY MEATLESS DINING GUIDE -->
    ${activeViewTab === 'dining' ? `
      <div class="dining-view-container animate-fade-in">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
          <div>
            <h4 style="font-size: 1.35rem; color: #0f172a; margin-bottom: 4px; font-weight: 800;">
              🍽️ Catholic Family Meatless Dining Guide at ${isDlr ? 'Disneyland Resort' : 'Disney World'}
            </h4>
            <p style="font-size: 0.92rem; color: #475569; margin-bottom: 0;">
              Where to enjoy delicious fish, seafood, and hearty meatless meals on Friday abstinence days without sacrificing quality or family fun.
            </p>
          </div>

          <!-- Park Filters -->
          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            <button class="filter-chip ${activeDiningPark === 'all' ? 'active' : ''}" onclick="window.filterDiningByPark('all')">All Locations</button>
            ${isDlr ? `
              <button class="filter-chip ${activeDiningPark === '16' ? 'active' : ''}" onclick="window.filterDiningByPark('16')">🏰 Disneyland Park</button>
              <button class="filter-chip ${activeDiningPark === '17' ? 'active' : ''}" onclick="window.filterDiningByPark('17')">🎡 Disney California Adv.</button>
              <button class="filter-chip ${activeDiningPark === '0' ? 'active' : ''}" onclick="window.filterDiningByPark('0')">⛪ Downtown Disney</button>
            ` : `
              <button class="filter-chip ${activeDiningPark === '6' ? 'active' : ''}" onclick="window.filterDiningByPark('6')">🏰 Magic Kingdom</button>
              <button class="filter-chip ${activeDiningPark === '5' ? 'active' : ''}" onclick="window.filterDiningByPark('5')">🌐 EPCOT</button>
              <button class="filter-chip ${activeDiningPark === '7' ? 'active' : ''}" onclick="window.filterDiningByPark('7')">🎬 Studios</button>
              <button class="filter-chip ${activeDiningPark === '8' ? 'active' : ''}" onclick="window.filterDiningByPark('8')">🌳 Animal Kingdom</button>
            `}
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 18px;">
          ${filteredDining.map(item => `
            <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 18px; padding: 20px; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 8px;">
                  <span class="park-pill" style="font-size: 0.75rem; padding: 2px 8px;">
                    ${item.icon} ${item.park} • ${item.land}
                  </span>
                  <span style="font-size: 0.75rem; font-weight: 700; color: #475569; background: #f1f5f9; padding: 2px 8px; border-radius: 6px;">
                    ${item.type}
                  </span>
                </div>

                <h5 style="font-size: 1.15rem; color: #0f172a; margin: 0 0 6px; font-weight: 800;">
                  ${item.restaurant}
                </h5>

                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 10px 12px; margin-bottom: 12px;">
                  <div style="font-size: 0.78rem; font-weight: 800; color: #15803d; text-transform: uppercase;">🐟 Meatless &amp; Seafood Highlights</div>
                  <div style="font-size: 0.88rem; color: #166534; margin-top: 2px; line-height: 1.35;">${item.seafoodHighlights}</div>
                </div>
              </div>

              <div style="border-top: 1px dashed #e2e8f0; padding-top: 10px; margin-top: 6px; font-size: 0.82rem; color: #64748b;">
                <strong>💡 Catholic Family Tip:</strong> ${item.catholicTip}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- VIEW 4: FEAST DAYS & DISNEY MOVIE PAIRINGS -->
    ${activeViewTab === 'movies' ? `
      <div class="movies-view-container animate-fade-in">
        <div style="margin-bottom: 18px;">
          <h4 style="font-size: 1.35rem; color: #0f172a; margin-bottom: 4px; font-weight: 800;">
            🎬 Feast Day Celebrations &amp; Disney Movie Pairings
          </h4>
          <p style="font-size: 0.92rem; color: #475569; margin-bottom: 0;">
            Connect Catholic saints, liturgical seasons, and virtue-filled movie nights for your family.
          </p>
        </div>

        <div class="cards-grid-2">
          ${liturgicalPairingsData.map(item => `
            <div class="parish-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 22px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                <span class="park-pill" style="background: #fef3c7; color: #92400e; font-weight: 700;">
                  📅 ${item.feastDate} • ${item.season}
                </span>
              </div>

              <h4 style="font-size: 1.3rem; color: #0f172a; margin-bottom: 4px; font-weight: 800;">${item.saint}</h4>
              <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 12px;"><strong>Patronage:</strong> ${item.patronOf}</div>

              <div style="background: #f8fafc; padding: 12px 16px; border-radius: 10px; border-left: 3px solid #1a73e8; margin-bottom: 12px;">
                <div style="font-size: 0.78rem; color: #1a73e8; font-weight: 800; text-transform: uppercase;">🎬 Disney Pairing</div>
                <div style="font-size: 1.05rem; color: #0f172a; font-weight: 700; margin-top: 2px;">${item.moviePairing}</div>
              </div>

              <p style="font-size: 0.9rem; color: #475569; margin-bottom: 12px; line-height: 1.45;">${item.theologicalConnection}</p>

              <div style="border-top: 1px solid #f1f5f9; padding-top: 12px; margin-top: auto; display: grid; gap: 8px; font-size: 0.86rem;">
                <div><strong style="color: #1a73e8;">👨‍👩‍👧‍👦 Family Activity:</strong> ${item.familyActivity}</div>
                <div><strong style="color: #d97706;">🍪 Feast Day Treat:</strong> ${item.feastTreatRecipe}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
  `;
}

// Global Handlers
window.switchLiturgicalTradition = (traditionId) => {
  activeTraditionId = traditionId;
  renderLiturgicalHub();
};

window.switchLiturgicalView = (viewTab) => {
  activeViewTab = viewTab;
  renderLiturgicalHub();
};

window.filterDiningByPark = (parkId) => {
  activeDiningPark = parkId;
  renderLiturgicalHub();
};
