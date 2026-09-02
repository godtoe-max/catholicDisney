// Interactive Queue Rosary Component with Multi-Tradition Support (Roman, Latin TLM, Byzantine, Anglican Ordinariate)
// Includes Opening Prayers, Decade Meditations, and Closing Prayers (Hail Holy Queen, Collect, St. Michael)

import { ROSARY_MYSTERIES, TRADITIONS, TRADITION_PRAYERS } from '../data/rosary-mysteries.js';

let currentTraditionKey = 'roman'; // 'roman', 'latin', 'byzantine', 'anglican'
let currentMysteryKey = 'joyful'; // 'joyful', 'luminous', 'sorrowful', 'glorious', 'byzantine_rule'
let currentSection = 'decades'; // 'intro', 'decades', 'exit'
let currentIntroStep = 0; // 0: Sign of Cross, 1: Creed, 2: Our Father, 3: Hail Mary (Faith), 4: Hail Mary (Hope), 5: Hail Mary (Charity), 6: Glory Be & Fatima
let currentDecadeIndex = 0; // 0 to 4 (or 0 to 14 for Byzantine)
let currentBeadStep = 0; // 0: Our Father, 1-10: Hail Marys, 11: Glory Be
let currentExitStep = 0; // 0: Hail Holy Queen, 1: Concluding Collect, 2: St. Michael Prayer, 3: Final Sign of Cross

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
  
  if (currentDecadeIndex >= mysteryData.decades.length) {
    currentDecadeIndex = 0;
  }
  const decade = mysteryData.decades[currentDecadeIndex];
  const isByzantine = currentTraditionKey === 'byzantine' || currentMysteryKey === 'byzantine_rule';

  // Determine active prayer for the current section
  let currentPrayerTitle = "";
  let currentPrayerText = "";
  let currentStepLabel = "";

  if (currentSection === 'intro') {
    const introSteps = [
      { label: "Opening • Sign of the Cross", title: prayers.signOfCross.title, text: prayers.signOfCross.text },
      { label: "On the Crucifix • Apostles' Creed", title: prayers.creed.title, text: prayers.creed.text },
      { label: "First Large Bead • For the Holy Father", title: prayers.ourFather.title, text: prayers.ourFather.text },
      { label: "First Small Bead • For an Increase in Faith", title: `${prayers.hailMary.title} (For Faith)`, text: prayers.hailMary.text },
      { label: "Second Small Bead • For an Increase in Hope", title: `${prayers.hailMary.title} (For Hope)`, text: prayers.hailMary.text },
      { label: "Third Small Bead • For an Increase in Charity", title: `${prayers.hailMary.title} (For Charity)`, text: prayers.hailMary.text },
      { label: "Chain • Glory Be & Fatima Prayer", title: `${prayers.gloryBe.title} & ${prayers.fatima.title}`, text: `${prayers.gloryBe.text}\n\n${prayers.fatima.text}` }
    ];
    const step = introSteps[currentIntroStep] || introSteps[0];
    currentStepLabel = step.label;
    currentPrayerTitle = step.title;
    currentPrayerText = step.text;
  } else if (currentSection === 'exit') {
    const exitSteps = [
      { label: "Medal • Hail Holy Queen", title: prayers.hailHolyQueen.title, text: prayers.hailHolyQueen.text },
      { label: "Rosary Concluding Collect", title: prayers.rosaryClosing.title, text: prayers.rosaryClosing.text },
      { label: "Protection • Saint Michael the Archangel", title: prayers.stMichael.title, text: prayers.stMichael.text },
      { label: "Conclusion • Sign of the Cross", title: prayers.signOfCross.title, text: prayers.signOfCross.text }
    ];
    const step = exitSteps[currentExitStep] || exitSteps[0];
    currentStepLabel = step.label;
    currentPrayerTitle = step.title;
    currentPrayerText = step.text;
  } else {
    // Decades mode
    if (currentBeadStep === 0) {
      currentStepLabel = "Decade Opening • Lord's Prayer";
      currentPrayerTitle = prayers.ourFather.title;
      currentPrayerText = prayers.ourFather.text;
    } else if (currentBeadStep >= 1 && currentBeadStep <= 10) {
      currentStepLabel = `${prayers.hailMary.title} • Bead ${currentBeadStep} of 10`;
      currentPrayerTitle = `${prayers.hailMary.title} (Bead #${currentBeadStep})`;
      currentPrayerText = prayers.hailMary.text;
    } else {
      currentStepLabel = "Decade Conclusion • Doxology";
      currentPrayerTitle = `${prayers.gloryBe.title} & ${prayers.fatima.title}`;
      currentPrayerText = `${prayers.gloryBe.text}\n\n${prayers.fatima.text}`;
    }
  }

  container.innerHTML = `
    <!-- Tradition Selector Ribbon -->
    <div style="margin-bottom: 16px; background: #ffffff; border: 1.5px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 18px 20px; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
        <span style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: var(--blue-primary); letter-spacing: 0.06em;">
          Select Catholic Liturgical Tradition:
        </span>
        <span class="park-pill">${tradition.badge}</span>
      </div>

      <div class="filter-chips" style="gap: 6px; padding: 2px 0;">
        <button class="filter-chip ${currentTraditionKey === 'roman' ? 'active' : ''}" onclick="window.setRosaryTradition('roman')">
          🇻🇦 Roman Rite (English)
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

    <!-- Section Switcher: Opening Prayers vs Decades vs Closing Prayers -->
    <div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 20px; flex-wrap: wrap;">
      <button class="btn ${currentSection === 'intro' ? 'btn-primary' : 'btn-outline'}" onclick="window.setRosarySection('intro')" style="font-size: 0.88rem; padding: 8px 16px;">
        ✝️ Opening Prayers (Intro)
      </button>
      <button class="btn ${currentSection === 'decades' ? 'btn-primary' : 'btn-outline'}" onclick="window.setRosarySection('decades')" style="font-size: 0.88rem; padding: 8px 16px;">
        📿 Queue Decades (1–5)
      </button>
      <button class="btn ${currentSection === 'exit' ? 'btn-primary' : 'btn-outline'}" onclick="window.setRosarySection('exit')" style="font-size: 0.88rem; padding: 8px 16px;">
        👑 Closing Prayers (Exit)
      </button>
    </div>

    <!-- MAIN BODY DEPENDING ON SECTION -->
    ${currentSection === 'intro' ? `
      <!-- Opening Prayers Card -->
      <div class="rosary-card-header" style="text-align: center; margin-bottom: 20px;">
        <span class="park-pill" style="background: #e0f2fe; color: #0369a1; font-weight: 800;">
          ✝️ Introductory Prayers • Step ${currentIntroStep + 1} of 7
        </span>
        <h3 style="font-size: 1.5rem; color: #0f172a; margin: 8px 0 4px; font-weight: 800;">
          ${currentStepLabel}
        </h3>
        <p style="font-size: 0.88rem; color: #64748b; margin: 0;">
          Begin your Queue Rosary by consecrating your family's line wait to Christ and Our Lady.
        </p>

        <!-- Intro Step Dots -->
        <div style="display: flex; justify-content: center; gap: 8px; margin-top: 14px; flex-wrap: wrap;">
          ${[0, 1, 2, 3, 4, 5, 6].map(s => `
            <button onclick="window.setIntroStep(${s})" style="width: 32px; height: 32px; border-radius: 50%; border: 1.5px solid ${currentIntroStep === s ? 'var(--blue-primary)' : '#cbd5e1'}; background: ${currentIntroStep === s ? 'var(--blue-primary)' : (currentIntroStep > s ? '#e2e8f0' : '#ffffff')}; color: ${currentIntroStep === s ? '#ffffff' : '#475569'}; font-size: 0.78rem; font-weight: 800; cursor: pointer;">
              ${s === 0 ? '✝️' : (s === 1 ? '📜' : (s === 6 ? '✨' : s))}
            </button>
          `).join('')}
        </div>
      </div>
    ` : (currentSection === 'exit' ? `
      <!-- Closing Prayers Card -->
      <div class="rosary-card-header" style="text-align: center; margin-bottom: 20px;">
        <span class="park-pill" style="background: #fef3c7; color: #92400e; font-weight: 800;">
          👑 Concluding Prayers • Step ${currentExitStep + 1} of 4
        </span>
        <h3 style="font-size: 1.5rem; color: #0f172a; margin: 8px 0 4px; font-weight: 800;">
          ${currentStepLabel}
        </h3>
        <p style="font-size: 0.88rem; color: #64748b; margin: 0;">
          Conclude your family Rosary with thanksgiving, the Salve Regina, and the invocation of Saint Michael.
        </p>

        <!-- Exit Step Dots -->
        <div style="display: flex; justify-content: center; gap: 8px; margin-top: 14px;">
          ${[0, 1, 2, 3].map(s => `
            <button onclick="window.setExitStep(${s})" style="width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid ${currentExitStep === s ? '#f59e0b' : '#cbd5e1'}; background: ${currentExitStep === s ? '#f59e0b' : (currentExitStep > s ? '#fef3c7' : '#ffffff')}; color: ${currentExitStep === s ? '#ffffff' : '#78350f'}; font-size: 0.82rem; font-weight: 800; cursor: pointer;">
              ${s === 0 ? '👑' : (s === 1 ? '📜' : (s === 2 ? '⚔️' : '✝️'))}
            </button>
          `).join('')}
        </div>
      </div>
    ` : `
      <!-- DECADES MODE -->
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
    `)}

    <!-- Active Prayer Reading Card (Used in all modes) -->
    <div class="rosary-prayer-card" style="margin-top: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <span class="section-tag" style="margin-bottom: 0;">${tradition.name}</span>
        <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">
          ${currentSection === 'intro' ? `Step ${currentIntroStep + 1} of 7` : (currentSection === 'exit' ? `Step ${currentExitStep + 1} of 4` : `Bead ${currentBeadStep + 1} of 12`)}
        </span>
      </div>

      <h4 style="font-size: 1.35rem; color: var(--text-primary); margin-bottom: 12px; font-weight: 800;">
        ${currentPrayerTitle}
      </h4>

      <div class="prayer-text-display">
        ${currentPrayerText.replace(/\n\n/g, '<br><br>')}
      </div>

      <!-- Navigation Action Buttons -->
      <div class="rosary-action-buttons">
        <button class="btn btn-outline" onclick="window.prevRosaryStep()" style="flex: 1;">
          ← Previous Prayer
        </button>
        <button class="btn btn-sun" onclick="window.nextRosaryStep()" style="flex: 2; font-size: 1.05rem; padding: 14px 20px;">
          Next Prayer ➔
        </button>
      </div>
    </div>
  `;
}

// Window Controller Functions
window.setRosaryTradition = (tradKey) => {
  currentTraditionKey = tradKey;
  if (tradKey === 'byzantine') {
    currentMysteryKey = 'byzantine_rule';
  } else if (currentMysteryKey === 'byzantine_rule') {
    currentMysteryKey = 'joyful';
  }
  renderRosary();
};

window.setRosarySection = (sec) => {
  currentSection = sec;
  renderRosary();
};

window.setIntroStep = (step) => {
  currentIntroStep = step;
  renderRosary();
};

window.setExitStep = (step) => {
  currentExitStep = step;
  renderRosary();
};

window.selectMysterySet = (mysteryKey) => {
  currentMysteryKey = mysteryKey;
  currentDecadeIndex = 0;
  currentBeadStep = 0;
  renderRosary();
};

window.selectDecade = (idx) => {
  currentDecadeIndex = idx;
  currentBeadStep = 0;
  currentSection = 'decades';
  renderRosary();
};

window.jumpToBead = (beadNum) => {
  currentBeadStep = beadNum;
  currentSection = 'decades';
  renderRosary();
};

window.nextRosaryStep = () => {
  if (currentSection === 'intro') {
    if (currentIntroStep < 6) {
      currentIntroStep++;
    } else {
      currentSection = 'decades';
      currentDecadeIndex = 0;
      currentBeadStep = 0;
    }
  } else if (currentSection === 'exit') {
    if (currentExitStep < 3) {
      currentExitStep++;
    } else {
      currentExitStep = 0;
      currentSection = 'decades';
    }
  } else {
    // Decades
    if (currentBeadStep < 11) {
      currentBeadStep++;
    } else {
      const mysteryData = ROSARY_MYSTERIES[currentMysteryKey] || ROSARY_MYSTERIES.joyful;
      if (currentDecadeIndex < mysteryData.decades.length - 1) {
        currentDecadeIndex++;
        currentBeadStep = 0;
      } else {
        // Finished all 5 decades! Move to Closing Prayers!
        currentSection = 'exit';
        currentExitStep = 0;
      }
    }
  }
  renderRosary();
};

window.prevRosaryStep = () => {
  if (currentSection === 'intro') {
    if (currentIntroStep > 0) currentIntroStep--;
  } else if (currentSection === 'exit') {
    if (currentExitStep > 0) currentExitStep--;
  } else {
    if (currentBeadStep > 0) {
      currentBeadStep--;
    } else if (currentDecadeIndex > 0) {
      currentDecadeIndex--;
      currentBeadStep = 11;
    } else {
      currentSection = 'intro';
      currentIntroStep = 6;
    }
  }
  renderRosary();
};
