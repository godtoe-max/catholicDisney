// Virtue in the Vault: Theological & Movie Breakdown Component
import { virtueVaultData } from '../data/virtue-vault.js';

export function initVirtueHub() {
  renderVirtueCards('all', '');
  setupVirtueFilters();
}

export function renderVirtueCards(filter = 'all', searchQuery = '') {
  const container = document.getElementById('virtue-cards-grid');
  if (!container) return;

  const query = searchQuery.toLowerCase().trim();

  const filtered = virtueVaultData.filter(item => {
    const matchesSearch = !query ||
      item.title.toLowerCase().includes(query) ||
      item.virtue.toLowerCase().includes(query) ||
      item.subVirtues.some(v => v.toLowerCase().includes(query)) ||
      item.synopsis.toLowerCase().includes(query);

    if (!matchesSearch) return false;

    if (filter === 'all') return true;
    return item.virtue.toLowerCase().includes(filter.toLowerCase()) ||
           item.subVirtues.some(v => v.toLowerCase().includes(filter.toLowerCase()));
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p style="font-size: 1.2rem;">No films found matching this virtue filter or search.</p>
        <button class="btn btn-outline" onclick="window.resetVirtueFilters()">View All Films</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="virtue-card">
      <div class="virtue-card-body">
        <span class="virtue-primary-badge">✦ Primary Virtue: ${item.virtue}</span>
        <h4 class="virtue-movie-title">${item.title}</h4>
        <div class="virtue-movie-year">${item.year} • ${item.studio}</div>

        <div class="virtue-quote-box">
          "${item.quote}"
        </div>

        <p style="font-size: 0.93rem; color: var(--text-secondary); margin-bottom: 14px;">${item.synopsis}</p>

        <div class="virtue-subtags">
          ${item.subVirtues.map(sv => `<span class="virtue-tag">#${sv}</span>`).join('')}
        </div>

        <div style="display: flex; gap: 10px; margin-top: auto; padding-top: 14px; border-top: 1px solid var(--border-subtle);">
          <button class="btn btn-gold" style="font-size: 0.85rem; padding: 8px 16px; flex: 1;" onclick="window.openVirtueModal('${item.id}', 'theology')">
            Theological Analysis
          </button>
          <button class="btn btn-outline" style="font-size: 0.85rem; padding: 8px 14px;" onclick="window.openVirtueModal('${item.id}', 'discussion')">
            Family Guide 🖨️
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function setupVirtueFilters() {
  const chips = document.querySelectorAll('#virtue-filter-chips .filter-chip');
  const searchInput = document.getElementById('virtue-search-input');
  let currentFilter = 'all';

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = chip.getAttribute('data-virtue') || 'all';
      renderVirtueCards(currentFilter, searchInput ? searchInput.value : '');
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderVirtueCards(currentFilter, e.target.value);
    });
  }

  window.resetVirtueFilters = () => {
    if (searchInput) searchInput.value = '';
    chips.forEach(c => c.classList.remove('active'));
    if (chips[0]) chips[0].classList.add('active');
    renderVirtueCards('all', '');
  };

  // Modal handler
  window.openVirtueModal = (movieId, initialView = 'theology') => {
    const movie = virtueVaultData.find(m => m.id === movieId);
    if (!movie) return;

    const modalBackdrop = document.getElementById('virtue-modal');
    const modalContent = document.getElementById('virtue-modal-content');
    if (!modalBackdrop || !modalContent) return;

    modalContent.innerHTML = `
      <div style="margin-bottom: 24px;">
        <span class="virtue-primary-badge">Virtue in the Vault: ${movie.virtue}</span>
        <h2 style="color: var(--gold-light); margin: 8px 0 4px; font-size: 2rem;">${movie.title} (${movie.year})</h2>
        <div style="color: var(--marian-light); font-size: 0.95rem;">${movie.studio}</div>
      </div>

      <div style="background: rgba(4, 9, 20, 0.6); padding: 16px; border-radius: var(--radius-md); border-left: 3px solid var(--gold-primary); margin-bottom: 24px;">
        <div style="font-size: 0.85rem; color: var(--gold-light); font-weight: 700; text-transform: uppercase;">Biblical & Catechetical Foundations</div>
        <div style="color: #fff; font-size: 0.95rem; margin-top: 4px;"><strong>Scripture:</strong> ${movie.scripturePassage}</div>
        <div style="color: #fff; font-size: 0.95rem; margin-top: 4px;"><strong>Catechism:</strong> ${movie.catechismRef}</div>
      </div>

      <div style="margin-bottom: 30px; line-height: 1.7;" class="theological-body">
        ${movie.theologicalBreakdown}
      </div>

      <div style="background: var(--bg-card); border: 1px solid var(--border-gold-glow); padding: 24px; border-radius: var(--radius-md); margin-top: 24px;">
        <h4 style="color: var(--gold-light); margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between;">
          <span>👨‍👩‍👧‍👦 Family Movie Night Discussion Guide</span>
          <button class="btn btn-outline" style="font-size: 0.8rem; padding: 4px 12px;" onclick="window.print()">Print Guide 🖨️</button>
        </h4>
        <ol style="margin-left: 20px; display: grid; gap: 10px; color: var(--text-primary); font-size: 0.98rem;">
          ${movie.familyDiscussionQuestions.map(q => `<li style="padding-left: 6px;">${q}</li>`).join('')}
        </ol>
      </div>

      <div style="text-align: right; margin-top: 24px;">
        <button class="btn btn-gold" onclick="window.closeVirtueModal()">Close</button>
      </div>
    `;

    modalBackdrop.classList.add('open');
  };

  window.closeVirtueModal = () => {
    const modalBackdrop = document.getElementById('virtue-modal');
    if (modalBackdrop) modalBackdrop.classList.remove('open');
  };
}
