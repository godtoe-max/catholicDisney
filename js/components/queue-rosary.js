// Interactive Queue Rosary Component with Multi-Tradition Support (Roman, Latin TLM, Byzantine, Anglican Ordinariate)
import { ROSARY_MYSTERIES, TRADITIONS, TRADITION_PRAYERS } from '../data/rosary-mysteries.js';

let currentTraditionKey = 'roman'; // 'roman', 'latin', 'byzantine', 'anglican'
let currentMysteryKey = 'joyful'; // 'joyful', 'luminous', 'sorrowful', 'glorious', 'byzantine_rule'
let currentDecadeIndex = 0; // 0 to 4 (or 0 to 14 for Byzantine)
let currentBeadStep = 0; // 0: Our Father / Opening, 1-10: Hail Marys / Theotokos, 11: Glory Be / Doxology
let activeIntention = "Patience in lines & peaceful family joy";

export function initQueueRosary() {
  const container = document.getElementById('queue-rosary-hub');
  if (!container) return;

  renderRosary();
}

function renderRosary() {
  const container = document.getElementById('queue-rosary-hub');
  if (!container) return;

  const tradition = TRADITIONS[currentTraditionKey] || TRADITIONS.roman;
  const prayers = TRADITION_PRAYERS[currentTraditionKey] || TRADITION_PRAYERS.roman;
  const mysteryData = ROSARY_MYSTERIES[currentMysteryKey] || ROSARY_MYSTERIES.joyful;
  
  // Ensure decade index is within range
  if (currentDecadeIndex >= mysteryData.decades.length) {
    currentDecadeIndex = 0;
  }
  const decade = mysteryData.decades[currentDecadeIndex];

  // Determine current prayer step data
  let currentPrayerTitle = "";
  let currentPrayerText = "";
  let currentStepLabel = "";

  if (currentBeadStep === 0) {
    currentStepLabel = "Introduction • Lord's Prayer";
    currentPrayerTitle = prayers.ourFather.title;
    currentPrayerText = prayers.ourFather.text;
  } else if (currentBeadStep >= 1 && currentBeadStep <= 10) {
    currentStepLabel = `${prayers.hailMary.title} • ${currentBeadStep} of 10`;
    currentPrayerTitle = `${prayers.hailMary.title} (Bead #${currentBeadStep})`;
    currentPrayerText = prayers.hailMary.text;
  } else {
    currentStepLabel = "Decade Conclusion";
    currentPrayerTitle = `${prayers.gloryBe.title} & ${prayers.fatima.title}`;
    currentPrayerText = `${prayers.gloryBe.text}\n\n${prayers.fatima.text}`;
  }

  const isByzantine = currentTraditionKey === 'byzantine' || currentMysteryKey === 'byzantine_rule';

  container.innerHTML = `
    <!-- Tradition Selector Ribbon -->
    <div style="margin-bottom: 16px; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 18px 20px; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
        <span style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: var(--blue-primary); letter-spacing: 0.06em;">
          Select Catholic Tradition:
        </span>
        <span class="park-pill">${tradition.badge}</span>
      </div>

      <div class="filter-chips" style="gap: 6px; padding: 2px 0;">
        <button class="filter-chip ${currentTraditionKey === 'roman' ? 'active' : ''}" onclick="window.setRosaryTradition('roman')">
          🇻🇦 Roman (English)
        </button>
        <button class="filter-chip ${currentTraditionKey === 'latin' ? 'active' : ''}" onclick="window.setRosaryTradition('latin')">
          ☩ Traditional Latin (TLM)
        </button>
        <button class="filter-chip ${currentTraditionKey === 'byzantine' ? 'active' : ''}" onclick="window.setRosaryTradition('byzantine')">
          ☦️ Byzantine Catholic
        </button>
        <button class="filter-chip ${currentTraditionKey === 'anglican' ? 'active' : ''}" onclick="window.setRosaryTradition('anglican')">
          🇬🇧 Anglican Ordinariate
        </button>
      </div>
    </div>

    <!-- Top Mystery Selector (Free choice anytime during the day) -->
    <div class="rosary-card-header">
      <div class="mystery-day-badge">
        <span>☀️ ${mysteryData.name}</span>
        <span style="font-size: 0.82rem; opacity: 0.9;">• ${mysteryData.tagline}</span>
      </div>

      <!-- Mystery Selector Tabs -->
      <div class="filter-chips" style="justify-content: center; margin: 16px 0 12px; gap: 6px;">
        <button class="filter-chip ${currentMysteryKey === 'joyful' ? 'active' : ''}" onclick="window.selectMysterySet('joyful')">☀️ Joyful</button>
        <button class="filter-chip ${currentMysteryKey === 'luminous' ? 'active' : ''}" onclick="window.selectMysterySet('luminous')">💡 Luminous</button>
        <button class="filter-chip ${currentMysteryKey === 'sorrowful' ? 'active' : ''}" onclick="window.selectMysterySet('sorrowful')">✝️ Sorrowful</button>
        <button class="filter-chip ${currentMysteryKey === 'glorious' ? 'active' : ''}" onclick="window.selectMysterySet('glorious')">👑 Glorious</button>
        <button class="filter-chip ${currentMysteryKey === 'byzantine_rule' ? 'active' : ''}" onclick="window.selectMysterySet('byzantine_rule')">☦️ Byzantine (15 Steps)</button>
      </div>
        <button class="filter-chip ${currentMysteryKey === 'sorrowful' ? 'active' : ''}" onclick="window.selectMysterySet('sorrowful')">Sorrowful (Tue/Fri)</button>
        <button class="filter-chip ${currentMysteryKey === 'glorious' ? 'active' : ''}" onclick="window.selectMysterySet('glorious')">Glorious (Wed/Sun)</button>
        <button class="filter-chip ${currentMysteryKey === 'byzantine_rule' ? 'active' : ''}" onclick="window.selectMysterySet('byzantine_rule')">☦️ Byzantine Rule (15 Steps)</button>
      </div>

      <!-- Decade Number Selector -->
      <div class="decade-selector-bar">
        ${mysteryData.decades.map((d, idx) => `
          <button class="decade-num-btn ${currentDecadeIndex === idx ? 'active' : ''}" onclick="window.selectDecade(${idx})">
            ${isByzantine ? `Step ${d.decadeNumber}` : `Decade ${d.decadeNumber}`}
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Active Decade Meditation Card -->
    <div class="rosary-meditation-box">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; flex-wrap: wrap; gap: 6px;">
        <span class="park-pill" style="background: #fef3c7; color: #92400e;">
          ${isByzantine ? `Step ${decade.decadeNumber} of 15` : `Decade ${decade.decadeNumber} of 5`}
        </span>
        <span style="font-size: 0.85rem; font-weight: 700; color: var(--blue-primary);">Fruit: ${decade.fruit}</span>
      </div>
      <h3 style="font-size: 1.45rem; color: var(--text-primary); margin-bottom: 8px;">
        ${decade.title}
      </h3>
      <p style="font-size: 0.94rem; color: var(--text-secondary); font-style: italic; margin-bottom: 12px; border-left: 3px solid var(--sun-gold); padding-left: 12px;">
        📖 "${decade.scripture}"
      </p>
      <div style="background: var(--bg-surface-soft); padding: 12px 14px; border-radius: var(--radius-sm); font-size: 0.92rem; color: #1e293b; line-height: 1.45;">
        <strong>🏰 Queue Family Reflection:</strong> ${decade.queueReflection}
      </div>
    </div>

    <!-- Interactive Beads Chain Track -->
    <div class="rosary-bead-track-wrapper">
      <div class="rosary-track-label">
        <span>Tap any bead or tap Next Prayer:</span>
        <span style="font-weight: 800; color: var(--sun-gold);">${currentStepLabel}</span>
      </div>

      <div class="rosary-bead-chain">
        <!-- Our Father Bead -->
        <button class="rosary-bead large-bead ${currentBeadStep === 0 ? 'current' : currentBeadStep > 0 ? 'completed' : ''}" 
                onclick="window.jumpToBead(0)" aria-label="Our Father Bead">
          ✝️
        </button>

        <!-- 10 Hail Mary Beads -->
        <div class="decade-beads-group">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => `
            <button class="rosary-bead small-bead ${currentBeadStep === num ? 'current' : currentBeadStep > num ? 'completed' : ''}" 
                    onclick="window.jumpToBead(${num})" aria-label="Hail Mary Bead ${num}">
              ${num}
            </button>
          `).join('')}
        </div>

        <!-- Glory Be Bead -->
        <button class="rosary-bead large-bead ${currentBeadStep === 11 ? 'current' : ''}" 
                onclick="window.jumpToBead(11)" aria-label="Glory Be Bead">
          ✨
        </button>
      </div>
    </div>

    <!-- Active Prayer Reading Card -->
    <div class="rosary-prayer-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="section-tag" style="margin-bottom: 0;">${tradition.name}</span>
        <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">Step ${currentBeadStep + 1} of 12</span>
      </div>

      <h4 style="font-size: 1.35rem; color: var(--text-primary); margin-bottom: 12px;">
        ${currentPrayerTitle}
      </h4>

      <div class="prayer-text-display">
        ${currentPrayerText.replace(/\n\n/g, '<br><br>')}
      </div>

      <!-- Navigation & Tap Buttons -->
      <div class="rosary-action-buttons">
        <button class="btn btn-outline" onclick="window.prevRosaryStep()" ${currentBeadStep === 0 ? 'disabled' : ''} style="flex: 1;">
          ← Previous Bead
        </button>
        <button class="btn btn-sun" onclick="window.nextRosaryStep()" style="flex: 2; font-size: 1.05rem; padding: 14px 20px;">
          ${currentBeadStep === 11 ? (currentDecadeIndex < mysteryData.decades.length - 1 ? 'Next Decade ➔' : 'Complete Rosary 🎉') : 'Next Prayer Bead ➔'}
        </button>
      </div>
    </div>

    <!-- Intention & Quick Queue Prayers -->
    <div class="queue-intentions-box">
      <h4 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 10px;">
        🕊️ Today's Queue Prayer Intention:
      </h4>
      <div class="intention-chips">
        ${[
          "Patience in lines & peaceful family joy",
          "For our priests, parishes & diocese back home",
          "For kind interactions with park cast members",
          "Thanksgiving for the blessings of family vacation",
          "For traveler safety & good health"
        ].map(intent => `
          <button class="intention-chip ${activeIntention === intent ? 'active' : ''}" onclick="window.setIntention('${intent.replace(/'/g, "\\'")}')">
            ✨ ${intent}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

// Global Handlers
window.setRosaryTradition = (tradKey) => {
  currentTraditionKey = tradKey;
  if (tradKey === 'byzantine') {
    currentMysteryKey = 'byzantine_rule';
    currentDecadeIndex = 0;
  }
  triggerHaptic();
  renderRosary();
};

window.selectMysterySet = (key) => {
  currentMysteryKey = key;
  if (key === 'byzantine_rule' && currentTraditionKey !== 'byzantine') {
    currentTraditionKey = 'byzantine';
  }
  currentDecadeIndex = 0;
  currentBeadStep = 0;
  triggerHaptic();
  renderRosary();
};

window.selectDecade = (idx) => {
  currentDecadeIndex = idx;
  currentBeadStep = 0;
  triggerHaptic();
  renderRosary();
};

window.jumpToBead = (step) => {
  currentBeadStep = step;
  triggerHaptic();
  renderRosary();
};

window.nextRosaryStep = () => {
  triggerHaptic();
  const mysteryData = ROSARY_MYSTERIES[currentMysteryKey] || ROSARY_MYSTERIES.joyful;

  if (currentBeadStep < 11) {
    currentBeadStep++;
  } else {
    // Decade Completed!
    if (currentDecadeIndex < mysteryData.decades.length - 1) {
      currentDecadeIndex++;
      currentBeadStep = 0;
    } else {
      // Completed all decades
      currentDecadeIndex = 0;
      currentBeadStep = 0;
      alert("🎉 Deo Gratias! You have completed the Holy Rosary! May God and Our Lady bless your family's day at the parks!");
    }
  }
  renderRosary();
};

window.prevRosaryStep = () => {
  triggerHaptic();
  if (currentBeadStep > 0) {
    currentBeadStep--;
    renderRosary();
  }
};

window.setIntention = (intent) => {
  activeIntention = intent;
  triggerHaptic();
  renderRosary();
};

function triggerHaptic() {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    try {
      navigator.vibrate(25);
    } catch (e) {}
  }
}
