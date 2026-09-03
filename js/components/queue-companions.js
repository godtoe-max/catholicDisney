// Catholic Disney: Queue Companions Interactive Explorer
// Browse and read saint connections, Christian scientist stories, and queue reflections for Disney attractions and Lands

import { QUEUE_COMPANIONS, getCompanionForRide } from '../data/queue-companions-data.js?v=20260902_v2';
import { LAND_PATRONS, getLandPatron } from '../data/land-patrons-data.js?v=20260902_v2';
import { DISNEYLAND_QUEUE_COMPANIONS, getDisneylandCompanionForRide } from '../data/disneyland-queue-companions-data.js?v=20260902_v2';
import { DISNEYLAND_LAND_PATRONS, getDisneylandLandPatron } from '../data/disneyland-land-patrons-data.js?v=20260902_v2';
import { getActiveResortId, getActiveResort } from './resort-switcher.js?v=20260902_v2';

let currentViewMode = 'rides'; // 'rides' or 'lands'
let activeParkFilter = 'all';
let searchQuery = '';

function getResortData() {
  const resortId = getActiveResortId();
  if (resortId === 'dlr') {
    const rides = DISNEYLAND_QUEUE_COMPANIONS.map(c => ({
      id: c.rideId,
      name: c.rideName,
      park: c.park,
      land: c.land,
      icon: c.icon,
      saint: c.patronSaint,
      saintTitle: c.patronRole,
      feastDay: c.feastDay,
      scripture: c.scripturePassage || 'Psalm 121:1-2',
      story: c.catholicConnection,
      didYouKnow: c.summary,
      reflection: c.queuePrayer,
      queueReflection: c.queuePrayer,
      prayerNook: c.prayerNook
    }));

    const lands = DISNEYLAND_LAND_PATRONS.map(l => ({
      id: l.landId,
      name: l.landName,
      park: l.park,
      land: l.landName,
      icon: l.icon,
      saint: l.patronSaint,
      saintTitle: l.patronTitle,
      feastDay: l.feastDay,
      scripture: 'Revelation 21:3-4',
      story: `${l.spiritualConnection}\n\n${l.catecheticalReflection}`,
      didYouKnow: l.spiritualConnection,
      reflection: l.catecheticalReflection,
      queueReflection: l.catecheticalReflection,
      prayerNook: l.designatedPrayerNook
    }));

    const parkFilters = [
      { id: 'all', label: '🌟 All Parks' },
      { id: 'disneyland', label: '🏰 Disneyland Park' },
      { id: 'california', label: '🎡 Disney California Adventure' }
    ];

    return { rides, lands, parkFilters, resortName: 'Disneyland Resort' };
  }

  return {
    rides: QUEUE_COMPANIONS,
    lands: LAND_PATRONS,
    parkFilters: [
      { id: 'all', label: '🌟 All Parks' },
      { id: 'magic', label: '🏰 Magic Kingdom' },
      { id: 'epcot', label: '🌐 EPCOT' },
      { id: 'hollywood', label: '🎬 Hollywood Studios' },
      { id: 'animal', label: '🌳 Animal Kingdom' }
    ],
    resortName: 'Walt Disney World'
  };
}

export function initQueueCompanions() {
  const container = document.getElementById('queue-companions-container');
  if (!container) return;

  renderQueueCompanions();

  window.addEventListener('catholic-resort-changed', () => {
    activeParkFilter = 'all';
    renderQueueCompanions();
  });
}

export function renderQueueCompanions() {
  const container = document.getElementById('queue-companions-container');
  if (!container) return;

  const data = getResortData();
  const dataset = currentViewMode === 'rides' ? data.rides : data.lands;

  const filtered = dataset.filter(item => {
    const matchesPark = (activeParkFilter === 'all') || item.park.toLowerCase().includes(activeParkFilter.toLowerCase());
    const query = searchQuery.toLowerCase();
    const matchesSearch = !query || 
      item.name.toLowerCase().includes(query) || 
      item.saint.toLowerCase().includes(query) || 
      (item.land && item.land.toLowerCase().includes(query)) ||
      (item.story && item.story.toLowerCase().includes(query));
    return matchesPark && matchesSearch;
  });

  container.innerHTML = `
    <div class="queue-companions-hub">
      <!-- Section Header -->
      <div class="section-header" style="text-align: center; margin-bottom: 24px;">
        <span class="section-tag">Faith in the Queue • Stories, Saints &amp; Miracles</span>
        <h2 class="section-title">Queue Companions: <span class="text-gradient-sun">Catholic Saints at ${data.resortName}</span></h2>
        <p class="section-description" style="max-width: 780px; margin: 0 auto;">
          Turn line waits and park strolls into captivating family storytelling moments. Discover the champions of faith, holy patrons, and sacred miracles behind every Disney ride and land!
        </p>
      </div>

      <!-- Mode Switcher: Rides vs Lands/Countries -->
      <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 22px; flex-wrap: wrap;">
        <button class="btn ${currentViewMode === 'rides' ? 'btn-primary' : 'btn-outline'}" onclick="window.setCompanionMode('rides')" style="font-weight: 800; padding: 10px 22px; border-radius: 999px;">
          🎢 Attractions &amp; Rides (${data.rides.length})
        </button>
        <button class="btn ${currentViewMode === 'lands' ? 'btn-primary' : 'btn-outline'}" onclick="window.setCompanionMode('lands')" style="font-weight: 800; padding: 10px 22px; border-radius: 999px;">
          🌍 Lands &amp; Pavilions (${data.lands.length})
        </button>
      </div>

      <!-- Park Filter & Search Bar -->
      <div class="filter-bar" style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 18px; padding: 14px 18px; margin-bottom: 24px; box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
          <!-- Park Filter Chips -->
          <div class="filter-chips" style="gap: 6px; padding: 0;">
            ${data.parkFilters.map(f => `
              <button class="filter-chip ${activeParkFilter === f.id ? 'active' : ''}" onclick="window.setCompanionPark('${f.id}')">
                ${f.label}
              </button>
            `).join('')}
          </div>

          <!-- Search Input -->
          <div style="flex: 1; min-width: 240px; max-width: 340px;">
            <input type="text" class="form-input" placeholder="🔍 Search ${currentViewMode === 'rides' ? 'ride, saint, or theme' : 'country, land, or saint'}..." value="${searchQuery}" oninput="window.handleCompanionSearch(this.value)" style="padding: 8px 14px; font-size: 0.88rem; border-radius: 999px; background: #f8fafc;">
          </div>
        </div>
      </div>

      <!-- Cards Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 18px;">
        ${filtered.map(item => `
          <div class="companion-card" style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 20px; padding: 20px; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04); display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s, box-shadow 0.2s;" onmouseenter="this.style.transform='translateY(-2px)'" onmouseleave="this.style.transform='translateY(0)'">
            <div>
              <!-- Header Badges -->
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; gap: 8px;">
                <span class="park-pill" style="font-size: 0.72rem; padding: 2px 8px; background: #f1f5f9; color: #475569;">
                  ${item.park} ${item.land ? `• ${item.land}` : ''}
                </span>
                <span style="font-size: 1.4rem;">${item.icon}</span>
              </div>

              <!-- Name -->
              <h3 style="font-size: 1.25rem; color: #0f172a; margin: 0 0 6px; font-weight: 800; line-height: 1.3;">
                ${item.name}
              </h3>

              <!-- Associated Saint Callout -->
              <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 10px 12px; margin-bottom: 12px;">
                <div style="display: flex; align-items: center; gap: 6px;">
                  <span style="font-size: 1.1rem;">☩</span>
                  <strong style="font-size: 0.95rem; color: #1e40af;">${item.saint}</strong>
                </div>
                <div style="font-size: 0.78rem; color: #3b82f6; font-weight: 700; margin-top: 2px;">
                  ${item.saintTitle}
                </div>
              </div>

              <!-- Brief Story Excerpt -->
              <p style="font-size: 0.88rem; color: #475569; line-height: 1.5; margin: 0 0 16px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
                ${item.story}
              </p>
            </div>

            <!-- Read Story Button -->
            <button class="btn btn-sun" onclick="${currentViewMode === 'rides' ? `window.openCompanionModal('${item.id}')` : `window.openLandModal('${item.id}')`}" style="width: 100%; font-size: 0.9rem; padding: 10px 14px; border-radius: 12px; justify-content: center; font-weight: 800; cursor: pointer;">
              📖 Read Story &amp; Reflection
            </button>
          </div>
        `).join('')}
      </div>

      ${filtered.length === 0 ? `
        <div style="text-align: center; padding: 50px 20px; background: #ffffff; border-radius: 20px; border: 1px solid #e2e8f0; color: #64748b;">
          No items found matching "${searchQuery}". Try a different keyword!
        </div>
      ` : ''}
    </div>
  `;
}

// Window Controller Functions
window.setCompanionMode = (mode) => {
  currentViewMode = mode;
  searchQuery = '';
  renderQueueCompanions();
};

window.setCompanionPark = (parkKey) => {
  activeParkFilter = parkKey;
  renderQueueCompanions();
};

window.handleCompanionSearch = (query) => {
  searchQuery = query;
  renderQueueCompanions();
};

// Generic Modal Renderer for Rides & Lands
function showModalContent(item) {
  let modalWrapper = document.getElementById('companion-modal-wrapper');
  if (!modalWrapper) {
    modalWrapper = document.createElement('div');
    modalWrapper.id = 'companion-modal-wrapper';
    document.body.appendChild(modalWrapper);
  }

  modalWrapper.innerHTML = `
    <div style="position: fixed; inset: 0; background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(6px); z-index: 99999; display: flex; align-items: center; justify-content: center; padding: 20px; box-sizing: border-box;" onclick="if(event.target === this) window.closeCompanionModal()">
      <div style="background: #ffffff; border-radius: 24px; max-width: 680px; width: 100%; max-height: 90vh; overflow-y: auto; padding: 28px 24px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4); position: relative; border: 2.5px solid #fbbf24; box-sizing: border-box;">
        <!-- Close Button -->
        <button onclick="window.closeCompanionModal()" aria-label="Close" style="position: absolute; top: 18px; right: 18px; background: #f1f5f9; border: none; width: 38px; height: 38px; border-radius: 50%; font-size: 1.3rem; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #475569; z-index: 10; font-weight: 800;">
          ✕
        </button>

        <!-- Header -->
        <div style="margin-bottom: 18px; padding-right: 40px;">
          <span class="park-pill" style="font-size: 0.78rem; background: #fef3c7; color: #92400e; font-weight: 800;">
            ${item.icon} ${item.park} ${item.land ? `• ${item.land}` : ''}
          </span>
          <h2 style="font-size: 1.65rem; color: #0f172a; margin: 8px 0 4px; font-weight: 800; line-height: 1.25;">
            ${item.name}
          </h2>
          <div style="font-size: 1.15rem; font-weight: 800; color: #1a73e8; display: flex; align-items: center; gap: 6px;">
            <span>☩</span> ${item.saint}
          </div>
          <div style="font-size: 0.85rem; color: #64748b; font-weight: 600; margin-top: 2px;">
            ${item.saintTitle} ${item.feastDay ? `• Feast Day: ${item.feastDay}` : ''}
          </div>
        </div>

        <!-- Scripture Banner -->
        <div style="background: #f8fafc; border-left: 4px solid var(--sun-gold); padding: 12px 16px; border-radius: 8px; margin-bottom: 18px; font-style: italic; font-size: 0.95rem; color: #334155; line-height: 1.45;">
          📖 ${item.scripture}
        </div>

        <!-- The Inspiring Story -->
        <div style="font-size: 1rem; line-height: 1.65; color: #1e293b; margin-bottom: 20px;">
          ${item.story}
        </div>

        <!-- Did You Know? Callout Box -->
        <div style="background: #fffbeb; border: 1.5px solid #fde68a; border-radius: 14px; padding: 16px; margin-bottom: 18px;">
          <div style="font-weight: 800; color: #b45309; font-size: 0.95rem; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
            <span>💡</span> Did You Know?
          </div>
          <p style="font-size: 0.92rem; color: #78350f; margin: 0; line-height: 1.5;">
            ${item.didYouKnow}
          </p>
        </div>

        <!-- Family Reflection -->
        <div style="background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 14px; padding: 16px; margin-bottom: 24px;">
          <div style="font-weight: 800; color: #166534; font-size: 0.95rem; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
            <span>🏰</span> Family Reflection:
          </div>
          <p style="font-size: 0.92rem; color: #14532d; margin: 0; line-height: 1.5; font-weight: 600;">
            "${item.queueReflection || item.reflection}"
          </p>
        </div>

        <!-- Bottom Action Buttons -->
        <div style="display: flex; gap: 10px; justify-content: space-between; flex-wrap: wrap;">
          <button class="btn btn-outline" onclick="window.closeCompanionModal()" style="flex: 1; min-width: 140px; justify-content: center;">
            Back to Explorer
          </button>
          <button class="btn btn-sun" onclick="window.navigateToRosaryFromModal()" style="flex: 2; min-width: 200px; justify-content: center; font-weight: 800;">
            📿 Pray a Queue Decade Now
          </button>
        </div>
      </div>
    </div>
  `;
  modalWrapper.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

window.openCompanionModal = (companionId) => {
  const data = getResortData();
  const comp = data.rides.find(c => c.id === companionId || c.name.toLowerCase() === String(companionId).toLowerCase())
    || QUEUE_COMPANIONS.find(c => c.id === companionId) 
    || getCompanionForRide(companionId)
    || getDisneylandCompanionForRide(companionId);
  if (comp) showModalContent(comp);
};

window.openLandModal = (landId) => {
  const data = getResortData();
  const land = data.lands.find(l => l.id === landId || l.name.toLowerCase() === String(landId).toLowerCase())
    || LAND_PATRONS.find(l => l.id === landId) 
    || getLandPatron(landId)
    || getDisneylandLandPatron(landId);
  if (land) showModalContent(land);
};

window.closeCompanionModal = () => {
  const modalWrapper = document.getElementById('companion-modal-wrapper');
  if (modalWrapper) {
    modalWrapper.style.display = 'none';
    modalWrapper.innerHTML = '';
  }
  document.body.style.overflow = '';
};

window.navigateToRosaryFromModal = () => {
  window.closeCompanionModal();
  if (window.navigateToTab) {
    window.navigateToTab('rosary-tab');
  }
};
