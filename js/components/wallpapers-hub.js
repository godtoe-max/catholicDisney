// Catholic Disney High-Resolution Wallpapers Hub Component
import { wallpapersData } from '../data/wallpapers.js';

export function initWallpapersHub() {
  renderWallpapers('all');
  setupWallpaperFilters();
}

export function renderWallpapers(deviceFilter = 'all') {
  const container = document.getElementById('wallpapers-grid');
  if (!container) return;

  const filtered = deviceFilter === 'all'
    ? wallpapersData
    : wallpapersData.filter(w => w.device === deviceFilter);

  container.innerHTML = filtered.map(item => {
    const isPhone = item.device === 'phone';

    return `
      <div class="wallpaper-card ${isPhone ? 'wallpaper-card-phone' : ''}">
        <div class="wallpaper-preview-wrapper ${isPhone ? 'wallpaper-phone-frame' : 'wallpaper-landscape-frame'}">
          <img src="${item.src}" alt="${item.title}" class="wallpaper-thumb-img" loading="lazy">
          <div class="wallpaper-overlay-badge">
            <span class="park-pill" style="background: rgba(255, 255, 255, 0.92); color: var(--text-primary); font-weight: 800;">
              ${item.aspectRatioLabel}
            </span>
          </div>
          <button class="wallpaper-zoom-trigger" onclick="window.openImageLightbox('${item.src}', '${item.title}')" title="Preview Full Size">
            🔍
          </button>
        </div>

        <div class="wallpaper-info-body">
          <h4 class="wallpaper-title">${item.title}</h4>
          <div class="wallpaper-resolution">📐 ${item.resolution} • ${item.category}</div>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 16px;">${item.description}</p>

          <div style="display: flex; gap: 8px; margin-top: auto;">
            <a href="${item.src}" download="${item.downloadName}" class="btn btn-sun" style="flex: 1; font-size: 0.9rem; padding: 10px 16px;">
              📥 Download Free
            </a>
            <button class="btn btn-outline" style="font-size: 0.9rem; padding: 10px 14px;" onclick="window.openImageLightbox('${item.src}', '${item.title}')">
              Preview
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function setupWallpaperFilters() {
  const chips = document.querySelectorAll('#wallpaper-filter-chips .filter-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const device = chip.getAttribute('data-device') || 'all';
      renderWallpapers(device);
    });
  });
}
