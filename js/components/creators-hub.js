// Catholic Animation & Creative Arts Showcase Component
import { creatorsData, disneylandCreatorsData } from '../data/creators.js?v=20260902_v2';
import { getActiveResortId } from './resort-switcher.js?v=20260902_v2';

export function initCreatorsHub() {
  renderCreatorsCards();
  renderCommunityCta();

  window.addEventListener('catholic-resort-changed', () => {
    renderCreatorsCards();
    renderCommunityCta();
  });
}

export function renderCreatorsCards() {
  const container = document.getElementById('creators-cards-grid');
  if (!container) return;

  const isDlr = getActiveResortId() === 'dlr';
  const data = isDlr ? disneylandCreatorsData : creatorsData;

  container.innerHTML = data.map(creator => `
    <div class="parish-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
        <span class="park-pill" style="background: rgba(212, 175, 55, 0.15); border-color: var(--border-gold-glow); color: var(--gold-light);">
          ${creator.category}
        </span>
        <span style="font-size: 0.8rem; color: #52b788; font-weight: 700;">● ${creator.status}</span>
      </div>

      <h4 style="font-size: 1.4rem; color: #fff; margin-bottom: 4px;">${creator.name}</h4>
      <div style="font-size: 0.88rem; color: var(--marian-light); margin-bottom: 12px;">${creator.founder}</div>

      <div style="background: rgba(4, 9, 20, 0.6); padding: 12px 16px; border-radius: var(--radius-sm); border-left: 3px solid var(--gold-primary); margin-bottom: 14px;">
        <div style="font-size: 0.8rem; color: var(--gold-light); font-weight: 700; text-transform: uppercase;">Featured Project / Activity</div>
        <div style="font-size: 1rem; color: #fff; font-weight: 600; margin-top: 2px;">${creator.featuredProject}</div>
      </div>

      <p style="font-size: 0.92rem; margin-bottom: 14px;">${creator.mission}</p>
      <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 16px;">${creator.description}</p>

      <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: auto; padding-top: 12px; border-top: 1px solid var(--border-subtle);">
        ${creator.tags.map(t => `<span class="virtue-tag">#${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

export function renderCommunityCta() {
  const ctaContainer = document.querySelector('.community-cta-box');
  if (!ctaContainer) return;

  const isDlr = getActiveResortId() === 'dlr';
  ctaContainer.innerHTML = isDlr ? `
    <div>
      <span class="section-tag" style="background: #fef3c7; color: #92400e; margin-bottom: 8px;">California Community</span>
      <h3 style="color: var(--text-primary); font-size: 1.6rem; margin: 4px 0 6px;">Living in Southern California or Visiting Disneyland?</h3>
      <p style="margin-bottom: 0; font-size: 0.95rem;">
        Join local Catholic Disney family meetups, morning Mass at Christ Cathedral & St. Boniface Anaheim, Disneyland Catholic architectural walks, and joyful fellowship in the Golden State.
      </p>
    </div>
    <a href="mailto:info@catholicdisney.com?subject=Join%20California%20Catholic%20Disney%20Fellowship" class="btn btn-primary" style="white-space: nowrap;">
      Connect With Us ✉️
    </a>
  ` : `
    <div>
      <span class="section-tag" style="background: #fef3c7; color: #92400e; margin-bottom: 8px;">Florida Community</span>
      <h3 style="color: var(--text-primary); font-size: 1.6rem; margin: 4px 0 6px;">Moving to Florida or Visiting Orlando?</h3>
      <p style="margin-bottom: 0; font-size: 0.95rem;">
        Join local Catholic Disney family meetups, morning Mass at the Basilica of Mary Queen of the Universe, Epcot Catholic cultural walks, and joyful fellowship with other Catholic Disney enthusiasts living in the Sunshine State.
      </p>
    </div>
    <a href="mailto:info@catholicdisney.com?subject=Join%20Florida%20Catholic%20Disney%20Fellowship" class="btn btn-primary" style="white-space: nowrap;">
      Connect With Us ✉️
    </a>
  `;
}
