// Catholic Family Liturgical Living & Parent Discernment Component
import { liturgicalPairingsData } from '../data/liturgical-pairings.js';

export function initLiturgicalHub() {
  renderLiturgicalPairings('all');
  setupLiturgicalFilters();
}

export function renderLiturgicalPairings(seasonFilter = 'all') {
  const container = document.getElementById('liturgical-pairings-grid');
  if (!container) return;

  const filtered = seasonFilter === 'all'
    ? liturgicalPairingsData
    : liturgicalPairingsData.filter(item => item.season.toLowerCase().includes(seasonFilter.toLowerCase()));

  container.innerHTML = filtered.map(item => `
    <div class="parish-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
        <span class="park-pill" style="background: rgba(212, 175, 55, 0.15); border-color: var(--border-gold-glow); color: var(--gold-light);">
          📅 ${item.feastDate} • ${item.season}
        </span>
      </div>

      <h4 style="font-size: 1.35rem; color: #fff; margin-bottom: 4px;">${item.saint}</h4>
      <div style="font-size: 0.85rem; color: var(--marian-light); margin-bottom: 14px;"><strong>Patronage:</strong> ${item.patronOf}</div>

      <div style="background: rgba(4, 9, 20, 0.6); padding: 12px 16px; border-radius: var(--radius-sm); border-left: 3px solid var(--gold-primary); margin-bottom: 14px;">
        <div style="font-size: 0.82rem; color: var(--gold-light); font-weight: 700; text-transform: uppercase;">🎬 Disney Pairing</div>
        <div style="font-size: 1.05rem; color: #fff; font-weight: 600; margin-top: 2px;">${item.moviePairing}</div>
      </div>

      <p style="font-size: 0.92rem; margin-bottom: 12px;">${item.theologicalConnection}</p>

      <div style="border-top: 1px solid var(--border-subtle); padding-top: 12px; margin-top: auto; display: grid; gap: 8px; font-size: 0.88rem;">
        <div><strong style="color: var(--gold-light);">👨‍👩‍👧‍👦 Family Activity:</strong> ${item.familyActivity}</div>
        <div><strong style="color: var(--gold-light);">🍪 Feast Day Treat:</strong> ${item.feastTreatRecipe}</div>
      </div>
    </div>
  `).join('');
}

function setupLiturgicalFilters() {
  const chips = document.querySelectorAll('#liturgical-filter-chips .filter-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const season = chip.getAttribute('data-season') || 'all';
      renderLiturgicalPairings(season);
    });
  });
}
