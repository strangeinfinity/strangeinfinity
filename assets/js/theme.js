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

    // Also initialize copy buttons across page
    if (typeof CopyCodeManager !== 'undefined' && CopyCodeManager.init) {
      CopyCodeManager.init();
    }
  }

  return { init, toggle, get current() { return currentTheme; } };
})();

/**
 * StrangeInfinity — Universal Copy Code Manager
 * Auto-detects code & command blocks and injects interactive copy buttons.
 */
const CopyCodeManager = (() => {
  const COPY_ICON = '<i class="fa-regular fa-copy" aria-hidden="true"></i>';
  const CHECK_ICON = '<i class="fa-solid fa-check" aria-hidden="true"></i>';

  /** Detect language and icon from code text */
  function detectLanguage(codeText, preEl) {
    const explicitLang = preEl.getAttribute('data-lang');
    if (explicitLang) {
      const lower = explicitLang.toLowerCase();
      let icon = 'fa-solid fa-code';
      if (lower.includes('bash') || lower.includes('sh') || lower.includes('terminal')) icon = 'fa-solid fa-terminal';
      else if (lower.includes('python')) icon = 'fa-brands fa-python';
      else if (lower.includes('js') || lower.includes('javascript')) icon = 'fa-brands fa-js';
      else if (lower.includes('css')) icon = 'fa-brands fa-css3-alt';
      else if (lower.includes('json')) icon = 'fa-solid fa-code';
      else if (lower.includes('arch') || lower.includes('diagram')) icon = 'fa-solid fa-sitemap';
      return { name: explicitLang.toUpperCase(), icon, cls: `lang-${lower}` };
    }

    const trimmed = codeText.trim();

    // Diagram / Architecture ASCII
    if (trimmed.includes('│') || trimmed.includes('▼') || trimmed.includes('──>') || trimmed.includes('┌') || trimmed.includes('└')) {
      return { name: 'ARCHITECTURE', icon: 'fa-solid fa-sitemap', cls: 'lang-architecture' };
    }

    // Config
    if (trimmed.includes('keepalive_timeout') || trimmed.includes('nginx.conf')) {
      return { name: 'CONFIG', icon: 'fa-solid fa-gear', cls: 'lang-config' };
    }

    // CSS
    if (trimmed.includes(':root') || trimmed.includes('@media') || /^[.#a-zA-Z0-9_-]+\s*\{/m.test(trimmed)) {
      return { name: 'CSS', icon: 'fa-brands fa-css3-alt', cls: 'lang-css' };
    }

    // JSON
    if ((trimmed.startsWith('{') && trimmed.endsWith('}')) || (trimmed.startsWith('[') && trimmed.endsWith(']'))) {
      if (trimmed.includes('"') && trimmed.includes(':')) {
        return { name: 'JSON', icon: 'fa-solid fa-code', cls: 'lang-json' };
      }
    }

    // Bash / Shell / Terminal Commands
    if (
      /^(#!\/bin\/bash|#!\/bin\/sh|git |sudo |pip |pip3 |npm |yarn |pnpm |apt |apt-get |dnf |rpm |chmod |export |echo |cat |curl |wget |source |python3 -m venv|\.\/|open |cd )/m.test(trimmed) ||
      /^(# ---|# 1\.|# 2\.|# 3\.|# Clone|# Install|# Launch|# Setup|# Run|# Temporary|# Streaming|# Precision|# Debian|# Fedora)/m.test(trimmed)
    ) {
      return { name: 'BASH', icon: 'fa-solid fa-terminal', cls: 'lang-bash' };
    }

    // Python
    if (
      /^(import |from |def |class |python|python3 )/m.test(trimmed) ||
      trimmed.includes('PyQt6') || trimmed.includes('QThread') || trimmed.includes('numpy') ||
      trimmed.includes('pygame') || trimmed.includes('smoothed_x =') || trimmed.includes('Total_Score =')
    ) {
      return { name: 'PYTHON', icon: 'fa-brands fa-python', cls: 'lang-python' };
    }

    // JavaScript
    if (
      /^(function |const |let |var |import .* from |export default|\/\/)/m.test(trimmed) ||
      trimmed.includes('safeRound') || trimmed.includes('gameLoop') || trimmed.includes('Math.round') ||
      trimmed.includes('addEventListener') || trimmed.includes('requestAnimationFrame')
    ) {
      return { name: 'JAVASCRIPT', icon: 'fa-brands fa-js', cls: 'lang-javascript' };
    }

    return { name: 'CODE', icon: 'fa-solid fa-code', cls: 'lang-code' };
  }

  /** Copy text to clipboard with fallback */
  async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        // Continue to fallback
      }
    }

    // Fallback using temporary textarea
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      textArea.setAttribute('readonly', '');
      textArea.setAttribute('aria-hidden', 'true');
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      textArea.remove();
      return successful;
    } catch (e) {
      return false;
    }
  }

  /** Process a single pre element to add header & copy button */
  function processPreElement(pre) {
    if (!pre || pre.dataset.noCopy === 'true') return;
    if (pre.closest('.code-block-wrapper')) return; // already wrapped
    if (pre.querySelector('.code-copy-btn')) return; // already has button

    // Extract text
    const codeElem = pre.querySelector('code');
    const rawText = (codeElem || pre).innerText || (codeElem || pre).textContent || '';
    if (!rawText.trim()) return;

    const langInfo = detectLanguage(rawText, pre);

    // Create wrapper container
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';

    // Preserve any reveal classes or IDs if specified on pre
    if (pre.classList.contains('reveal')) {
      wrapper.classList.add('reveal');
      pre.classList.remove('reveal');
    }

    // Create header bar
    const header = document.createElement('div');
    header.className = 'code-block-header';

    const langBadge = document.createElement('div');
    langBadge.className = `code-block-lang ${langInfo.cls}`;
    langBadge.innerHTML = `<i class="${langInfo.icon}" aria-hidden="true"></i><span>${langInfo.name}</span>`;

    const copyBtn = document.createElement('button');
    copyBtn.className = 'code-copy-btn';
    copyBtn.type = 'button';
    copyBtn.setAttribute('aria-label', `Copy ${langInfo.name} snippet to clipboard`);
    copyBtn.setAttribute('title', 'Copy to clipboard');
    copyBtn.innerHTML = `${COPY_ICON}<span class="copy-text">Copy</span>`;

    let resetTimer = null;
    copyBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const textToCopy = (pre.querySelector('code') || pre).innerText || '';
      const cleanText = textToCopy.replace(/\r\n/g, '\n').replace(/\n+$/, '');
      const success = await copyToClipboard(cleanText);

      if (success) {
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = `${CHECK_ICON}<span class="copy-text">Copied!</span>`;
        copyBtn.setAttribute('aria-label', 'Copied to clipboard!');

        if (resetTimer) clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyBtn.innerHTML = `${COPY_ICON}<span class="copy-text">Copy</span>`;
          copyBtn.setAttribute('aria-label', `Copy ${langInfo.name} snippet to clipboard`);
        }, 2000);
      }
    });

    header.appendChild(langBadge);
    header.appendChild(copyBtn);

    // Wrap pre cleanly in the DOM
    const parent = pre.parentNode;
    if (parent) {
      parent.insertBefore(wrapper, pre);
      wrapper.appendChild(header);
      wrapper.appendChild(pre);
    }
  }

  /** Initialize copy buttons on all pre elements and inline copy badges */
  function init(root = document) {
    if (!root || !root.querySelectorAll) return;

    const preElements = root.querySelectorAll('pre');
    preElements.forEach(processPreElement);

    // Handle inline command copy buttons
    root.querySelectorAll('.inline-cmd-copy').forEach(el => {
      if (el.dataset.hasCopyListener) return;
      el.dataset.hasCopyListener = 'true';
      el.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const text = el.dataset.copyText || el.innerText || '';
        const success = await copyToClipboard(text.trim());
        if (success) {
          el.classList.add('copied');
          const originalHTML = el.innerHTML;
          el.innerHTML = `${CHECK_ICON} Copied!`;
          setTimeout(() => {
            el.classList.remove('copied');
            el.innerHTML = originalHTML;
          }, 2000);
        }
      });
    });
  }

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init());
  } else {
    init();
  }

  // Setup MutationObserver to automatically handle dynamically added code blocks
  if (typeof MutationObserver !== 'undefined' && document.body) {
    const observer = new MutationObserver(mutations => {
      let hasNewPre = false;
      for (const m of mutations) {
        if (m.addedNodes.length) {
          for (const node of m.addedNodes) {
            if (node.nodeType === 1) {
              if (node.tagName === 'PRE' || (node.querySelector && node.querySelector('pre'))) {
                hasNewPre = true;
                break;
              }
            }
          }
        }
        if (hasNewPre) break;
      }
      if (hasNewPre) init();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  return { init, copyToClipboard, processPreElement };
})();

// Expose globally
window.ThemeManager = ThemeManager;
window.CopyCodeManager = CopyCodeManager;

