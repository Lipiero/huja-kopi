/**
 * HUJA KOPI — Application Logic
 * Handles menu rendering, category filtering, WhatsApp URL generation,
 * and navbar scroll behavior.
 *
 * Dependencies: data.js (must be loaded before this file)
 */

// ============================================
// WhatsApp URL Generator
// ============================================

/**
 * Generate a WhatsApp deep-link with a pre-filled order message.
 * @param {Object} item - A menu item object from menuItems.
 * @returns {string} Full wa.me URL.
 */
function generateWhatsAppURL(item) {
  const text = `Halo HUJA KOPI, saya mau pesan ${item.code} - ${item.name} (${item.priceDisplay})`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// WhatsApp SVG icon path (reused in every card)
const WA_ICON_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';

// ============================================
// Menu Card Renderer
// ============================================

/**
 * Create a single menu card DOM element.
 * @param {Object} item - A menu item object from menuItems.
 * @returns {HTMLElement} The card wrapper element.
 */
function createMenuCard(item) {
  const card = document.createElement('div');
  card.className = 'menu-card';
  card.setAttribute('data-category', item.category);

  const bestSellerBadge = item.recommended
    ? `<div class="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 bg-ochre/95 backdrop-blur-sm rounded-lg shadow-md">
         <i data-lucide="thumbs-up" class="w-3.5 h-3.5 text-white"></i>
         <span class="text-[10px] font-bold text-white uppercase tracking-wide">Best Seller</span>
       </div>`
    : '';

  card.innerHTML = `
    <div class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-cream-dark/20 hover:border-cobalt/20 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <!-- Image -->
      <div class="relative aspect-square overflow-hidden bg-ivory">
        <img src="${item.image}" alt="${item.name}"
             class="w-full h-full object-cover img-zoom"
             loading="lazy" />
        ${bestSellerBadge}
        <!-- Price Badge -->
        <div class="absolute top-3 right-3 w-12 h-12 bg-cobalt rounded-full flex items-center justify-center shadow-lg">
          <span class="text-white font-extrabold text-sm">${item.priceDisplay}</span>
        </div>
      </div>

      <!-- Info -->
      <div class="p-4 flex flex-col flex-grow">
        <h3 class="font-extrabold text-espresso text-base tracking-tight">${item.code}</h3>
        <p class="text-slate_warm text-sm mt-0.5 mb-4">${item.name}</p>

        <!-- Order Button -->
        <a href="${generateWhatsAppURL(item)}" target="_blank" rel="noopener"
           class="mt-auto flex items-center justify-center gap-2 w-full py-2.5 bg-cobalt/5 hover:bg-cobalt text-cobalt hover:text-white font-semibold text-sm rounded-xl transition-all duration-300">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="${WA_ICON_PATH}"/></svg>
          Pesan via WhatsApp
        </a>
      </div>
    </div>
  `;

  return card;
}

// ============================================
// Render Menu Grid
// ============================================

/**
 * Render (or re-render) the menu grid based on the selected category.
 * @param {string} category - 'all', 'cup', or 'liter'.
 */
function renderMenu(category = 'all') {
  const grid = document.getElementById('menu-grid');
  const emptyState = document.getElementById('empty-state');
  grid.innerHTML = '';

  const filtered =
    category === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');
    filtered.forEach((item) => grid.appendChild(createMenuCard(item)));
    // Re-initialize Lucide icons for dynamically injected elements
    lucide.createIcons();
  }
}

// ============================================
// Category Filter Tabs
// ============================================

function initCategoryTabs() {
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      // Reset all tabs
      document.querySelectorAll('.tab-btn').forEach((b) => {
        b.classList.remove('tab-active');
        b.classList.add('bg-white', 'text-slate_warm', 'shadow-sm');
        b.setAttribute('aria-selected', 'false');
      });

      // Activate clicked tab
      btn.classList.add('tab-active');
      btn.classList.remove('bg-white', 'text-slate_warm', 'shadow-sm');
      btn.setAttribute('aria-selected', 'true');

      // Re-render cards
      renderMenu(btn.getAttribute('data-category'));
    });
  });
}

// ============================================
// Navbar Shadow on Scroll
// ============================================

function initNavbarShadow() {
  const navbar = document.getElementById('navbar');
  window.addEventListener(
    'scroll',
    () => {
      navbar.classList.toggle('shadow-md', window.scrollY > 20);
    },
    { passive: true }
  );
}

// ============================================
// Bootstrap
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');
  initCategoryTabs();
  initNavbarShadow();
  lucide.createIcons();
});
