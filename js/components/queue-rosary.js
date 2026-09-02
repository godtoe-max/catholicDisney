// Interactive Queue Rosary Component with Multi-Tradition Support (Roman, Latin TLM, Byzantine, Anglican Ordinariate)
// Unified & Sequential: Opening Prayers -> Decades (1-5) -> Closing Prayers (Salve Regina, Collect, St. Michael)
// Freedom of Choice: Choose any mystery set anytime with zero day restrictions

import { ROSARY_MYSTERIES, TRADITIONS, TRADITION_PRAYERS } from '../data/rosary-mysteries.js';

let currentTraditionKey = 'roman'; // 'roman', 'latin', 'byzantine', 'anglican'
let currentMysteryKey = 'joyful'; // 'joyful', 'luminous', 'sorrowful', 'glorious', 'byzantine_rule'
let currentSection = 'intro'; // 'intro', 'decades', 'exit' - Start with Intro so users see full Rosary!
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

  const introSteps = [
    { label: "Opening • Sign of the Cross", title: prayers.signOfCross.title, text: prayers.signOfCross.text },
    { label: "On the Crucifix • Apostles' Creed", title: prayers.creed.title, text: prayers.creed.text },
    { label: "First Large Bead • Our Father (For the Holy Father)", title: prayers.ourFather.title, text: prayers.ourFather.text },
    { label: "First Small Bead • Hail Mary (For an Increase in Faith)", title: `${prayers.hailMary.title} (For Faith)`, text: prayers.hailMary.text },
    { label: "Second Small Bead • Hail Mary (For an Increase in Hope)", title: `${prayers.hailMary.title} (For Hope)`, text: prayers.hailMary.text },
    { label: "Third Small Bead • Hail Mary (For an Increase in Charity)", title: `${prayers.hailMary.title} (For Charity)`, text: prayers.hailMary.text },
    { label: "Chain • Glory Be & Fatima Prayer", title: `${prayers.gloryBe.title} & ${prayers.fatima.title}`, text: `${prayers.gloryBe.text}\n\n${prayers.fatima.text}` }
  ];

  const exitSteps = [
    { label: "Medal • Hail Holy Queen (Salve Regina)", title: prayers.hailHolyQueen.title, text: prayers.hailHolyQueen.text },
    { label: "Rosary Concluding Collect", title: prayers.rosaryClosing.title, text: prayers.rosaryClosing.text },
    { label: "Protection • Saint Michael the Archangel Prayer", title: prayers.stMichael.title, text: prayers.stMichael.text },
    { label: "Conclusion • Final Sign of the Cross", title: prayers.signOfCross.title, text: prayers.signOfCross.text }
  ];

  if (currentSection === 'intro') {
    const step = introSteps[currentIntroStep] || introSteps[0];
    currentStepLabel = step.label;
    currentPrayerTitle = step.title;
    currentPrayerText = step.text;
  } else if (currentSection === 'exit') {
    const step = exitSteps[currentExitStep] || exitSteps[0];
    currentStepLabel = step.label;
    currentPrayerTitle = step.title;
    currentPrayerText = step.text;
  } else {
    // Decades mode
    if (currentBeadStep === 0) {
      currentStepLabel = `Decade ${decade.decadeNumber} Opening • Lord's Prayer`;
      currentPrayerTitle = prayers.ourFather.title;
      currentPrayerText = prayers.ourFather.text;
    } else if (currentBeadStep >= 1 && currentBeadStep <= 10) {
      currentStepLabel = `${prayers.hailMary.title} • Bead ${currentBeadStep} of 10`;
      currentPrayerTitle = `${prayers.hailMary.title} (Bead #${currentBeadStep})`;
      currentPrayerText = prayers.hailMary.text;
    } else {
      currentStepLabel = `Decade ${decade.decadeNumber} Conclusion • Glory Be & Fatima`;
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

    <!-- Step 1: Choose Your Mystery (Completely Open Choice - No Day Restrictions) -->
    <div class="rosary-card-header" style="text-align: center; margin-bottom: 18px;">
      <div style="font-size: 0.82rem; font-weight: 800; text-transform: uppercase; color: #b45309; letter-spacing: 0.5px; margin-bottom: 6px;">
        Step 1: Choose Which Rosary to Pray (Open Choice Anytime)
      </div>
      <h3 style="font-size: 1.6rem; color: #0f172a; margin: 0 0 12px; font-weight: 800;">
        ☀️ ${mysteryData.name}
      </h3>
      <p style="font-size: 0.9rem; color: #64748b; margin: 0 0 14px;">
        ${mysteryData.tagline} • Feel free to choose any mysteries you and your family wish to pray!
      </p>

      <!-- Mystery Selector Chips (No Day of Week Labels!) -->
      <div class="filter-chips" style="justify-content: center; gap: 8px;">
        <button class="filter-chip ${currentMysteryKey === 'joyful' ? 'active' : ''}" onclick="window.selectMysterySet('joyful')">
          ☀️ Joyful Mysteries
        </button>
        <button class="filter-chip ${currentMysteryKey === 'luminous' ? 'active' : ''}" onclick="window.selectMysterySet('luminous')">
          💡 Luminous Mysteries
        </button>
        <button class="filter-chip ${currentMysteryKey === 'sorrowful' ? 'active' : ''}" onclick="window.selectMysterySet('sorrowful')">
          ✝️ Sorrowful Mysteries
        </button>
        <button class="filter-chip ${currentMysteryKey === 'glorious' ? 'active' : ''}" onclick="window.selectMysterySet('glorious')">
          👑 Glorious Mysteries
        </button>
        <button class="filter-chip ${currentMysteryKey === 'byzantine_rule' ? 'active' : ''}" onclick="window.selectMysterySet('byzantine_rule')">
          ☦️ Byzantine Rule (15 Steps)
        </button>
      </div>
    </div>

    <!-- Step 2: Full Rosary Progression Bar (Opening -> Decades 1-5 -> Closing) -->
    <div style="background: #ffffff; border: 1.5px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px 20px; margin-bottom: 20px; box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <span style="font-size: 0.82rem; font-weight: 800; text-transform: uppercase; color: #1e3a8a; letter-spacing: 0.5px;">
          Step 2: Choose Part of Rosary to Pray in Line
        </span>
        <span style="font-size: 0.82rem; color: #64748b; font-weight: 600;">
          Tap any part or tap Next Prayer
        </span>
      </div>

      <div class="decade-selector-bar" style="margin-top: 0;">
        <!-- Opening Prayers Button -->
        <button class="decade-num-btn ${currentSection === 'intro' ? 'active' : ''}" onclick="window.selectIntro()" style="background: ${currentSection === 'intro' ? 'var(--blue-primary)' : '#e0f2fe'}; color: ${currentSection === 'intro' ? '#ffffff' : '#0369a1'}; border-color: #38bdf8; font-weight: 800;">
          ✝️ Opening Prayers
        </button>

        <!-- Decades Buttons -->
        ${mysteryData.decades.map((d, idx) => `
          <button class="decade-num-btn ${currentSection === 'decades' && currentDecadeIndex === idx ? 'active' : ''}" onclick="window.selectDecade(${idx})">
            ${isByzantine ? `Step ${d.decadeNumber}` : `Decade ${d.decadeNumber}`}
          </button>
        `).join('')}

        <!-- Closing Prayers Button -->
        <button class="decade-num-btn ${currentSection === 'exit' ? 'active' : ''}" onclick="window.selectExit()" style="background: ${currentSection === 'exit' ? '#b45309' : '#fef3c7'}; color: ${currentSection === 'exit' ? '#ffffff' : '#92400e'}; border-color: #fde68a; font-weight: 800;">
          👑 Closing Prayers
        </button>
      </div>
    </div>

    <!-- MAIN BODY -->
    ${currentSection === 'intro' ? `
      <!-- OPENING PRAYERS BEAD TRACK -->
      <div class="rosary-bead-track-wrapper" style="margin-bottom: 18px;">
        <div class="rosary-track-label">
          <span>✝️ Opening Prayers:</span>
          <span style="font-weight: 800; color: var(--sun-gold);">${currentStepLabel}</span>
        </div>

        <div class="rosary-bead-chain">
          <!-- Step 0: Sign of Cross -->
          <button class="rosary-bead large-bead ${currentIntroStep === 0 ? 'current' : currentIntroStep > 0 ? 'completed' : ''}" onclick="window.setIntroStep(0)" title="Sign of the Cross">
            ✝️
          </button>
          <!-- Step 1: Apostles Creed (Crucifix) -->
          <button class="rosary-bead large-bead ${currentIntroStep === 1 ? 'current' : currentIntroStep > 1 ? 'completed' : ''}" onclick="window.setIntroStep(1)" title="Apostles' Creed (Crucifix)">
            📜
          </button>
          <!-- Step 2: Our Father -->
          <button class="rosary-bead large-bead ${currentIntroStep === 2 ? 'current' : currentIntroStep > 2 ? 'completed' : ''}" onclick="window.setIntroStep(2)" title="Our Father (Pope's Intentions)">
            🙏
          </button>
          <!-- Steps 3, 4, 5: Three Hail Marys (Faith, Hope, Charity) -->
          <div class="decade-beads-group">
            <button class="rosary-bead small-bead ${currentIntroStep === 3 ? 'current' : currentIntroStep > 3 ? 'completed' : ''}" onclick="window.setIntroStep(3)" title="Hail Mary for Faith">
              1
            </button>
            <button class="rosary-bead small-bead ${currentIntroStep === 4 ? 'current' : currentIntroStep > 4 ? 'completed' : ''}" onclick="window.setIntroStep(4)" title="Hail Mary for Hope">
              2
            </button>
            <button class="rosary-bead small-bead ${currentIntroStep === 5 ? 'current' : currentIntroStep > 5 ? 'completed' : ''}" onclick="window.setIntroStep(5)" title="Hail Mary for Charity">
              3
            </button>
          </div>
          <!-- Step 6: Glory Be & Fatima -->
          <button class="rosary-bead large-bead ${currentIntroStep === 6 ? 'current' : ''}" onclick="window.setIntroStep(6)" title="Glory Be & Fatima Prayer">
            ✨
          </button>
        </div>
      </div>
    ` : (currentSection === 'exit' ? `
      <!-- CLOSING PRAYERS BEAD TRACK -->
      <div class="rosary-bead-track-wrapper" style="margin-bottom: 18px;">
        <div class="rosary-track-label">
          <span>👑 Closing Prayers:</span>
          <span style="font-weight: 800; color: #b45309;">${currentStepLabel}</span>
        </div>

        <div class="rosary-bead-chain">
          <button class="rosary-bead large-bead ${currentExitStep === 0 ? 'current' : currentExitStep > 0 ? 'completed' : ''}" onclick="window.setExitStep(0)" title="Hail Holy Queen (Salve Regina)">
            👑
          </button>
          <button class="rosary-bead large-bead ${currentExitStep === 1 ? 'current' : currentExitStep > 1 ? 'completed' : ''}" onclick="window.setExitStep(1)" title="Rosary Concluding Collect">
            📜
          </button>
          <button class="rosary-bead large-bead ${currentExitStep === 2 ? 'current' : currentExitStep > 2 ? 'completed' : ''}" onclick="window.setExitStep(2)" title="Saint Michael the Archangel Prayer">
            ⚔️
          </button>
          <button class="rosary-bead large-bead ${currentExitStep === 3 ? 'current' : ''}" onclick="window.setExitStep(3)" title="Final Sign of the Cross">
            ✝️
          </button>
        </div>
      </div>
    ` : `
      <!-- ACTIVE DECADE MEDITATION CARD -->
      <div class="rosary-meditation-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; flex-wrap: wrap; gap: 6px;">
          <span class="park-pill" style="background: #fef3c7; color: #92400e;">
            ${isByzantine ? `Step ${decade.decadeNumber} of 15` : `Decade ${decade.decadeNumber} of 5`}
          </span>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--blue-primary);">Spiritual Fruit: ${decade.fruit}</span>
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

      <!-- INTERACTIVE 10-BEAD TRACK FOR THE DECADE -->
      <div class="rosary-bead-track-wrapper">
        <div class="rosary-track-label">
          <span>Tap bead or tap Next Prayer:</span>
          <span style="font-weight: 800; color: var(--sun-gold);">${currentStepLabel}</span>
        </div>

        <div class="rosary-bead-chain">
          <!-- Our Father Bead -->
          <button class="rosary-bead large-bead ${currentBeadStep === 0 ? 'current' : currentBeadStep > 0 ? 'completed' : ''}" 
                  onclick="window.jumpToBead(0)" aria-label="Our Father Bead" title="Lord's Prayer (Our Father)">
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
                  onclick="window.jumpToBead(11)" aria-label="Glory Be Bead" title="Glory Be & Fatima Prayer">
            ✨
          </button>
        </div>
      </div>
    `)}

    <!-- ACTIVE PRAYER READING CARD (USED FOR ALL SECTIONS) -->
    <div class="rosary-prayer-card" style="margin-top: 18px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <span class="section-tag" style="margin-bottom: 0;">${tradition.name}</span>
        <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 700;">
          ${currentSection === 'intro' ? `Intro Step ${currentIntroStep + 1} of 7` : (currentSection === 'exit' ? `Closing Step ${currentExitStep + 1} of 4` : `Decade Bead ${currentBeadStep + 1} of 12`)}
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
          ${getNextButtonLabel()}
        </button>
      </div>
    </div>
  `;
}

function getNextButtonLabel() {
  if (currentSection === 'intro') {
    return currentIntroStep === 6 ? 'Begin Decade 1 ➔' : 'Next Prayer Bead ➔';
  } else if (currentSection === 'exit') {
    return currentExitStep === 3 ? 'Finish Rosary 🎉' : 'Next Closing Prayer ➔';
  } else {
    if (currentBeadStep === 11) {
      const mysteryData = ROSARY_MYSTERIES[currentMysteryKey] || ROSARY_MYSTERIES.joyful;
      if (currentDecadeIndex < mysteryData.decades.length - 1) {
        return `Begin Decade ${currentDecadeIndex + 2} ➔`;
      } else {
        return 'Proceed to Closing Prayers ➔';
      }
    }
    return 'Next Prayer Bead ➔';
  }
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

window.selectIntro = () => {
  currentSection = 'intro';
  currentIntroStep = 0;
  renderRosary();
};

window.selectExit = () => {
  currentSection = 'exit';
  currentExitStep = 0;
  renderRosary();
};

window.setIntroStep = (step) => {
  currentSection = 'intro';
  currentIntroStep = step;
  renderRosary();
};

window.setExitStep = (step) => {
  currentSection = 'exit';
  currentExitStep = step;
  renderRosary();
};

window.selectMysterySet = (mysteryKey) => {
  currentMysteryKey = mysteryKey;
  currentSection = 'intro'; // Start at intro so they see the full Rosary for the chosen mystery!
  currentIntroStep = 0;
  currentDecadeIndex = 0;
  currentBeadStep = 0;
  renderRosary();
};

window.selectDecade = (idx) => {
  currentSection = 'decades';
  currentDecadeIndex = idx;
  currentBeadStep = 0;
  renderRosary();
};

window.jumpToBead = (beadNum) => {
  currentSection = 'decades';
  currentBeadStep = beadNum;
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
      // Completed entire Rosary! Reset to intro of current mystery
      currentSection = 'intro';
      currentIntroStep = 0;
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
    else {
      currentSection = 'decades';
      const mysteryData = ROSARY_MYSTERIES[currentMysteryKey] || ROSARY_MYSTERIES.joyful;
      currentDecadeIndex = mysteryData.decades.length - 1;
      currentBeadStep = 11;
    }
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
