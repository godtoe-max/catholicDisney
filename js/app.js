// CatholicDisney.com Application Controller
import { initPilgrimageHub } from './components/pilgrimage-hub.js';
import { initVirtueHub } from './components/virtue-hub.js';
import { initLiturgicalHub } from './components/liturgical-hub.js';
import { initItineraryPlanner } from './components/itinerary-planner.js';
import { initCreatorsHub } from './components/creators-hub.js';

document.addEventListener('DOMContentLoaded', () => {
  initStarlightParticles();
  initTabNavigation();
  initPilgrimageHub();
  initVirtueHub();
  initLiturgicalHub();
  initItineraryPlanner();
  initCreatorsHub();
  initModalListeners();
});

// Subtle Twinkling Starlight Background Generator
function initStarlightParticles() {
  const container = document.getElementById('starlight-container');
  if (!container) return;

  const starCount = 60;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const size = Math.random() * 2.5 + 1;
    const duration = Math.random() * 3 + 2.5;
    const delay = Math.random() * 5;

    star.style.top = `${top}%`;
    star.style.left = `${left}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.setProperty('--duration', `${duration}s`);
    star.style.setProperty('--delay', `${delay}s`);

    fragment.appendChild(star);
  }

  container.appendChild(fragment);
}

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

    // Update URL hash without jumping
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

  // Check URL hash on load
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    switchTab(hash);
  }

  // Global helper for CTA buttons
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
