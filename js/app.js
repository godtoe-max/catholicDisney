// CatholicDisney.com Application Controller
import { initPilgrimageHub } from './components/pilgrimage-hub.js';
import { initVirtueHub } from './components/virtue-hub.js';
import { initLiturgicalHub } from './components/liturgical-hub.js';
import { initItineraryPlanner } from './components/itinerary-planner.js';
import { initCreatorsHub } from './components/creators-hub.js';
import { initWallpapersHub } from './components/wallpapers-hub.js';

document.addEventListener('DOMContentLoaded', () => {
  initTabNavigation();
  initPilgrimageHub();
  initVirtueHub();
  initLiturgicalHub();
  initItineraryPlanner();
  initCreatorsHub();
  initWallpapersHub();
  initTipsForm();
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

// Netlify Community Tips Form Handler
function initTipsForm() {
  const form = document.getElementById('community-tips-form');
  const successBanner = document.getElementById('tip-form-success');
  const submitBtn = document.getElementById('tip-submit-btn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';
    }

    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then((response) => {
        if (response.ok || response.status === 200 || response.status === 302) {
          if (successBanner) {
            successBanner.style.display = 'block';
            successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          form.reset();
        } else {
          form.submit();
        }
      })
      .catch((error) => {
        console.error('Netlify form submission error:', error);
        form.submit();
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = '✨ Submit Catholic Tip';
        }
      });
  });
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

// Lightbox for viewing artwork & wallpapers in full resolution
function initLightbox() {
  window.openImageLightbox = (src, title) => {
    const modalBackdrop = document.getElementById('virtue-modal');
    const modalContent = document.getElementById('virtue-modal-content');
    if (!modalBackdrop || !modalContent) return;

    modalContent.innerHTML = `
      <div class="lightbox-img-wrapper">
        <h3 style="color: var(--text-primary); margin-bottom: 12px; font-size: 1.35rem;">${title}</h3>
        <img src="${src}" alt="${title}" class="lightbox-img">
        <div style="margin-top: 16px; display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
          <a href="${src}" download class="btn btn-sun" style="font-size: 0.9rem;">
            📥 Download Wallpaper
          </a>
          <button class="btn btn-outline" onclick="window.closeVirtueModal()" style="font-size: 0.9rem;">
            Close
          </button>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('open');
  };
}
