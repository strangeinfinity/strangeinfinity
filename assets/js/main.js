/**
 * StrangeInfinity — Main Application Controller
 * assets/js/main.js
 *
 * Orchestrates all site features:
 *   • Loading screen
 *   • Custom cursor
 *   • Sticky navbar & active section highlight
 *   • Scroll reveal
 *   • Stat counters
 *   • Filter tabs (projects)
 *   • Contribution graph
 *   • Live clock widget
 *   • Quote rotator widget
 *   • Radar canvas widget
 *   • Back-to-top button
 *   • Keyboard shortcuts
 *   • Ripple buttons
 *   • Card tilt
 *   • Easter egg
 *   • Hero typewriter
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. LOADING SCREEN ──────────────────────────────────────────── */
  const loadingScreen = document.getElementById('loading-screen');
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (loadingScreen) loadingScreen.classList.add('hidden');
    }, 1800);
  });
  // Fallback if load never fires
  setTimeout(() => {
    if (loadingScreen) loadingScreen.classList.add('hidden');
  }, 3000);


  /* ── 2. INIT MODULES ───────────────────────────────────────────── */
  ThemeManager.init();
  ParticleEngine.init();
  ProjectRenderer.init();




  /* ── 4. STICKY NAVBAR ──────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  let lastScrollY = 0;
  let scrollTicking = false;

  function onScroll() {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        if (navbar) {
          navbar.classList.toggle('scrolled', scrollY > 50);
        }

        if (scrollY > 300) {
          if (scrollY > lastScrollY + 8) {
            navbar.style.transform = 'translateY(-100%)';
          } else if (scrollY < lastScrollY - 8) {
            navbar.style.transform = 'translateY(0)';
          }
        } else {
          navbar.style.transform = 'translateY(0)';
        }
        lastScrollY = scrollY;

        const btt = document.getElementById('back-to-top');
        if (btt) btt.classList.toggle('visible', scrollY > 600);

        updateActiveNav();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });


  /* ── 5. ACTIVE NAV LINK ────────────────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  function updateActiveNav() {
    let current = '';
    const scrollMid = window.scrollY + window.innerHeight / 3;

    sections.forEach(sec => {
      if (sec.offsetTop <= scrollMid) current = sec.id;
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href').slice(1);
      link.classList.toggle('active', href === current);
    });
  }


  /* ── 6. MOBILE HAMBURGER MENU ──────────────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close menu on link click and highlight active item
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.querySelectorAll('a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }


  /* ── 7. SCROLL REVEAL ──────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);

        // Animate tech bars when tech section is revealed
        if (entry.target.classList.contains('tech-level-fill')) {
          entry.target.style.width = entry.target.dataset.fill;
        }
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  function observeReveal() {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      revealObserver.observe(el);
    });
  }
  observeReveal();

  // Re-observe after dynamic renders
  const mutObserver = new MutationObserver(observeReveal);
  mutObserver.observe(document.body, { childList: true, subtree: true });

  // Animate tech bars when section in view
  const techObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ProjectRenderer.animateTechBars();
        techObserver.disconnect();
      }
    });
  }, { threshold: 0.2 });
  const techSection = document.getElementById('technologies');
  if (techSection) techObserver.observe(techSection);


  /* ── 8. STAT COUNTERS ──────────────────────────────────────────── */
  function animateCounter(el, target, suffix, duration = 1800) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(start) + suffix;
    }, 16);
  }

  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const counters = entry.target.querySelectorAll('[data-count]');
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.count, 10);
        const suffix = counter.dataset.suffix || '';
        animateCounter(counter, target, suffix);
      });
      statsObserver.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  // Observe any section that has stat counters
  document.querySelectorAll('section, .stats-grid').forEach(el => {
    if (el.querySelector('[data-count]')) statsObserver.observe(el);
  });


  /* ── 9. PROJECT FILTER TABS ────────────────────────────────────── */
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      ProjectRenderer.renderProjects(tab.dataset.filter);
    });
  });


  /* ── 10. CONTRIBUTION GRAPH ─────────────────────────────────────── */
  function buildContribGraph() {
    const grid = document.getElementById('contrib-grid');
    if (!grid) return;

    const levels = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    let html = '';
    for (let i = 0; i < 52 * 7; i++) {
      const level = levels[Math.floor(Math.random() * levels.length)];
      html += `<div class="contrib-cell${level ? ' contrib-l' + level : ''}" title="Activity level ${level}"></div>`;
    }
    grid.innerHTML = html;
  }
  buildContribGraph();


  /* ── 11. LIVE CLOCK WIDGET ─────────────────────────────────────── */
  function updateClock() {
    const el   = document.getElementById('clock-display');
    const date = document.getElementById('clock-date');
    if (!el) return;

    const now  = new Date();
    const hh   = String(now.getHours()).padStart(2, '0');
    const mm   = String(now.getMinutes()).padStart(2, '0');
    const ss   = String(now.getSeconds()).padStart(2, '0');
    el.textContent = `${hh}:${mm}:${ss}`;

    if (date) {
      date.textContent = now.toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      });
    }
  }
  updateClock();
  setInterval(updateClock, 1000);


  /* ── 12. QUOTE ROTATOR WIDGET ──────────────────────────────────── */
  const quotes      = SI_CONFIG.quotes;
  let quoteIndex    = 0;

  function showQuote() {
    const el     = document.getElementById('quote-text');
    const author = document.getElementById('quote-author');
    if (!el) return;

    const q = quotes[quoteIndex % quotes.length];
    el.style.opacity = '0';
    setTimeout(() => {
      el.textContent     = `"${q.text}"`;
      author.textContent = `— ${q.author}`;
      el.style.opacity   = '1';
    }, 300);
    quoteIndex++;
  }
  showQuote();
  setInterval(showQuote, 6000);

  const quoteRefresh = document.getElementById('quote-refresh');
  if (quoteRefresh) quoteRefresh.addEventListener('click', showQuote);


  /* ── 13. RADAR CANVAS WIDGET ───────────────────────────────────── */
  function initRadar() {
    const canvas = document.getElementById('radar-canvas');
    if (!canvas) return;
    const ctx   = canvas.getContext('2d');
    const W     = canvas.width  = canvas.offsetWidth  || 240;
    const H     = canvas.height = canvas.offsetHeight || 180;
    const cx    = W / 2, cy = H / 2;
    const r     = Math.min(cx, cy) - 10;

    // Skill data for radar
    const skills = [
      { label: 'Frontend', val: 0.95 },
      { label: 'Backend',  val: 0.78 },
      { label: 'Systems',  val: 0.72 },
      { label: 'DevOps',   val: 0.70 },
      { label: 'Design',   val: 0.82 },
      { label: 'OSS',      val: 0.90 },
    ];

    let angle = 0;

    function draw() {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      ctx.clearRect(0, 0, W, H);

      const sides = skills.length;
      const step  = (Math.PI * 2) / sides;

      // Grid circles
      for (let ring = 1; ring <= 4; ring++) {
        ctx.strokeStyle = isLight ? `rgba(79,70,229,${0.08 * ring})` : `rgba(99,102,241,${0.08 * ring})`;
        ctx.lineWidth   = 1;
        ctx.beginPath();
        for (let i = 0; i <= sides; i++) {
          const a = i * step - Math.PI / 2;
          const x = cx + Math.cos(a) * r * (ring / 4);
          const y = cy + Math.sin(a) * r * (ring / 4);
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
      }

      // Spokes
      for (let i = 0; i < sides; i++) {
        const a = i * step - Math.PI / 2;
        ctx.strokeStyle = isLight ? 'rgba(79,70,229,0.15)' : 'rgba(99,102,241,0.15)';
        ctx.lineWidth   = 1;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
        ctx.stroke();

        // Labels
        ctx.fillStyle  = isLight ? '#475569' : '#cbd5e1';
        ctx.font       = '10px JetBrains Mono, monospace';
        ctx.textAlign  = 'center';
        const lx = cx + Math.cos(a) * (r + 14);
        const ly = cy + Math.sin(a) * (r + 14) + 4;
        ctx.fillText(skills[i].label, lx, ly);
      }

      // Data polygon
      ctx.fillStyle   = isLight ? 'rgba(79,70,229,0.15)' : 'rgba(99,102,241,0.2)';
      ctx.strokeStyle = isLight ? '#4f46e5' : '#818cf8';
      ctx.lineWidth   = 2;
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const a  = i * step - Math.PI / 2;
        const rv = r * skills[i].val;
        const x  = cx + Math.cos(a) * rv;
        const y  = cy + Math.sin(a) * rv;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Scan line
      const sx = cx + Math.cos(angle) * r;
      const sy = cy + Math.sin(angle) * r;
      const g  = ctx.createLinearGradient(cx, cy, sx, sy);
      g.addColorStop(0, 'rgba(6,182,212,0)');
      g.addColorStop(1, 'rgba(6,182,212,0.6)');
      ctx.strokeStyle = g;
      ctx.lineWidth   = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(sx, sy);
      ctx.stroke();

      angle += 0.03;
      requestAnimationFrame(draw);
    }
    draw();
  }
  initRadar();


  /* ── 14. BACK TO TOP ───────────────────────────────────────────── */
  const btt = document.getElementById('back-to-top');
  if (btt) {
    btt.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  /* ── 15. RIPPLE EFFECT ON BUTTONS ──────────────────────────────── */
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    const ripple    = document.createElement('span');
    const rect      = btn.getBoundingClientRect();
    const size      = Math.max(rect.width, rect.height);
    ripple.className = 'ripple';
    ripple.style.cssText = `
      width:${size}px; height:${size}px;
      left:${e.clientX - rect.left - size / 2}px;
      top:${e.clientY - rect.top - size / 2}px;
    `;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });


  /* ── 16. CARD TILT ON HOVER ────────────────────────────────────── */
  function initTilt() {
    const tiltCards = document.querySelectorAll('.project-card, .product-card');
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect  = card.getBoundingClientRect();
        const x     = (e.clientX - rect.left) / rect.width  - 0.5;
        const y     = (e.clientY - rect.top)  / rect.height - 0.5;
        card.style.transform = `
          translateY(-6px)
          rotateX(${-y * 8}deg)
          rotateY(${x * 8}deg)
        `;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }
  // Init tilt after a short delay (so dynamic cards are rendered)
  setTimeout(initTilt, 500);
  // Re-init after filter renders
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => setTimeout(initTilt, 200));
  });


  /* ── 17. KEYBOARD SHORTCUTS ────────────────────────────────────── */
  const shortcutsPanel = document.getElementById('shortcuts-panel');
  let panelVisible = false;

  function toggleShortcuts() {
    panelVisible = !panelVisible;
    if (shortcutsPanel) shortcutsPanel.classList.toggle('visible', panelVisible);
  }

  document.addEventListener('keydown', e => {
    // Don't fire when typing in inputs
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    switch (e.key) {
      case '?':
        toggleShortcuts();
        break;
      case 't':
      case 'T':
        ThemeManager.toggle();
        break;
      case 'h':
      case 'H':
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'p':
      case 'P':
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Escape':
        if (panelVisible) toggleShortcuts();
        if (easterEggOpen) closeEasterEgg();
        break;
    }

    // Easter egg: Konami code
    trackKonami(e.key);
  });

  const shortcutsClose = document.getElementById('shortcuts-close');
  if (shortcutsClose) shortcutsClose.addEventListener('click', toggleShortcuts);


  /* ── 18. EASTER EGG (Konami Code) ──────────────────────────────── */
  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiIdx = 0;
  let easterEggOpen = false;

  function trackKonami(key) {
    if (key === KONAMI[konamiIdx]) {
      konamiIdx++;
      if (konamiIdx === KONAMI.length) {
        konamiIdx = 0;
        triggerEasterEgg();
      }
    } else {
      konamiIdx = 0;
    }
  }

  function triggerEasterEgg() {
    const modal = document.getElementById('easter-egg-modal');
    if (!modal) return;
    easterEggOpen = true;
    modal.classList.add('visible');
    launchConfetti();
  }

  function closeEasterEgg() {
    const modal = document.getElementById('easter-egg-modal');
    if (!modal) return;
    easterEggOpen = false;
    modal.classList.remove('visible');
  }

  const eggClose = document.getElementById('easter-egg-close');
  if (eggClose) eggClose.addEventListener('click', closeEasterEgg);
  document.getElementById('easter-egg-modal')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeEasterEgg();
  });

  function launchConfetti() {
    for (let i = 0; i < 30; i++) {
      const c = document.createElement('div');
      c.style.cssText = `
        position:fixed;
        left:${Math.random() * 100}vw;
        top:-20px;
        width:${Math.random() * 10 + 6}px;
        height:${Math.random() * 10 + 6}px;
        background:hsl(${Math.random()*360},80%,60%);
        border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
        z-index:9999;
        pointer-events:none;
        animation:confetti ${Math.random() * 2 + 2}s linear ${Math.random() * 0.5}s forwards;
      `;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 4000);
    }
  }


  /* ── 19. HERO TYPEWRITER ───────────────────────────────────────── */
  const typeEl = document.getElementById('hero-typewriter');
  if (typeEl) {
    const words = ['software', 'tools', 'browsers', 'experiences', 'the future'];
    let wIdx = 0, cIdx = 0, deleting = false;

    function type() {
      const word = words[wIdx % words.length];
      if (!deleting) {
        typeEl.textContent = word.slice(0, ++cIdx);
        if (cIdx === word.length) {
          deleting = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        typeEl.textContent = word.slice(0, --cIdx);
        if (cIdx === 0) {
          deleting = false;
          wIdx++;
        }
      }
      setTimeout(type, deleting ? 60 : 110);
    }
    type();
  }


  /* ── 20. SMOOTH SCROLL FOR ANCHOR LINKS ────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  /* ── 21. VISITOR COUNTER (localStorage) ───────────────────────── */
  const vcEl = document.getElementById('visitor-count');
  if (vcEl) {
    let count = parseInt(localStorage.getItem('si-visits') || '0', 10) + 1;
    localStorage.setItem('si-visits', count);
    vcEl.textContent = count.toLocaleString();
  }


  /* ── 22. DYNAMIC GRADIENT BACKGROUND ──────────────────────────── */
  // Subtle gradient that shifts with mouse position on hero
  const heroBg = document.querySelector('.hero-bg');
  document.addEventListener('mousemove', e => {
    if (!heroBg) return;
    const x = (e.clientX / window.innerWidth  * 100).toFixed(1);
    const y = (e.clientY / window.innerHeight * 100).toFixed(1);
    heroBg.style.background = `
      radial-gradient(ellipse at ${x}% ${y}%,   rgba(124,58,237,0.35) 0%, transparent 55%),
      radial-gradient(ellipse at ${100-x}% ${100-y}%, rgba(6,182,212,0.18) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 50%, rgba(244,114,182,0.08) 0%, transparent 65%)
    `;
  });

}); // End DOMContentLoaded
