/**
 * StrangeInfinity — Project & Product Data
 * assets/js/projects.js
 *
 * Central data store for all projects, products, tech stack, and social links.
 * Edit this file to update the website content.
 */

/* ──────────────────────────────────────────────
   CONFIGURATION — Edit this to update site data
   ────────────────────────────────────────────── */
const SI_CONFIG = {

  /* ── Social / Contact Links ── */
  social: {
    github:    { url: 'https://github.com/StrangeInfinity',       handle: '@StrangeInfinity',   icon: '🐙' },
    instagram: { url: 'https://instagram.com/strangeinfinity',     handle: '@strangeinfinity',   icon: '📸' },
    linkedin:  { url: 'https://linkedin.com/in/strangeinfinity',   handle: 'StrangeInfinity',    icon: '💼' },
    email:     { url: 'mailto:contact@strangeinfinity.dev',        handle: 'contact@strangeinfinity.dev', icon: '✉️' },
    twitter:   { url: 'https://twitter.com/strangeinfinity',       handle: '@strangeinfinity',   icon: '🐦' },
  },

  /* ── Site Meta ── */
  meta: {
    name:    'StrangeInfinity',
    tagline: 'Building the Future, One Commit at a Time',
    desc:    'Open-source software, cosmic tools, and boundary-breaking technology from the edge of the digital frontier.',
  },

  /* ── Stats ── */
  stats: [
    { value: 10,  suffix: '+', label: 'Projects'        },
    { value: 500, suffix: '+', label: 'GitHub Stars'    },
    { value: 5,   suffix: 'K', label: 'Lines of Code'   },
    { value: 3,   suffix: '+', label: 'Years Building'  },
  ],

  /* ── Featured Products ── */
  products: [
    {
      id:       'infinity-browser',
      name:     'Infinity Browser',
      icon:     '🌐',
      featured: true,
      status:   'active',
      color:    'primary',
      desc:     'A privacy-first, feature-rich desktop web browser built on PyQt6 and Chromium engine. Experience the web the way it was meant to be — fast, private, and beautiful.',
      features: [
        'Privacy-first with built-in ad blocking',
        'Download manager with live progress',
        'Secure local password vault',
        'Bookmark manager & tab groups',
        'Built-in PDF viewer',
        'Custom CSS & JS injection',
      ],
      links: {
        github: 'https://github.com/StrangeInfinity/Infinity-Browser',
        demo:   null,
        docs:   null,
      },
      tags: ['Python', 'PyQt6', 'Chromium', 'Privacy'],
    },
    {
      id:       'velocix',
      name:     'Velocix Speed Test',
      icon:     '⚡',
      featured: true,
      status:   'beta',
      color:    'cyan',
      desc:     'Production-grade internet speed testing platform with real-time bandwidth analysis, animated SVG gauges, and enterprise-ready infrastructure.',
      features: [
        'Parallel binary streaming engine',
        'Real-time throughput charts',
        'Animated SVG gauge meters',
        'Global server selection',
        'ISP & network diagnostics',
        'Historical test reports',
      ],
      links: {
        github: 'https://github.com/StrangeInfinity/velocix',
        demo:   null,
        docs:   null,
      },
      tags: ['JavaScript', 'Node.js', 'WebSockets', 'Redis'],
    },
    {
      id:       'cosmotrack',
      name:     'CosmoTrack CLI',
      icon:     '🖥️',
      featured: false,
      status:   'active',
      color:    'pink',
      desc:     'A production-ready, hacker-style system monitoring tool in Bash. Real-time CPU, RAM, disk, and uptime metrics with ANSI art visuals.',
      features: [
        'ANSI color-coded dashboard',
        'Real-time resource monitoring',
        'Alert system for thresholds',
        'Persistent logging to file',
        'Lightweight — pure Bash',
        'Global CLI install support',
      ],
      links: {
        github: 'https://github.com/StrangeInfinity/cosmotrack',
        demo:   null,
        docs:   null,
      },
      tags: ['Bash', 'Linux', 'CLI', 'ANSI'],
    },
  ],

  /* ── All Projects ── */
  projects: [
    {
      id:     'infinity-browser',
      title:  'Infinity Browser',
      icon:   '🌐',
      status: 'active',
      desc:   'Privacy-first desktop browser built with PyQt6 and Chromium. Feature-rich with download manager, password vault, and bookmark system.',
      tags:   ['Python', 'PyQt6', 'Desktop', 'Privacy'],
      github: 'https://github.com/StrangeInfinity/Infinity-Browser',
      demo:   null,
    },
    {
      id:     'velocix',
      title:  'Velocix Speed Test',
      icon:   '⚡',
      status: 'beta',
      desc:   'SaaS internet speed testing platform with real-time analytics, animated gauges, and enterprise infrastructure.',
      tags:   ['Node.js', 'Fastify', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/StrangeInfinity/velocix',
      demo:   null,
    },
    {
      id:     'cosmotrack',
      title:  'CosmoTrack CLI',
      icon:   '🖥️',
      status: 'active',
      desc:   'Hacker-style real-time system monitor in pure Bash with ASCII art, ANSI colors, and alert thresholds.',
      tags:   ['Bash', 'Linux', 'Monitoring', 'CLI'],
      github: 'https://github.com/StrangeInfinity/cosmotrack',
      demo:   null,
    },
    {
      id:     '2048-nexus',
      title:  '2048 Nexus',
      icon:   '🎮',
      status: 'active',
      desc:   'Production-ready 2048 desktop game with ambient sound, smooth animations, and beautiful glassmorphism UI.',
      tags:   ['JavaScript', 'HTML5', 'CSS3', 'Game'],
      github: 'https://github.com/StrangeInfinity/2048-nexus',
      demo:   null,
    },
    {
      id:     'strangeinfinity-web',
      title:  'StrangeInfinity.github.io',
      icon:   '🌌',
      status: 'active',
      desc:   'This very website — a futuristic portfolio and product showcase built with pure HTML, CSS, and Vanilla JavaScript.',
      tags:   ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      github: 'https://github.com/StrangeInfinity/strangeinfinity.github.io',
      demo:   'https://strangeinfinity.github.io',
    },
    {
      id:     'future-project',
      title:  'Project Nebula',
      icon:   '🔭',
      status: 'planned',
      desc:   'An upcoming open-source project from the StrangeInfinity lab. Stay tuned for the announcement.',
      tags:   ['Coming Soon'],
      github: null,
      demo:   null,
    },
  ],

  /* ── Technology Stack ── */
  technologies: [
    { name: 'HTML5',       icon: '🌐', level: 95, color: '#e34f26' },
    { name: 'CSS3',        icon: '🎨', level: 92, color: '#1572b6' },
    { name: 'JavaScript',  icon: '⚡', level: 90, color: '#f7df1e' },
    { name: 'Python',      icon: '🐍', level: 88, color: '#3776ab' },
    { name: 'Java',        icon: '☕', level: 75, color: '#ed8b00' },
    { name: 'C++',         icon: '⚙️', level: 72, color: '#00599c' },
    { name: 'Bash',        icon: '💻', level: 85, color: '#4eaa25' },
    { name: 'Git',         icon: '🔀', level: 90, color: '#f05032' },
    { name: 'Linux',       icon: '🐧', level: 88, color: '#fcc624' },
    { name: 'Docker',      icon: '🐳', level: 70, color: '#2496ed' },
    { name: 'Node.js',     icon: '🟢', level: 78, color: '#339933' },
    { name: 'PostgreSQL',  icon: '🐘', level: 72, color: '#336791' },
  ],

  /* ── GitHub Repositories (manual, since no backend) ── */
  repos: [
    { name: 'Infinity-Browser', desc: 'Privacy-first desktop browser built with PyQt6 & Chromium engine', lang: 'Python',     stars: '⭐ 42',  forks: '🍴 8'  },
    { name: 'velocix',          desc: 'Production-grade internet speed testing SaaS platform',               lang: 'JavaScript', stars: '⭐ 28',  forks: '🍴 5'  },
    { name: 'cosmotrack',       desc: 'Hacker-style real-time system monitor in pure Bash',                  lang: 'Shell',      stars: '⭐ 65',  forks: '🍴 12' },
    { name: '2048-nexus',       desc: 'Glassmorphism 2048 desktop game with ambient audio',                  lang: 'JavaScript', stars: '⭐ 19',  forks: '🍴 3'  },
    { name: 'strangeinfinity.github.io', desc: 'Futuristic portfolio & product showcase',                   lang: 'HTML',       stars: '⭐ 14',  forks: '🍴 2'  },
  ],

  /* ── Timeline ── */
  timeline: [
    {
      date:    'Q1 2024',
      title:   'StrangeInfinity Founded',
      desc:    'Started the StrangeInfinity open-source initiative with a mission to build privacy-first, cosmic-grade software tools.',
      active:  false,
    },
    {
      date:    'Q2 2024',
      title:   'Infinity Browser v1.0',
      desc:    'Launched the first version of Infinity Browser — a PyQt6-based desktop browser with privacy features and download management.',
      active:  false,
    },
    {
      date:    'Q3 2024',
      title:   'CosmoTrack CLI Released',
      desc:    'Open-sourced CosmoTrack, a real-time system monitoring tool in pure Bash with ANSI art and alert thresholds.',
      active:  false,
    },
    {
      date:    'Q1 2025',
      title:   '2048 Nexus & More',
      desc:    'Released 2048 Nexus with ambient sound and glassmorphism UI. Continued expanding the open-source portfolio.',
      active:  false,
    },
    {
      date:    'Q2 2025',
      title:   'Velocix Speed Test (Beta)',
      desc:    'Launched Velocix — a production-grade SaaS speed testing platform built with Fastify, Socket.io, and Redis.',
      active:  true,
    },
    {
      date:    'Q3 2025 →',
      title:   'Project Nebula',
      desc:    'Working on the next generation of StrangeInfinity products. More announcements coming soon.',
      active:  false,
    },
  ],

  /* ── Tech Quotes (for widget) ── */
  quotes: [
    { text: 'Any sufficiently advanced technology is indistinguishable from magic.', author: 'Arthur C. Clarke' },
    { text: 'The best way to predict the future is to invent it.', author: 'Alan Kay' },
    { text: 'Software is eating the world.', author: 'Marc Andreessen' },
    { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
    { text: 'Code is like humor. When you have to explain it, it\'s bad.', author: 'Cory House' },
    { text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
    { text: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson' },
    { text: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
    { text: 'The universe is under no obligation to make sense to you.', author: 'Neil deGrasse Tyson' },
    { text: 'We are all connected; to each other, biologically. To the earth, chemically. To the rest of the universe, atomically.', author: 'Neil deGrasse Tyson' },
  ],

  /* ── Core Values ── */
  values: [
    { icon: '🔓', title: 'Open Source',   desc: 'We believe in transparency. Our code lives in the open for the world to learn, contribute, and improve.' },
    { icon: '🔒', title: 'Privacy First', desc: 'Your data belongs to you. We design systems that respect privacy by default, not as an afterthought.' },
    { icon: '⚡', title: 'Performance',   desc: 'Every millisecond matters. We obsess over performance so our tools feel instant and powerful.' },
    { icon: '🌌', title: 'Innovation',    desc: 'We push beyond the ordinary. Inspired by the cosmos, we build what hasn\'t been built before.' },
  ],

};

/* ──────────────────────────────────────────────
   RENDERER — Reads SI_CONFIG and builds DOM
   ────────────────────────────────────────────── */
const ProjectRenderer = (() => {

  /** Render project cards */
  function renderProjects(filter = 'all') {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    const projects = filter === 'all'
      ? SI_CONFIG.projects
      : SI_CONFIG.projects.filter(p => p.tags.some(t => t.toLowerCase().includes(filter)));

    container.innerHTML = projects.map((p, i) => `
      <article class="project-card reveal" style="transition-delay:${i * 0.08}s"
               data-project="${p.id}" role="article" aria-label="${p.title}">
        <div class="project-card-header">
          <span class="project-icon" aria-hidden="true">${p.icon}</span>
          <span class="project-status-badge status-${p.status}">${p.status}</span>
        </div>
        <div class="project-card-body">
          <h3 class="project-card-title">${p.title}</h3>
          <p class="project-card-desc">${p.desc}</p>
          <div class="project-tags" aria-label="Technologies">
            ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
        </div>
        <div class="project-card-footer">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer"
               class="btn btn-ghost btn-sm" aria-label="View ${p.title} on GitHub">
               🐙 GitHub</a>` : ''}
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer"
               class="btn btn-primary btn-sm" aria-label="View ${p.title} live demo">
               🚀 Live Demo</a>` : ''}
          ${!p.github && !p.demo ? `<span class="btn btn-ghost btn-sm" style="opacity:0.5;cursor:default;">Coming Soon</span>` : ''}
        </div>
      </article>
    `).join('');

    // Trigger reveal for new cards
    requestAnimationFrame(() => {
      container.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
    });
  }

  /** Render featured products */
  function renderProducts() {
    const container = document.getElementById('products-grid');
    if (!container) return;

    container.innerHTML = SI_CONFIG.products.map((p, i) => `
      <article class="product-card ${p.featured ? 'featured' : ''} reveal delay-${i + 1}"
               role="article" aria-label="${p.name}">
        <div class="product-icon-wrap" aria-hidden="true">${p.icon}</div>
        <h3 class="product-title">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <ul class="product-features" aria-label="Features">
          ${p.features.map(f => `<li class="product-feature">${f}</li>`).join('')}
        </ul>
        <div class="product-actions">
          ${p.links.github ? `<a href="${p.links.github}" target="_blank" rel="noopener noreferrer"
               class="btn btn-outline" aria-label="View ${p.name} on GitHub">
               <span>🐙 GitHub</span></a>` : ''}
          ${p.links.demo ? `<a href="${p.links.demo}" target="_blank" rel="noopener noreferrer"
               class="btn btn-primary" aria-label="${p.name} live demo">
               🚀 Demo</a>` : ''}
          ${!p.links.github && !p.links.demo ? `<span class="btn btn-ghost" style="opacity:0.5;cursor:default">In Development</span>` : ''}
        </div>
      </article>
    `).join('');
  }

  /** Render tech stack */
  function renderTech() {
    const container = document.getElementById('tech-grid');
    if (!container) return;

    container.innerHTML = SI_CONFIG.technologies.map((t, i) => `
      <div class="tech-card reveal delay-${(i % 5) + 1}" data-level="${t.level}"
           aria-label="${t.name} — ${t.level}% proficiency">
        <span class="tech-icon" aria-hidden="true">${t.icon}</span>
        <span class="tech-name">${t.name}</span>
        <div class="tech-level" role="progressbar" aria-valuenow="${t.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${t.name} proficiency">
          <div class="tech-level-fill" data-fill="${t.level}%"></div>
        </div>
      </div>
    `).join('');
  }

  /** Animate tech level bars when visible */
  function animateTechBars() {
    document.querySelectorAll('.tech-level-fill').forEach(bar => {
      bar.style.width = bar.dataset.fill;
    });
  }

  /** Render GitHub repos */
  function renderRepos() {
    const container = document.getElementById('repos-list');
    if (!container) return;

    container.innerHTML = SI_CONFIG.repos.map(r => `
      <a href="https://github.com/StrangeInfinity/${r.name}" target="_blank" rel="noopener noreferrer"
         class="repo-card reveal" aria-label="Repository: ${r.name}">
        <div class="repo-name">📦 ${r.name}</div>
        <p class="repo-desc">${r.desc}</p>
        <div class="repo-meta">
          <span class="repo-lang">${r.lang}</span>
          <span>${r.stars}</span>
          <span>${r.forks}</span>
        </div>
      </a>
    `).join('');
  }

  /** Render timeline */
  function renderTimeline() {
    const container = document.getElementById('timeline-list');
    if (!container) return;

    container.innerHTML = SI_CONFIG.timeline.map((t, i) => `
      <div class="timeline-item ${t.active ? 'active' : ''} reveal delay-${(i % 4) + 1}">
        <div class="timeline-date">${t.date}</div>
        <h3 class="timeline-title">${t.title}</h3>
        <p class="timeline-desc">${t.desc}</p>
      </div>
    `).join('');
  }

  /** Render value cards */
  function renderValues() {
    const container = document.getElementById('values-grid');
    if (!container) return;

    container.innerHTML = SI_CONFIG.values.map((v, i) => `
      <div class="value-card reveal delay-${i + 1}">
        <div class="value-icon" aria-hidden="true">${v.icon}</div>
        <h4 class="value-title">${v.title}</h4>
        <p class="value-desc">${v.desc}</p>
      </div>
    `).join('');
  }

  /** Render social contact cards */
  function renderSocial() {
    const container = document.getElementById('social-links-grid');
    if (!container) return;

    const socials = [
      { key: 'github',    name: 'GitHub',    bg: 'rgba(36,41,47,0.5)'       },
      { key: 'instagram', name: 'Instagram', bg: 'rgba(225,48,108,0.15)'    },
      { key: 'linkedin',  name: 'LinkedIn',  bg: 'rgba(0,119,181,0.15)'     },
      { key: 'email',     name: 'Email',     bg: 'rgba(124,58,237,0.15)'    },
    ];

    container.innerHTML = socials.map((s, i) => {
      const data = SI_CONFIG.social[s.key];
      return `
        <a href="${data.url}" target="_blank" rel="noopener noreferrer"
           class="social-card reveal delay-${i + 1}" aria-label="Connect on ${s.name}">
          <div class="social-icon-wrap" style="background:${s.bg}" aria-hidden="true">${data.icon}</div>
          <div>
            <div class="social-card-name">${s.name}</div>
            <div class="social-card-handle">${data.handle}</div>
          </div>
          <span class="social-card-arrow" aria-hidden="true">↗</span>
        </a>
      `;
    }).join('');
  }

  /** Render footer social */
  function renderFooterSocial() {
    const container = document.getElementById('footer-social');
    if (!container) return;

    const links = [
      { key: 'github',    label: 'GitHub' },
      { key: 'instagram', label: 'Instagram' },
      { key: 'twitter',   label: 'Twitter' },
      { key: 'linkedin',  label: 'LinkedIn' },
    ];
    container.innerHTML = links.map(l => {
      const d = SI_CONFIG.social[l.key];
      return `<a href="${d.url}" target="_blank" rel="noopener noreferrer"
                 aria-label="${l.label}: ${d.handle}">${d.icon}</a>`;
    }).join('');
  }

  /** Render nav social icons */
  function renderNavSocial() {
    const container = document.getElementById('nav-social');
    if (!container) return;

    const links = [
      { key: 'github', label: 'GitHub' },
      { key: 'twitter', label: 'Twitter' },
    ];
    container.innerHTML = links.map(l => {
      const d = SI_CONFIG.social[l.key];
      return `<a href="${d.url}" target="_blank" rel="noopener noreferrer"
                 aria-label="${l.label}: ${d.handle}" title="${l.label}">${d.icon}</a>`;
    }).join('');
  }

  /** Init all renderers */
  function init() {
    renderProjects();
    renderProducts();
    renderTech();
    renderRepos();
    renderTimeline();
    renderValues();
    renderSocial();
    renderFooterSocial();
    renderNavSocial();
  }

  return { init, renderProjects, animateTechBars };
})();
