// Pilgrimage & Florida WDW Hub Component
import { parishesData } from '../data/parishes-wdw.js';
import { parkSecretsData } from '../data/park-secrets.js';
import { prayerNooksData } from '../data/prayer-nooks.js';

export function initPilgrimageHub() {
  renderBasilicaSpotlight();
  renderParishFinder('all', '');
  renderParkSecrets('all');
  renderPrayerNooks();
  setupPilgrimageFilters();
}

function renderBasilicaSpotlight() {
  const container = document.getElementById('basilica-spotlight-container');
  if (!container) return;

  const basilica = parishesData.find(p => p.id === 'mary-queen-universe');
  if (!basilica) return;

  container.innerHTML = `
    <div class="flagship-spotlight-card">
      <div class="spotlight-image-side">
        <div class="spotlight-overlay">
          <span class="spotlight-badge">★ Orlando Flagship Pilgrimage Site</span>
        </div>
      </div>
      <div class="spotlight-content-side">
        <h3 class="spotlight-title">${basilica.name}</h3>
        <div class="spotlight-subtitle">${basilica.tagline}</div>
        <p>${basilica.description}</p>
        
        <div class="mass-times-box">
          <div class="mass-grid-row">
            <span class="mass-day">Sunday Masses:</span>
            <span class="mass-times">${basilica.massSchedule.sunday.join(' • ')}</span>
          </div>
          <div class="mass-grid-row">
            <span class="mass-day">Saturday Vigil:</span>
            <span class="mass-times">${basilica.massSchedule.saturdayVigil.join(', ')}</span>
          </div>
          <div class="mass-grid-row">
            <span class="mass-day">Daily Mass:</span>
            <span class="mass-times">${basilica.massSchedule.weekday.join(' • ')}</span>
          </div>
          <div class="mass-grid-row">
            <span class="mass-day">Confessions:</span>
            <span class="mass-times">${basilica.confessions}</span>
          </div>
        </div>

        <ul class="spotlight-features-list">
          ${basilica.features.map(f => `<li>${f}</li>`).join('')}
        </ul>

        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 10px;">
          <a href="${basilica.website}" target="_blank" rel="noopener noreferrer" class="btn btn-gold">Official Shrine Website ↗</a>
          <a href="https://maps.google.com/?q=${encodeURIComponent(basilica.address)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">Directions (4 mi from WDW) ↗</a>
        </div>
      </div>
    </div>
  `;
}

export function renderParishFinder(filter = 'all', searchQuery = '') {
  const container = document.getElementById('parishes-grid');
  if (!container) return;

  const query = searchQuery.toLowerCase().trim();

  const filtered = parishesData.filter(parish => {
    // Search match
    const matchesSearch = !query || 
      parish.name.toLowerCase().includes(query) ||
      parish.address.toLowerCase().includes(query) ||
      parish.description.toLowerCase().includes(query);

    if (!matchesSearch) return false;

    // Category filter
    if (filter === 'all') return true;
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
        <p style="font-size: 1.2rem;">No parishes found matching your search.</p>
        <button class="btn btn-outline" onclick="window.resetParishFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(parish => `
    <div class="parish-card">
      <div>
        <div class="parish-header">
          <span class="parish-distance">📍 ${parish.distance}</span>
          <h4 class="parish-name">${parish.name}</h4>
          <div class="parish-address">${parish.address} • ${parish.diocese}</div>
        </div>

        <p style="font-size: 0.92rem; margin-bottom: 16px;">${parish.description}</p>

        <div class="mass-times-box" style="margin-bottom: 14px;">
          <div class="mass-grid-row">
            <span class="mass-day">Sunday:</span>
            <span class="mass-times">${parish.massSchedule.sunday.join(', ')}</span>
          </div>
          <div class="mass-grid-row">
            <span class="mass-day">Saturday Vigil:</span>
            <span class="mass-times">${parish.massSchedule.saturdayVigil.join(', ')}</span>
          </div>
          <div class="mass-grid-row">
            <span class="mass-day">Confessions:</span>
            <span class="mass-times">${parish.confessions}</span>
          </div>
        </div>

        <div style="font-size: 0.82rem; color: var(--gold-light); margin-bottom: 8px;">
          <strong>🚗 Rideshare / Travel Tip:</strong> ${parish.uberTip}
        </div>
      </div>

      <div class="parish-actions">
        <a href="${parish.website}" target="_blank" rel="noopener noreferrer" class="btn btn-gold" style="font-size: 0.85rem; padding: 8px 16px;">Visit Website ↗</a>
        <a href="https://maps.google.com/?q=${encodeURIComponent(parish.address)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="font-size: 0.85rem; padding: 8px 16px;">Map & Directions ↗</a>
      </div>
    </div>
  `).join('');
}

export function renderParkSecrets(parkFilter = 'all') {
  const container = document.getElementById('park-secrets-grid');
  if (!container) return;

  const filtered = parkFilter === 'all' 
    ? parkSecretsData 
    : parkSecretsData.filter(s => s.park.toLowerCase().includes(parkFilter.toLowerCase()));

  container.innerHTML = filtered.map(secret => `
    <div class="secret-card">
      <div class="secret-badge-group">
        <span class="park-pill">${secret.park}</span>
        <span style="font-size: 0.78rem; color: var(--gold-light); font-weight: 600;">${secret.category}</span>
      </div>
      <h4 class="secret-title">${secret.title}</h4>
      <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 10px;">📍 ${secret.location}</div>
      <p style="font-size: 0.92rem;">${secret.description}</p>
      
      <div class="secret-catholic-box">
        <strong>✦ Catholic & Sacramental Significance</strong>
        ${secret.catholicConnection}
      </div>

      <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: auto;">
        <span style="color: var(--gold-light); font-weight: 600;">Family Tip:</span> ${secret.insiderTip}
      </div>
    </div>
  `).join('');
}

function renderPrayerNooks() {
  const container = document.getElementById('prayer-nooks-container');
  if (!container) return;

  container.innerHTML = `
    <div class="cards-grid-2">
      ${prayerNooksData.map(group => `
        <div class="parish-card">
          <h4 style="color: var(--gold-light); font-size: 1.3rem; margin-bottom: 16px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
            🏰 ${group.park}
          </h4>
          <div style="display: grid; gap: 18px;">
            ${group.nooks.map(nook => `
              <div style="background: rgba(4, 9, 20, 0.5); padding: 14px; border-radius: var(--radius-sm); border: 1px solid rgba(255, 255, 255, 0.05);">
                <div style="font-weight: 700; color: #fff; font-size: 1.05rem; margin-bottom: 4px;">${nook.name}</div>
                <div style="font-size: 0.82rem; color: var(--marian-light); margin-bottom: 6px;">📍 ${nook.location}</div>
                <div style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 6px;">${nook.ambiance}</div>
                <div style="font-size: 0.84rem; color: var(--gold-light);"><strong>Ideal for:</strong> ${nook.bestFor}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function setupPilgrimageFilters() {
  // Parish Filter chips
  const parishChips = document.querySelectorAll('#parish-filter-chips .filter-chip');
  const parishSearch = document.getElementById('parish-search-input');

  let currentParishFilter = 'all';

  parishChips.forEach(chip => {
    chip.addEventListener('click', () => {
      parishChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentParishFilter = chip.getAttribute('data-filter') || 'all';
      renderParishFinder(currentParishFilter, parishSearch ? parishSearch.value : '');
    });
  });

  if (parishSearch) {
    parishSearch.addEventListener('input', (e) => {
      renderParishFinder(currentParishFilter, e.target.value);
    });
  }

  // Park Secrets Filter chips
  const parkChips = document.querySelectorAll('#park-filter-chips .filter-chip');
  parkChips.forEach(chip => {
    chip.addEventListener('click', () => {
      parkChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const park = chip.getAttribute('data-park') || 'all';
      renderParkSecrets(park);
    });
  });

  window.resetParishFilters = () => {
    if (parishSearch) parishSearch.value = '';
    parishChips.forEach(c => c.classList.remove('active'));
    if (parishChips[0]) parishChips[0].classList.add('active');
    renderParishFinder('all', '');
  };
}
