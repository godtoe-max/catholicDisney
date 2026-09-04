// Pilgrimage & Theme Park Hub Component with Diverse Catholic Traditions & Rites
import { parishesData } from '../data/parishes-wdw.js?v=20260902_v2';
import { disneylandParishesData } from '../data/parishes-dlr.js?v=20260902_v2';
import { parkSecretsData, disneylandParkSecretsData } from '../data/park-secrets.js?v=20260902_v2';
import { prayerNooksData, disneylandPrayerNooksData } from '../data/prayer-nooks.js?v=20260902_v2';
import { getActiveResortId, getActiveResort } from './resort-switcher.js?v=20260902_v2';

function getActiveParishes() {
  return getActiveResortId() === 'dlr' ? disneylandParishesData : parishesData;
}

function getActiveSecrets() {
  return getActiveResortId() === 'dlr' ? disneylandParkSecretsData : parkSecretsData;
}

function getActivePrayerNooks() {
  return getActiveResortId() === 'dlr' ? disneylandPrayerNooksData : prayerNooksData;
}

export function initPilgrimageHub() {
  renderPilgrimageHeader();
  renderBasilicaSpotlight();
  renderParishFinder('all', '');
  renderSecretsFilterChips();
  renderParkSecrets('all');
  renderNookFilterChips();
  renderPrayerNooks('all');
  setupPilgrimageFilters();

  window.addEventListener('catholic-resort-changed', () => {
    renderPilgrimageHeader();
    renderBasilicaSpotlight();
    renderParishFinder('all', '');
    renderSecretsFilterChips();
    renderParkSecrets('all');
    renderNookFilterChips();
    renderPrayerNooks('all');
  });
}

function renderPilgrimageHeader() {
  const isDlr = getActiveResortId() === 'dlr';
  const tagEl = document.querySelector('#pilgrimage-tab .section-tag');
  const titleEl = document.querySelector('#pilgrimage-tab .section-title');
  const descEl = document.querySelector('#pilgrimage-tab .section-description');
  const parishesHeading = document.querySelector('#pilgrimage-tab h3');

  if (tagEl) {
    tagEl.textContent = isDlr 
      ? 'Southern California & Anaheim Pilgrimage' 
      : 'Florida & Central Florida Pilgrimage';
  }
  if (titleEl) {
    titleEl.innerHTML = isDlr
      ? 'The Catholic Family Guide to <span class="text-gradient-blue">Disneyland Resort</span>'
      : 'The Catholic Family Guide to <span class="text-gradient-blue">Walt Disney World</span>';
  }
  if (descEl) {
    descEl.textContent = isDlr
      ? 'Keep your family grounded in joy and prayer! Find Mass times minutes from Disneyland gates, explore the monumental Christ Cathedral, and walk in the footsteps of St. Junípero Serra.'
      : 'Keep your family grounded in joy and prayer! Find Mass times minutes from the parks, visit the world-famous tourist Basilica, and discover hidden Christian art in the Disney castles.';
  }
  if (parishesHeading) {
    parishesHeading.textContent = isDlr
      ? '⛪ Catholic Parishes & Liturgical Traditions Near Disneyland'
      : '⛪ Catholic Parishes & Liturgical Traditions Near Disney World';
  }
}

function renderBasilicaSpotlight() {
  const container = document.getElementById('basilica-spotlight-container');
  if (!container) return;

  const isDlr = getActiveResortId() === 'dlr';
  const parishes = getActiveParishes();
  const basilica = isDlr 
    ? parishes.find(p => p.id === 'christ-cathedral') || parishes[0]
    : parishes.find(p => p.id === 'mary-queen-universe') || parishes[0];
  const bgImg = isDlr 
    ? 'assets/images/christ_cathedral_la_vang.jpg' 
    : 'assets/images/basilica.jpg';

  container.innerHTML = `
    <div class="flagship-spotlight-card">
      <div class="spotlight-image-side" style="background: url('${bgImg}') center/cover no-repeat; min-height: 360px;">
        <div class="spotlight-overlay">
          <span class="spotlight-badge">${isDlr ? '🌴 Orange County Flagship Pilgrimage Site' : '☀️ Orlando Flagship Pilgrimage Site'}</span>
        </div>
      </div>
      <div class="spotlight-content-side">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
          <span class="park-pill" style="background: var(--blue-light); color: var(--blue-dark); font-weight: 800;">
            ${basilica.rite}
          </span>
        </div>
        <h3 class="spotlight-title">${basilica.name}</h3>
        <div class="spotlight-subtitle">${basilica.tagline}</div>
        <p>${basilica.description}</p>
        
        <div class="mass-times-box">
          <div class="mass-grid-row">
            <span class="mass-day">📅 Sunday Masses</span>
            <span class="mass-times">${basilica.massSchedule.sunday.join(' • ')}</span>
          </div>
          ${basilica.massSchedule.saturdayVigil && basilica.massSchedule.saturdayVigil.length > 0 ? `
            <div class="mass-grid-row">
              <span class="mass-day">🕯️ Saturday Vigil</span>
              <span class="mass-times">${basilica.massSchedule.saturdayVigil.join(', ')}</span>
            </div>
          ` : ''}
          <div class="mass-grid-row">
            <span class="mass-day">☀️ Daily Mass</span>
            <span class="mass-times">${basilica.massSchedule.weekday.join(' • ')}</span>
          </div>
          <div class="mass-grid-row">
            <span class="mass-day">🕊️ Confessions</span>
            <span class="mass-times">${basilica.confessions}</span>
          </div>
        </div>

        <ul class="spotlight-features-list">
          ${basilica.features.map(f => `<li>${f}</li>`).join('')}
        </ul>

        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 10px;">
          <a href="${basilica.website}" target="_blank" rel="noopener noreferrer" class="btn btn-sun">Official Website ↗</a>
          <a href="https://maps.google.com/?q=${encodeURIComponent(basilica.address)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Directions (${basilica.distance}) ↗</a>
        </div>
      </div>
    </div>
  `;
}

function getRiteBadgeStyle(tradition) {
  if (tradition === 'tlm') {
    return { bg: '#ede9fe', color: '#6d28d9', icon: '☩' }; // Purple for Traditional Latin Mass
  }
  if (tradition === 'ordinariate') {
    return { bg: '#ffe4e6', color: '#be123c', icon: '👑' }; // Royal Crimson for Anglican Ordinariate
  }
  if (tradition === 'byzantine') {
    return { bg: '#fef3c7', color: '#b45309', icon: '☦' }; // Gold/Amber for Eastern Byzantine/Maronite
  }
  return { bg: '#e8f0fe', color: '#1d4ed8', icon: '☀️' }; // Sky Blue for Roman Rite
}

export function renderParishFinder(filter = 'all', searchQuery = '') {
  const container = document.getElementById('parishes-grid');
  if (!container) return;

  const parishes = getActiveParishes();
  const query = searchQuery.toLowerCase().trim();

  const filtered = parishes.filter(parish => {
    // Search match
    const matchesSearch = !query || 
      parish.name.toLowerCase().includes(query) ||
      parish.rite.toLowerCase().includes(query) ||
      parish.diocese.toLowerCase().includes(query) ||
      parish.address.toLowerCase().includes(query) ||
      parish.description.toLowerCase().includes(query);

    if (!matchesSearch) return false;

    // Filter logic
    if (filter === 'all') return true;
    if (filter === 'tlm') return parish.traditionCategory === 'tlm';
    if (filter === 'ordinariate') return parish.traditionCategory === 'ordinariate';
    if (filter === 'byzantine') return parish.traditionCategory === 'byzantine';
    if (filter === 'roman') return parish.traditionCategory === 'roman';
    if (filter === 'sunday-am') {
      return parish.massSchedule.sunday.some(t => t.includes('AM'));
    }
    if (filter === 'sunday-pm') {
      return parish.massSchedule.sunday.some(t => t.includes('PM'));
    }
    if (filter === 'daily') {
      return parish.massSchedule.weekday && parish.massSchedule.weekday.length > 0;
    }
    if (filter === 'confessions') {
      return parish.confessions && parish.confessions.length > 0;
    }
    if (filter === 'spanish') {
      return parish.languages.some(l => l.toLowerCase().includes('spanish'));
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 12px;">No parishes found matching your filter or search.</p>
        <button class="btn btn-outline" onclick="window.resetParishFilters()">View All Parishes & Traditions</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(parish => {
    const badgeStyle = getRiteBadgeStyle(parish.traditionCategory);

    return `
      <div class="parish-card">
        <div>
          <div class="parish-header">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px; margin-bottom: 8px;">
              <span class="park-pill" style="background: ${badgeStyle.bg}; color: ${badgeStyle.color}; font-weight: 800; font-size: 0.8rem; padding: 4px 12px;">
                ${badgeStyle.icon} ${parish.rite}
              </span>
              <span class="parish-distance">📍 ${parish.distance}</span>
            </div>
            
            <h4 class="parish-name">${parish.name}</h4>
            <div class="parish-address">${parish.address} • <em>${parish.diocese}</em></div>
          </div>

          <p style="font-size: 0.92rem; margin-bottom: 12px; color: var(--text-secondary);">${parish.description}</p>

          ${parish.liturgyNotes ? `
            <div style="background: #f8fafc; border-left: 3px solid ${badgeStyle.color}; padding: 10px 14px; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; margin-bottom: 14px; font-size: 0.88rem; color: #334155;">
              <strong style="color: ${badgeStyle.color}; font-size: 0.8rem; text-transform: uppercase;">Liturgical Notes:</strong> ${parish.liturgyNotes}
            </div>
          ` : ''}

          <div class="mass-times-box" style="margin-bottom: 14px;">
            <div class="mass-grid-row">
              <span class="mass-day">Sunday Schedule:</span>
              <span class="mass-times">${parish.massSchedule.sunday.join(', ')}</span>
            </div>
            ${parish.massSchedule.saturdayVigil && parish.massSchedule.saturdayVigil.length > 0 ? `
              <div class="mass-grid-row">
                <span class="mass-day">Saturday Vigil:</span>
                <span class="mass-times">${parish.massSchedule.saturdayVigil.join(', ')}</span>
              </div>
            ` : ''}
            <div class="mass-grid-row">
              <span class="mass-day">Confessions:</span>
              <span class="mass-times">${parish.confessions}</span>
            </div>
          </div>

          <div style="font-size: 0.84rem; color: #b45309; margin-bottom: 8px;">
            <strong>🚗 Travel / Rideshare Tip:</strong> ${parish.uberTip}
          </div>
        </div>

        <div class="parish-actions">
          <a href="${parish.website}" target="_blank" rel="noopener noreferrer" class="btn btn-sun" style="font-size: 0.85rem; padding: 8px 16px;">Parish Website ↗</a>
          <a href="https://maps.google.com/?q=${encodeURIComponent(parish.address)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="font-size: 0.85rem; padding: 8px 16px;">Map & Directions ↗</a>
        </div>
      </div>
    `;
  }).join('');
}

export function renderSecretsFilterChips() {
  const container = document.getElementById('park-filter-chips');
  if (!container) return;
  const isDlr = getActiveResortId() === 'dlr';
  container.innerHTML = isDlr ? `
    <button class="filter-chip active" data-park="all">All Parks</button>
    <button class="filter-chip" data-park="Disneyland Park">Disneyland Park</button>
    <button class="filter-chip" data-park="Disney California Adventure">Disney California Adventure</button>
  ` : `
    <button class="filter-chip active" data-park="all">All Parks</button>
    <button class="filter-chip" data-park="Magic Kingdom">Magic Kingdom</button>
    <button class="filter-chip" data-park="Epcot">Epcot World Showcase</button>
    <button class="filter-chip" data-park="Animal Kingdom">Animal Kingdom</button>
  `;

  const parkSecretsGrid = document.getElementById('park-secrets-grid');
  container.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      container.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const park = chip.getAttribute('data-park') || 'all';
      renderParkSecrets(park);
      if (parkSecretsGrid) parkSecretsGrid.scrollTo({ left: 0, behavior: 'smooth' });
    });
  });
}

export function renderNookFilterChips() {
  const container = document.getElementById('nook-filter-chips');
  if (!container) return;
  const isDlr = getActiveResortId() === 'dlr';
  container.innerHTML = isDlr ? `
    <button class="filter-chip active" data-park="all">All Parks (7 Nooks)</button>
    <button class="filter-chip" data-park="Disneyland Park">Disneyland Park</button>
    <button class="filter-chip" data-park="Disney California Adventure">Disney California Adventure</button>
  ` : `
    <button class="filter-chip active" data-park="all">All Parks (10 Nooks)</button>
    <button class="filter-chip" data-park="Magic Kingdom">Magic Kingdom</button>
    <button class="filter-chip" data-park="Epcot">Epcot</button>
    <button class="filter-chip" data-park="Disney's Hollywood Studios">Hollywood Studios</button>
    <button class="filter-chip" data-park="Disney's Animal Kingdom">Animal Kingdom</button>
  `;

  const nooksContainer = document.getElementById('prayer-nooks-container');
  container.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      container.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const park = chip.getAttribute('data-park') || 'all';
      renderPrayerNooks(park);
      if (nooksContainer) nooksContainer.scrollTo({ left: 0, behavior: 'smooth' });
    });
  });
}

export function renderParkSecrets(parkFilter = 'all') {
  const container = document.getElementById('park-secrets-grid');
  if (!container) return;

  const dataset = getActiveSecrets();
  const filtered = parkFilter === 'all' 
    ? dataset 
    : dataset.filter(s => s.park.toLowerCase().includes(parkFilter.toLowerCase()));

  container.innerHTML = filtered.map(secret => `
    <div class="secret-card">
      <div class="secret-badge-group">
        <span class="park-pill">${secret.park}</span>
        <span style="font-size: 0.8rem; color: #b45309; font-weight: 700;">${secret.category}</span>
      </div>
      <h4 class="secret-title">${secret.title}</h4>
      <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 10px;">📍 ${secret.location}</div>
      <p style="font-size: 0.93rem;">${secret.description}</p>
      
      <div class="secret-catholic-box">
        <strong>✦ Catholic & Sacramental Significance</strong>
        ${secret.catholicConnection}
      </div>

      <div style="font-size: 0.88rem; color: var(--text-secondary); margin-top: auto;">
        <span style="color: #b45309; font-weight: 700;">Family Tip:</span> ${secret.insiderTip}
      </div>
    </div>
  `).join('');
}

export function renderPrayerNooks(parkFilter = 'all') {
  const container = document.getElementById('prayer-nooks-container');
  if (!container) return;

  const dataset = getActivePrayerNooks();
  const allNooks = [];
  dataset.forEach(group => {
    group.nooks.forEach(nook => {
      allNooks.push({
        ...nook,
        park: group.park
      });
    });
  });

  const filtered = parkFilter === 'all'
    ? allNooks
    : allNooks.filter(n => n.park.toLowerCase().includes(parkFilter.toLowerCase()));

  container.innerHTML = filtered.map(nook => `
    <div class="nook-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <span class="park-pill">${nook.park}</span>
        <span style="font-size: 0.8rem; color: #b45309; font-weight: 700;">🕊️ Sanctuary</span>
      </div>
      <h4 class="nook-name">${nook.name}</h4>
      <div class="nook-location">📍 ${nook.location}</div>
      <p class="nook-ambiance">${nook.ambiance}</p>
      
      <div class="nook-best-for">
        <strong style="display: block; font-size: 0.8rem; text-transform: uppercase; color: #92400e; margin-bottom: 2px;">Spiritual Recommendation:</strong>
        ${nook.bestFor}
      </div>

      <div class="nook-amenities">
        <strong>🌿 Spot Details:</strong> ${nook.amenities}
      </div>
    </div>
  `).join('');
}

function setupPilgrimageFilters() {
  const parishChips = document.querySelectorAll('#parish-filter-chips .filter-chip');
  const parishSearch = document.getElementById('parish-search-input');
  const parishGrid = document.getElementById('parishes-grid');
  const prevBtn = document.getElementById('parish-scroll-prev');
  const nextBtn = document.getElementById('parish-scroll-next');

  if (prevBtn && parishGrid) {
    prevBtn.addEventListener('click', () => {
      parishGrid.scrollBy({ left: -380, behavior: 'smooth' });
    });
  }

  if (nextBtn && parishGrid) {
    nextBtn.addEventListener('click', () => {
      parishGrid.scrollBy({ left: 380, behavior: 'smooth' });
    });
  }

  let currentParishFilter = 'all';

  parishChips.forEach(chip => {
    chip.addEventListener('click', () => {
      parishChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentParishFilter = chip.getAttribute('data-filter') || 'all';
      renderParishFinder(currentParishFilter, parishSearch ? parishSearch.value : '');
      if (parishGrid) parishGrid.scrollTo({ left: 0, behavior: 'smooth' });
    });
  });

  if (parishSearch) {
    parishSearch.addEventListener('input', (e) => {
      renderParishFinder(currentParishFilter, e.target.value);
      if (parishGrid) parishGrid.scrollTo({ left: 0, behavior: 'smooth' });
    });
  }

  const parkSecretsGrid = document.getElementById('park-secrets-grid');
  const secretsPrevBtn = document.getElementById('secrets-scroll-prev');
  const secretsNextBtn = document.getElementById('secrets-scroll-next');

  if (secretsPrevBtn && parkSecretsGrid) {
    secretsPrevBtn.addEventListener('click', () => {
      parkSecretsGrid.scrollBy({ left: -380, behavior: 'smooth' });
    });
  }

  if (secretsNextBtn && parkSecretsGrid) {
    secretsNextBtn.addEventListener('click', () => {
      parkSecretsGrid.scrollBy({ left: 380, behavior: 'smooth' });
    });
  }

  const nooksContainer = document.getElementById('prayer-nooks-container');
  const nooksPrevBtn = document.getElementById('nooks-scroll-prev');
  const nooksNextBtn = document.getElementById('nooks-scroll-next');

  if (nooksPrevBtn && nooksContainer) {
    nooksPrevBtn.addEventListener('click', () => {
      nooksContainer.scrollBy({ left: -380, behavior: 'smooth' });
    });
  }

  if (nooksNextBtn && nooksContainer) {
    nooksNextBtn.addEventListener('click', () => {
      nooksContainer.scrollBy({ left: 380, behavior: 'smooth' });
    });
  }

  window.resetParishFilters = () => {
    if (parishSearch) parishSearch.value = '';
    parishChips.forEach(c => c.classList.remove('active'));
    if (parishChips[0]) parishChips[0].classList.add('active');
    renderParishFinder('all', '');
    if (parishGrid) parishGrid.scrollTo({ left: 0, behavior: 'smooth' });
  };
}
