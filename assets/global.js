// global.js — Tema Imak

// Sticky header
(function () {
  const header = document.getElementById('shopify-section-header');
  if (!header) return;

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY || currentScrollY < 80) {
      header.style.transform = 'translateY(0)';
    } else {
      header.style.transform = 'translateY(-100%)';
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
})();
