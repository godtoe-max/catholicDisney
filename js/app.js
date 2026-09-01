// CatholicDisney.com Application Controller
import { initPilgrimageHub } from './components/pilgrimage-hub.js';
import { initVirtueHub } from './components/virtue-hub.js';
import { initLiturgicalHub } from './components/liturgical-hub.js';
import { initItineraryPlanner } from './components/itinerary-planner.js';
import { initCreatorsHub } from './components/creators-hub.js';

document.addEventListener('DOMContentLoaded', () => {
  initTabNavigation();
  initPilgrimageHub();
  initVirtueHub();
  initLiturgicalHub();
  initItineraryPlanner();
  initCreatorsHub();
  initModalListeners();
  initLightbox();
});

// Tab Switching & Deep Linking
function initTabNavigation() {
  const tabButtons = document.querySelectorAll('.nav-tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  function switchTab(targetTabId) {
    tabButtons.forEach(btn => {
      const isTarget = btn.getAttribute('data-tab') === targetTabId;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    tabContents.forEach(content => {
      const isTarget = content.id === targetTabId;
      content.classList.toggle('active', isTarget);
    });

    if (history.replaceState) {
      history.replaceState(null, null, `#${targetTabId}`);
    }
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      if (target) switchTab(target);
    });
  });

  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    switchTab(hash);
  }

  window.navigateToTab = (tabId) => {
    switchTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
}

// Global modal backdrop close & escape key
function initModalListeners() {
  const modals = document.querySelectorAll('.modal-backdrop');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(m => m.classList.remove('open'));
    }
  });
}

// Lightbox for viewing artwork in full resolution
function initLightbox() {
  window.openImageLightbox = (src, title) => {
    const modalBackdrop = document.getElementById('virtue-modal');
    const modalContent = document.getElementById('virtue-modal-content');
    if (!modalBackdrop || !modalContent) return;

    modalContent.innerHTML = `
      <div class="lightbox-img-wrapper">
        <h3 style="color: var(--text-primary); margin-bottom: 14px;">${title}</h3>
        <img src="${src}" alt="${title}" class="lightbox-img">
        <div style="margin-top: 18px; text-align: center;">
          <button class="btn btn-primary" onclick="window.closeVirtueModal()">Close Image</button>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('open');
  };
}
