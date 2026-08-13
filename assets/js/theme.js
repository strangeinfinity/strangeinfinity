/**
 * StrangeInfinity — Theme Manager
 * assets/js/theme.js
 *
 * Handles dark/light theme toggling with localStorage persistence.
 */

const ThemeManager = (() => {
  const STORAGE_KEY = 'si-theme';
  const DARK  = 'dark';
  const LIGHT = 'light';

  // ── Icons ──
  const ICONS = { dark: '<i class="fa-solid fa-moon"></i>', light: '<i class="fa-solid fa-sun"></i>' };

  let currentTheme = LIGHT;

  /** Apply theme to DOM */
  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Update toggle button icon
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.setAttribute('aria-label', `Switch to ${theme === DARK ? LIGHT : DARK} mode`);
      btn.innerHTML = theme === DARK ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    }

    // Update theme widget
    const icon = document.getElementById('theme-status-icon');
    const text = document.getElementById('theme-status-text');
    if (icon) icon.innerHTML = theme === DARK ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    if (text) text.textContent = theme === DARK ? 'Dark Mode Active' : 'Light Mode Active';

    // Dispatch event so other modules can react
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  }

  /** Toggle between dark and light */
  function toggle() {
    applyTheme(currentTheme === DARK ? LIGHT : DARK);
  }

  /** Initialize: read saved preference or default to light */
  function init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === DARK || saved === LIGHT) {
      applyTheme(saved);
    } else {
      applyTheme(LIGHT);
    }

    // Wire up toggle button
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggle);

    // Listen for OS preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? DARK : LIGHT);
      }
    });
  }

  return { init, toggle, get current() { return currentTheme; } };
})();
