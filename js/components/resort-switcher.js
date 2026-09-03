// Catholic Disney: Resort Switcher Controller
// Toggles between Walt Disney World (Florida) and Disneyland Resort (California)

export const RESORTS = {
  wdw: {
    id: "wdw",
    name: "Walt Disney World",
    location: "Orlando, Florida",
    icon: "🏰",
    shortName: "Florida (WDW)",
    badge: "🏰 Walt Disney World (FL)",
    defaultLiveParkId: 6,
    parks: [
      { id: 6, name: "Magic Kingdom", icon: "🏰" },
      { id: 5, name: "EPCOT", icon: "🌐" },
      { id: 7, name: "Hollywood Studios", icon: "🎬" },
      { id: 8, name: "Animal Kingdom", icon: "🌳" }
    ],
    lodgingTiers: [
      { id: "wdw-value", label: "Disney Value Family Suites (Art of Animation / All-Star Music for 6)" },
      { id: "wdw-moderate", label: "Disney Moderate (Fort Wilderness Cabins for 6 / Caribbean Beach)" },
      { id: "wdw-deluxe", label: "Disney Deluxe & 1-2 Bedroom Villa Suites" },
      { id: "wdw-off-prop", label: "Off-Property Family Suites (Near Mary Queen of the Universe)" },
      { id: "wdw-tickets-only", label: "Tickets & Planning Only (Lodging already arranged)" }
    ]
  },
  dlr: {
    id: "dlr",
    name: "Disneyland Resort",
    location: "Anaheim, California",
    icon: "🌴",
    shortName: "California (DLR)",
    badge: "🌴 Disneyland Resort (CA)",
    defaultLiveParkId: 16,
    parks: [
      { id: 16, name: "Disneyland Park", icon: "🏰" },
      { id: 17, name: "Disney California Adventure", icon: "🎡" }
    ],
    lodgingTiers: [
      { id: "dlr-good-neighbor", label: "Harbor Blvd Walkable Good Neighbor Family Suites (Direct Walk to Gates)" },
      { id: "dlr-disneyland-hotel", label: "Disneyland Hotel (Classic Disney Nostalgia & Monorail)" },
      { id: "dlr-grand-californian", label: "Disney's Grand Californian Hotel & Spa (Private DCA Park Entrance)" },
      { id: "dlr-pixar-place", label: "Pixar Place Hotel (Modernized Suites overlooking DCA)" },
      { id: "dlr-tickets-only", label: "Tickets & Planning Only (Lodging already arranged)" }
    ]
  }
};

const STORAGE_KEY = 'catholic_disney_resort';
let inMemoryResort = 'wdw';

export function getActiveResortId() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && RESORTS[stored]) {
      inMemoryResort = stored;
      return stored;
    }
  } catch(e) {}
  return inMemoryResort || 'wdw';
}

export function getActiveResort() {
  const id = getActiveResortId();
  return RESORTS[id] || RESORTS.wdw;
}

export function setActiveResort(resortId) {
  if (!RESORTS[resortId]) return;
  inMemoryResort = resortId;
  try {
    localStorage.setItem(STORAGE_KEY, resortId);
  } catch(e) {}

  // Apply inlined header/banner visuals synchronously
  if (window.__applyResortVisuals) {
    window.__applyResortVisuals(resortId);
  }

  // Update UI switchers
  renderResortSwitchers();

  // Dispatch custom event to notify all components
  window.dispatchEvent(new CustomEvent('catholic-resort-changed', {
    detail: { resortId, resort: RESORTS[resortId] }
  }));
}

window.__setActiveResort = setActiveResort;
window.selectCatholicResort = (resortId) => {
  setActiveResort(resortId);
};

export function initResortSwitcher() {
  renderResortSwitchers();
}

export function renderResortSwitchers() {
  const activeId = getActiveResortId();

  document.querySelectorAll('.resort-switcher-mount').forEach(container => {
    const isDark = container.closest('[style*="1e3a8a"]');
    const wdwBtn = container.querySelector('.resort-btn-wdw');
    const dlrBtn = container.querySelector('.resort-btn-dlr');

    if (wdwBtn && dlrBtn) {
      if (activeId === 'wdw') {
        wdwBtn.style.background = isDark ? '#fbbf24' : '#1a73e8';
        wdwBtn.style.color = isDark ? '#78350f' : '#ffffff';
        wdwBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.25)';

        dlrBtn.style.background = 'transparent';
        dlrBtn.style.color = isDark ? '#ffffff' : '#334155';
        dlrBtn.style.boxShadow = 'none';
      } else {
        dlrBtn.style.background = isDark ? '#fbbf24' : '#1a73e8';
        dlrBtn.style.color = isDark ? '#78350f' : '#ffffff';
        dlrBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.25)';

        wdwBtn.style.background = 'transparent';
        wdwBtn.style.color = isDark ? '#ffffff' : '#334155';
        wdwBtn.style.boxShadow = 'none';
      }
    } else {
      // Fallback injection if mount was empty
      container.innerHTML = `
        <div class="resort-switcher-pill" style="display: inline-flex; background: ${isDark ? 'rgba(255,255,255,0.18)' : '#e2e8f0'}; border-radius: 999px; padding: 4px; gap: 6px; border: 1.5px solid ${isDark ? 'rgba(251, 191, 36, 0.5)' : '#cbd5e1'};">
          <button 
            type="button" 
            class="resort-btn-wdw"
            onclick="window.selectCatholicResort('wdw')" 
            style="border: none; background: ${activeId === 'wdw' ? (isDark ? '#fbbf24' : '#1a73e8') : 'transparent'}; color: ${activeId === 'wdw' ? (isDark ? '#78350f' : '#ffffff') : (isDark ? '#ffffff' : '#334155')}; padding: 7px 16px; border-radius: 999px; font-weight: 800; font-size: 0.84rem; cursor: pointer; transition: all 0.2s ease; display: inline-flex; align-items: center; gap: 6px; box-shadow: ${activeId === 'wdw' ? '0 2px 8px rgba(0,0,0,0.25)' : 'none'};">
            <span>🏰</span> <span>Florida (WDW)</span>
          </button>
          <button 
            type="button" 
            class="resort-btn-dlr"
            onclick="window.selectCatholicResort('dlr')" 
            style="border: none; background: ${activeId === 'dlr' ? (isDark ? '#fbbf24' : '#1a73e8') : 'transparent'}; color: ${activeId === 'dlr' ? (isDark ? '#78350f' : '#ffffff') : (isDark ? '#ffffff' : '#334155')}; padding: 7px 16px; border-radius: 999px; font-weight: 800; font-size: 0.84rem; cursor: pointer; transition: all 0.2s ease; display: inline-flex; align-items: center; gap: 6px; box-shadow: ${activeId === 'dlr' ? '0 2px 8px rgba(0,0,0,0.25)' : 'none'};">
            <span>🌴</span> <span>California (DLR)</span>
          </button>
        </div>
      `;
    }
  });

  // Update hero subtext or destination badges if present
  const heroBadge = document.getElementById('hero-resort-badge');
  if (heroBadge) {
    const res = getActiveResort();
    heroBadge.innerHTML = `${res.icon} Currently Viewing: <strong>${res.name} (${res.location})</strong>`;
  }
}
