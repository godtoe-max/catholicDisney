// Interactive Queue Rosary Component for Theme Park Waiting Lines
import { ROSARY_MYSTERIES, ROSARY_PRAYERS } from '../data/rosary-mysteries.js';

let currentMysteryKey = 'joyful';
let currentDecadeIndex = 0; // 0 to 4
let currentBeadStep = 0; // 0: Our Father, 1-10: Hail Marys, 11: Glory Be & Fatima
let activeIntention = "Patience in lines & peaceful family joy";

export function initQueueRosary() {
  const container = document.getElementById('queue-rosary-hub');
  if (!container) return;

  // Auto-detect current day of week
  const dayIndex = new Date().getDay(); // 0: Sun, 1: Mon, 2: Tue, 3: Wed, 4: Thu, 5: Fri, 6: Sat
  if (dayIndex === 1 || dayIndex === 6) currentMysteryKey = 'joyful'; // Mon, Sat
  else if (dayIndex === 4) currentMysteryKey = 'luminous'; // Thu
  else if (dayIndex === 2 || dayIndex === 5) currentMysteryKey = 'sorrowful'; // Tue, Fri
  else currentMysteryKey = 'glorious'; // Sun, Wed

  renderRosary();
}

function renderRosary() {
  const container = document.getElementById('queue-rosary-hub');
  if (!container) return;

  const mysteryData = ROSARY_MYSTERIES[currentMysteryKey];
  const decade = mysteryData.decades[currentDecadeIndex];

  // Determine current prayer step data
  let currentPrayerTitle = "";
  let currentPrayerText = "";
  let currentStepLabel = "";

  if (currentBeadStep === 0) {
    currentStepLabel = "Introduction • Lord's Prayer";
    currentPrayerTitle = "Our Father (Pater Noster)";
    currentPrayerText = ROSARY_PRAYERS.ourFather.english;
  } else if (currentBeadStep >= 1 && currentBeadStep <= 10) {
    currentStepLabel = `Hail Mary ${currentBeadStep} of 10`;
    currentPrayerTitle = `Hail Mary (Ave Maria) • Bead #${currentBeadStep}`;
    currentPrayerText = ROSARY_PRAYERS.hailMary.english;
  } else {
    currentStepLabel = "Decade Conclusion";
    currentPrayerTitle = "Glory Be & Fatima Prayer";
    currentPrayerText = `${ROSARY_PRAYERS.gloryBe.english}\n\n${ROSARY_PRAYERS.fatimaPrayer.english}`;
  }

  container.innerHTML = `
    <!-- Top Mystery Selector & Daily Guide -->
    <div class="rosary-card-header">
      <div class="mystery-day-badge">
        <span>☀️ ${mysteryData.name}</span>
        <span style="font-size: 0.8rem; opacity: 0.85;">(${mysteryData.traditionalDays.join(' & ')})</span>
      </div>

      <!-- Mystery Selector Tabs -->
      <div class="filter-chips" style="justify-content: center; margin: 16px 0 12px; gap: 6px;">
        <button class="filter-chip ${currentMysteryKey === 'joyful' ? 'active' : ''}" onclick="window.selectMysterySet('joyful')">Joyful (Mon/Sat)</button>
        <button class="filter-chip ${currentMysteryKey === 'luminous' ? 'active' : ''}" onclick="window.selectMysterySet('luminous')">Luminous (Thu)</button>
        <button class="filter-chip ${currentMysteryKey === 'sorrowful' ? 'active' : ''}" onclick="window.selectMysterySet('sorrowful')">Sorrowful (Tue/Fri)</button>
        <button class="filter-chip ${currentMysteryKey === 'glorious' ? 'active' : ''}" onclick="window.selectMysterySet('glorious')">Glorious (Wed/Sun)</button>
      </div>

      <!-- Decade Number Selector (1 to 5) -->
      <div class="decade-selector-bar">
        ${mysteryData.decades.map((d, idx) => `
          <button class="decade-num-btn ${currentDecadeIndex === idx ? 'active' : ''}" onclick="window.selectDecade(${idx})">
            Decade ${d.decadeNumber}
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Active Decade Meditation Card -->
    <div class="rosary-meditation-box">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; flex-wrap: wrap; gap: 6px;">
        <span class="park-pill" style="background: #fef3c7; color: #92400e;">Decade ${decade.decadeNumber} of 5</span>
        <span style="font-size: 0.85rem; font-weight: 700; color: var(--blue-primary);">Fruit: ${decade.fruit}</span>
      </div>
      <h3 style="font-size: 1.5rem; color: var(--text-primary); margin-bottom: 8px;">
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
        <span style="font-weight: 800; color: var(--blue-primary);">${currentStepLabel}</span>
      </div>

      <div class="rosary-bead-chain">
        <!-- Our Father Bead -->
        <button class="rosary-bead large-bead ${currentBeadStep === 0 ? 'current' : currentBeadStep > 0 ? 'completed' : ''}" 
                onclick="window.jumpToBead(0)" aria-label="Our Father Bead">
          ✝️
          <span class="bead-tooltip">Our Father</span>
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
          <span class="bead-tooltip">Glory Be</span>
        </button>
      </div>
    </div>

    <!-- Active Prayer Reading Card -->
    <div class="rosary-prayer-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="section-tag" style="margin-bottom: 0;">${currentStepLabel}</span>
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
          ${currentBeadStep === 11 ? (currentDecadeIndex < 4 ? 'Next Decade ➔' : 'Complete Rosary 🎉') : 'Next Prayer Bead ➔'}
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
window.selectMysterySet = (key) => {
  currentMysteryKey = key;
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
  if (currentBeadStep < 11) {
    currentBeadStep++;
  } else {
    // Decade Completed!
    if (currentDecadeIndex < 4) {
      currentDecadeIndex++;
      currentBeadStep = 0;
    } else {
      // Completed all 5 decades
      currentDecadeIndex = 0;
      currentBeadStep = 0;
      alert("🎉 Deo Gratias! You have completed the 5 Decades of the Holy Rosary! May God bless your family's pilgrimage today!");
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
