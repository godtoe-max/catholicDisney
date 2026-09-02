// CatholicDisney.com Application Controller
import { initPilgrimageHub } from './components/pilgrimage-hub.js?v=20260902L';
import { initQueueRosary } from './components/queue-rosary.js?v=20260902L';
import { initQueueCompanions } from './components/queue-companions.js?v=20260902L';
import { initWaitTimesHub } from './components/wait-times-hub.js?v=20260902L';
import { initLiveWaitTimes } from './components/live-wait-times.js?v=20260902L';
import { initVirtueHub } from './components/virtue-hub.js?v=20260902L';
import { initLiturgicalHub } from './components/liturgical-hub.js?v=20260902L';
import { initItineraryPlanner } from './components/itinerary-planner.js?v=20260902L';
import { initCreatorsHub } from './components/creators-hub.js?v=20260902L';
import { initWallpapersHub } from './components/wallpapers-hub.js?v=20260902L';

document.addEventListener('DOMContentLoaded', () => {
  initTabNavigation();
  initHamburgerMenu();
  initPilgrimageHub();
  initQueueRosary();
  initQueueCompanions();
  initWaitTimesHub();
  initLiveWaitTimes();
  initVirtueHub();
  initLiturgicalHub();
  initItineraryPlanner();
  initCreatorsHub();
  initWallpapersHub();
  initTipsForm();
  initModalListeners();
  initLightbox();
});

// Mode Switcher between Live Waits and Crowd Simulator
window.switchWaitMode = (mode) => {
  const liveContainer = document.getElementById('live-wait-times-container');
  const simContainer = document.getElementById('wait-times-container');
  const liveBtn = document.getElementById('mode-live-waits-btn');
  const simBtn = document.getElementById('mode-simulator-btn');

  if (mode === 'live') {
    if (liveContainer) liveContainer.style.display = 'block';
    if (simContainer) simContainer.style.display = 'none';
    if (liveBtn) { liveBtn.className = 'btn btn-primary'; }
    if (simBtn) { simBtn.className = 'btn btn-outline'; }
  } else {
    if (liveContainer) liveContainer.style.display = 'none';
    if (simContainer) simContainer.style.display = 'block';
    if (liveBtn) { liveBtn.className = 'btn btn-outline'; }
    if (simBtn) { simBtn.className = 'btn btn-primary'; }
  }
};

// Hero Icon Artwork Switcher
window.switchHeroIcon = (type) => {
  const img = document.getElementById('hero-icon-display');
  if (!img) return;
  if (type === 'queen') {
    img.src = 'assets/images/queen_of_universe_icon.jpg';
    img.alt = 'Mary Queen of the Universe Altarpiece with Saint Michael and Saint Gabriel';
  } else {
    img.src = 'assets/images/holy_family_icon.jpg';
    img.alt = 'The Holy Family in Byzantine Gold Leaf Iconography with Fairytale Castle';
  }
};

// Tab Switching & Deep Linking
function initTabNavigation() {
  const navLinks = document.querySelectorAll('.desktop-nav-link, .drawer-nav-item');
  const tabContents = document.querySelectorAll('.tab-content');

  function switchTab(targetTabId) {
    navLinks.forEach(link => {
      const isTarget = link.getAttribute('data-tab') === targetTabId;
      link.classList.toggle('active', isTarget);
      link.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    tabContents.forEach(content => {
      const isTarget = content.id === targetTabId;
      content.classList.toggle('active', isTarget);
    });

    if (history.replaceState) {
      history.replaceState(null, null, `#${targetTabId}`);
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.getAttribute('data-tab');
      if (target) {
        switchTab(target);
        window.closeNavDrawer();
      }
    });
  });

  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    switchTab(hash);
  }

  window.navigateToTab = (tabId) => {
    switchTab(tabId);
    window.closeNavDrawer();
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  window.scrollToTipSection = () => {
    window.closeNavDrawer();
    setTimeout(() => {
      const formSection = document.getElementById('submit-tip-section');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };
}

// Hamburger Menu & Navigation Drawer Controller
function initHamburgerMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const drawerBackdrop = document.getElementById('nav-drawer-backdrop');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawerTipBtn = document.getElementById('drawer-submit-tip-btn');

  function openDrawer() {
    if (drawerBackdrop) {
      drawerBackdrop.classList.add('open');
      drawerBackdrop.setAttribute('aria-hidden', 'false');
    }
    if (hamburgerBtn) {
      hamburgerBtn.classList.add('active');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawerBackdrop) {
      drawerBackdrop.classList.remove('open');
      drawerBackdrop.setAttribute('aria-hidden', 'true');
    }
    if (hamburgerBtn) {
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  }

  window.openNavDrawer = openDrawer;
  window.closeNavDrawer = closeDrawer;

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      if (drawerBackdrop && drawerBackdrop.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', (e) => {
      if (e.target === drawerBackdrop) {
        closeDrawer();
      }
    });
  }

  if (drawerTipBtn) {
    drawerTipBtn.addEventListener('click', () => {
      window.navigateToTab('creators-tab');
      window.scrollToTipSection();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawerBackdrop && drawerBackdrop.classList.contains('open')) {
      closeDrawer();
    }
  });
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
          submitBtn.textContent = 'Send';
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
