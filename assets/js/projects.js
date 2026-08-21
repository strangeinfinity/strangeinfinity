/**
 * StrangeInfinity — Project & Product Data
 * assets/js/projects.js
 *
 * Central data store for all projects, products, tech stack, and social links.
 * Features open-source repositories from dev-hints.
 */

/* ──────────────────────────────────────────────
   CONFIGURATION — Edit this to update site data
   ────────────────────────────────────────────── */
const SI_CONFIG = {

  /* ── Social / Contact Links ── */
  social: {
    github:    { url: 'https://github.com/strangeinfinity/',         handle: '@strangeinfinity',     icon: '<i class="fa-brands fa-github"></i>' },
    instagram: { url: 'https://instagram.com/strangeinfinity.dev',  handle: '@strangeinfinity.dev', icon: '<i class="fa-brands fa-instagram"></i>' },
    linkedin:  { url: 'https://in.linkedin.com/in/ayush-kumar-maurya/', handle: 'Ayush Kumar Maurya',   icon: '<i class="fa-brands fa-linkedin"></i>' },
    email:     { url: 'mailto:strangeinfinity.dev@gmail.com',       handle: 'strangeinfinity.dev@gmail.com', icon: '<i class="fa-solid fa-envelope"></i>' },
    twitter:   { url: 'https://x.com/strang3infinity',             handle: '@strang3infinity',     icon: '<i class="fa-brands fa-x-twitter"></i>' },
  },

  /* ── Site Meta ── */
  meta: {
    name:    'StrangeInfinity',
    tagline: 'Building the Future, One Commit at a Time',
    desc:    'Open-source software, cosmic tools, and boundary-breaking technology from the edge of the digital frontier.',
  },

  /* ── Stats ── */
  stats: [
    { value: 16,  suffix: '+', label: 'Repositories'   },
    { value: 25,  suffix: '+', label: 'GitHub Stars'   },
    { value: 12,  suffix: 'K+', label: 'Lines of Code' },
    { value: 3,   suffix: '+', label: 'Years Building' },
  ],

  /* ── Featured Products ── */
  products: [
    {
      id:       'infinity-writer',
      name:     'Infinity Writer',
      icon:     '<i class="fa-solid fa-feather-pointed" style="color:var(--color-primary-light)"></i>',
      featured: true,
      status:   'active',
      color:    'primary',
      desc:     'Infinity Writer strictly focuses on generating clean, semantic, and production-ready HTML that natively supports dark mode right out of the box.',
      features: [
        'Generates clean & semantic HTML code',
        'Native out-of-the-box dark mode support',
        'Zero external runtime dependencies',
        'Built-in typographic hierarchy',
        'Accessible ARIA component structure',
        'Production-ready export templates',
      ],
      links: {
        github: 'https://github.com/dev-hints/Infinity-Writer',
        demo:   'https://strangeinfinity.github.io/Infinity-Writer/',
        docs:   'https://strangeinfinity.github.io/Infinity-Writer/docs.html',
      },
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Web Tool'],
    },
    {
      id:       'airpointer',
      name:     'AirPointer',
      icon:     '<i class="fa-solid fa-hand-pointer" style="color:var(--color-cyan)"></i>',
      featured: true,
      status:   'active',
      color:    'cyan',
      desc:     'A real-time virtual mouse system enabling touchless computer interaction via webcam hand gesture tracking powered by OpenCV and MediaPipe.',
      features: [
        'Touchless gesture cursor control',
        'Real-time webcam hand tracking',
        'Smooth mouse movement & click simulation',
        'Customizable gesture sensitivity',
        'Cross-platform Python desktop execution',
        'Low latency & lightweight processing',
      ],
      links: {
        github: 'https://github.com/dev-hints/AirPointer',
        demo:   'https://strangeinfinity.github.io/AirPointer/',
        docs:   'https://strangeinfinity.github.io/AirPointer/docs.html',
      },
      tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
    },
    {
      id:       'infinity-browser',
      name:     'Infinity Browser',
      icon:     '<i class="fa-solid fa-globe" style="color:var(--color-purple)"></i>',
      featured: true,
      status:   'active',
      color:    'purple',
      desc:     'A privacy-first, feature-rich desktop web browser built with Python and PyQt6. Experience fast, secure browsing with built-in productivity tools.',
      features: [
        'Privacy-first with built-in ad blocking',
        'Download manager with live progress tracking',
        'Secure local password vault',
        'Bookmark manager & custom tab groups',
        'Built-in PDF viewer & document reader',
        'Custom CSS & JS script injection',
      ],
      links: {
        github: 'https://github.com/dev-hints/infinity-browser',
        demo:   'https://strangeinfinity.github.io/Infinity-Browser/',
        docs:   'https://strangeinfinity.github.io/Infinity-Browser/docs.html',
      },
      tags: ['Python', 'PyQt6', 'QtWebEngine', 'Desktop'],
    },
    {
      id:       'notes-app',
      name:     'Cosmic Notes App',
      icon:     '<i class="fa-solid fa-note-sticky" style="color:var(--color-pink)"></i>',
      featured: true,
      status:   'active',
      color:    'pink',
      desc:     'A visually stunning, highly interactive frontend-only Notes Application that brings a deep space experience right into your browser.',
      features: [
        'Deep space cosmic glassmorphism UI',
        'Interactive task tagging & categories',
        'Instant search & auto-save to LocalStorage',
        'Rich text document formatting',
        'Responsive layout across all devices',
        'Pure Vanilla HTML, CSS & JavaScript',
      ],
      links: {
        github: 'https://github.com/dev-hints/Notes-App',
        demo:   'https://strangeinfinity.github.io/Notes-App/',
        docs:   'https://strangeinfinity.github.io/Notes-App/docs.html',
      },
      tags: ['JavaScript', 'CSS3', 'HTML5', 'Productivity'],
    },
    {
      id:       '2048-nexus',
      name:     '2048 Nexus',
      icon:     '<i class="fa-solid fa-gamepad" style="color:var(--color-emerald)"></i>',
      featured: true,
      status:   'active',
      color:    'emerald',
      desc:     'Production-grade 2048 desktop game built with Python and PyQt6, featuring multiple game modes, AI play, ambient audio, themes, and leaderboards.',
      features: [
        'Multiple modes (Classic, Time Attack, AI)',
        'Automated AI solver playback',
        'Ambient cosmic audio & sound effects',
        'Custom neon themes & skins',
        'Local high-score leaderboards',
        'Smooth tile merge animations',
      ],
      links: {
        github: 'https://github.com/dev-hints/2048-Nexus',
        demo:   'https://strangeinfinity.github.io/2048-Nexus/',
        docs:   'https://strangeinfinity.github.io/2048-Nexus/docs.html',
      },
      tags: ['Python', 'PyQt6', 'JavaScript', 'Game'],
    },
    {
      id:       'snake-game',
      name:     'Neon Snake Game',
      icon:     '<i class="fa-solid fa-staff-snake" style="color:#22c55e"></i>',
      featured: true,
      status:   'active',
      color:    'emerald',
      desc:     'Arcade retro-futuristic Snake game with HTML5 Canvas, glowing particle bursts, power-ups, and synthesized Web Audio sound.',
      features: [
        'HTML5 2D Canvas hardware-accelerated 60 FPS',
        'Procedural Web Audio API sound synthesis',
        '4 powerups (Speed Boost, Ghost, Freeze, Magnet)',
        'Combo multiplier streak score engine',
        'Responsive mobile touch swipe controls',
        'Zero external runtime dependencies',
      ],
      links: {
        github: 'https://github.com/dev-hints/Snake-Game',
        demo:   'https://strangeinfinity.github.io/Snake-Game/',
        docs:   'https://strangeinfinity.github.io/Snake-Game/docs.html',
      },
      tags: ['JavaScript', 'HTML5', 'Canvas', 'Game'],
    },
    {
      id:       'gemini-cli',
      name:     'Gemini CLI Chatbot',
      icon:     '<i class="fa-solid fa-terminal" style="color:#06b6d4"></i>',
      featured: true,
      status:   'active',
      color:    'cyan',
      desc:     'Ultra-fast terminal AI companion written 100% in pure Bash. Chat in interactive REPL, pipe Unix commands, and stream responses in real-time.',
      features: [
        '100% Pure Bash shell script with zero runtime overhead',
        'Real-time token streaming with Server-Sent Events (SSE)',
        'Unix stdin pipe redirection & error diagnostics',
        'Multi-turn conversation context history',
        'Custom system personas (Coder, Sysadmin, Auditor)',
        'Encrypted local API key storage',
      ],
      links: {
        github: 'https://github.com/dev-hints/Gemini_cli',
        demo:   'https://strangeinfinity.github.io/Gemini-CLI/',
        docs:   'https://strangeinfinity.github.io/Gemini-CLI/docs.html',
      },
      tags: ['Shell', 'Bash', 'AI', 'CLI'],
    },
    {
      id:       'calccosmos',
      name:     'CalcCosmos Calculator',
      icon:     '<i class="fa-solid fa-calculator" style="color:#f59e0b"></i>',
      featured: true,
      status:   'active',
      color:    'amber',
      desc:     'High-precision scientific computation engine with cosmic glassmorphism UI, trigonometric operations, and persistent calculation history.',
      features: [
        'Arbitrary precision floating-point mitigation',
        'Trigonometric, hyperbolic & logarithmic functions',
        'Dijkstra Shunting-yard expression parsing',
        'Persistent calculation history ledger',
        'Memory registers (M+, M-, MR, MC)',
        'Full keyboard numpad bindings',
      ],
      links: {
        github: 'https://github.com/dev-hints/CalcCosmos',
        demo:   'https://strangeinfinity.github.io/CalcCosmos/',
        docs:   'https://strangeinfinity.github.io/CalcCosmos/docs.html',
      },
      tags: ['JavaScript', 'HTML5', 'Math', 'PWA'],
    },
    {
      id:       'to-do',
      name:     'ToDo Task Manager',
      icon:     '<i class="fa-solid fa-square-check" style="color:#14b8a6"></i>',
      featured: true,
      status:   'active',
      color:    'cyan',
      desc:     'Distraction-free personal task management and Pomodoro workstation built with cosmic glassmorphism and 100% local persistence.',
      features: [
        'Cosmic glassmorphism dashboard UI',
        'Custom hashtag categories & priority matrix',
        'Integrated Pomodoro sprint focus timer',
        'Subtask hierarchy & progress percentage metrics',
        'One-click JSON database backup & restore',
        'Zero cloud tracking local-first privacy',
      ],
      links: {
        github: 'https://github.com/dev-hints/To-Do',
        demo:   'https://strangeinfinity.github.io/To-Do/',
        docs:   'https://strangeinfinity.github.io/To-Do/docs.html',
      },
      tags: ['JavaScript', 'HTML5', 'Productivity', 'PWA'],
    },
  ],

  /* ── All Projects ── */
  projects: [
    {
      id:     'infinity-writer',
      title:  'Infinity Writer',
      icon:   '<i class="fa-solid fa-feather-pointed" style="color:var(--color-primary-light)"></i>',
      status: 'active',
      desc:   'Focuses strictly on generating clean, semantic, and production-ready HTML with native out-of-the-box dark mode support.',
      tags:   ['JavaScript', 'HTML5', 'CSS3', 'Generator'],
      github: 'https://github.com/dev-hints/Infinity-Writer',
      demo:   'https://strangeinfinity.github.io/Infinity-Writer/',
    },
    {
      id:     'airpointer',
      title:  'AirPointer Virtual Mouse',
      icon:   '<i class="fa-solid fa-hand-pointer" style="color:var(--color-cyan)"></i>',
      status: 'active',
      desc:   'Touchless real-time virtual mouse system translating webcam hand gestures into cursor movement using computer vision.',
      tags:   ['Python', 'OpenCV', 'MediaPipe', 'AI'],
      github: 'https://github.com/dev-hints/AirPointer',
      demo:   'https://strangeinfinity.github.io/AirPointer/',
    },
    {
      id:     'infinity-browser',
      title:  'Infinity Browser',
      icon:   '<i class="fa-solid fa-globe" style="color:var(--color-purple)"></i>',
      status: 'active',
      desc:   'Fast, privacy-first desktop web browser built with Python and PyQt6 featuring ad blocking, password vault, and downloads.',
      tags:   ['Python', 'PyQt6', 'Desktop', 'Privacy'],
      github: 'https://github.com/dev-hints/infinity-browser',
      demo:   'https://strangeinfinity.github.io/Infinity-Browser/',
    },
    {
      id:     'notes-app',
      title:  'Cosmic Notes App',
      icon:   '<i class="fa-solid fa-note-sticky" style="color:var(--color-pink)"></i>',
      status: 'active',
      desc:   'Visually stunning deep-space themed notes application with rich text formatting, categories, and local storage.',
      tags:   ['JavaScript', 'CSS3', 'HTML5', 'Productivity'],
      github: 'https://github.com/dev-hints/Notes-App',
      demo:   'https://strangeinfinity.github.io/Notes-App/',
    },
    {
      id:     '2048-nexus',
      title:  '2048 Nexus',
      icon:   '<i class="fa-solid fa-gamepad" style="color:var(--color-emerald)"></i>',
      status: 'active',
      desc:   'Production-grade 2048 desktop & web game featuring multiple game modes, AI play, ambient audio, and neon UI.',
      tags:   ['Python', 'PyQt6', 'JavaScript', 'Game'],
      github: 'https://github.com/dev-hints/2048-Nexus',
      demo:   'https://strangeinfinity.github.io/2048-Nexus/',
    },
    {
      id:     'snake-game',
      title:  'Neon Snake Game',
      icon:   '<i class="fa-solid fa-staff-snake" style="color:#22c55e"></i>',
      status: 'active',
      desc:   'Modern responsive Snake game built with HTML, CSS, and modular JavaScript with a dark neon glassmorphism UI.',
      tags:   ['JavaScript', 'HTML5', 'CSS3', 'Game'],
      github: 'https://github.com/dev-hints/Snake-Game',
      demo:   'https://strangeinfinity.github.io/Snake-Game/',
    },
    {
      id:     'gemini-cli',
      title:  'Gemini CLI Chatbot',
      icon:   '<i class="fa-solid fa-terminal" style="color:#06b6d4"></i>',
      status: 'active',
      desc:   'Lightweight terminal AI chatbot built entirely in Bash with a hacker/cosmic neon aesthetic and typing animations.',
      tags:   ['Shell', 'Bash', 'AI', 'CLI'],
      github: 'https://github.com/dev-hints/Gemini_cli',
      demo:   'https://strangeinfinity.github.io/Gemini-CLI/',
    },
    {
      id:     'calccosmos',
      title:  'CalcCosmos Calculator',
      icon:   '<i class="fa-solid fa-calculator" style="color:#f59e0b"></i>',
      status: 'active',
      desc:   'Responsive scientific calculator with advanced mathematical operations, history tracking, and cosmic themes.',
      tags:   ['JavaScript', 'HTML5', 'CSS3', 'Math'],
      github: 'https://github.com/dev-hints/CalcCosmos',
      demo:   'https://strangeinfinity.github.io/CalcCosmos/',
    },
    {
      id:     'to-do',
      title:  'ToDo Task Manager',
      icon:   '<i class="fa-solid fa-square-check" style="color:#10b981"></i>',
      status: 'active',
      desc:   'Advanced productivity task management application with glassmorphism UI, progress tracking, and category filters.',
      tags:   ['JavaScript', 'CSS3', 'HTML5', 'Productivity'],
      github: 'https://github.com/dev-hints/To-Do',
      demo:   'https://strangeinfinity.github.io/To-Do/',
    },
  ],

  /* ── Technology Stack ── */
  technologies: [
    { name: 'HTML5',       icon: '<i class="devicon-html5-plain colored"></i>', level: 95, color: '#e34f26' },
    { name: 'CSS3',        icon: '<i class="devicon-css3-plain colored"></i>', level: 92, color: '#1572b6' },
    { name: 'JavaScript',  icon: '<i class="devicon-javascript-plain colored"></i>', level: 90, color: '#f7df1e' },
    { name: 'Python',      icon: '<i class="devicon-python-plain colored"></i>', level: 88, color: '#3776ab' },
    { name: 'OpenCV',      icon: '<i class="devicon-opencv-plain colored"></i>', level: 80, color: '#5C3EE8' },
    { name: 'PyQt6',       icon: '<i class="devicon-qt-original colored"></i>', level: 85, color: '#41CD52' },
    { name: 'Bash / Shell',icon: '<i class="devicon-bash-plain colored"></i>', level: 85, color: '#4eaa25' },
    { name: 'Git & GitHub',icon: '<i class="devicon-git-plain colored"></i>', level: 90, color: '#f05032' },
    { name: 'Linux',       icon: '<i class="devicon-linux-plain colored"></i>', level: 88, color: '#fcc624' },
  ],

  /* ── GitHub Repositories ── */
  repos: [
    { name: 'Infinity-Writer', desc: 'Generates clean, semantic HTML with native out-of-the-box dark mode support', lang: 'JavaScript', stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 12', forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 3' },
    { name: 'AirPointer',      desc: 'Real-time virtual mouse system using webcam hand gesture tracking',        lang: 'Python',     stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 15', forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 4' },
    { name: 'infinity-browser',desc: 'Fast, private desktop web browser built with Python and PyQt6',            lang: 'Python',     stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 3',  forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 1' },
    { name: 'Notes-App',       desc: 'Deep space-themed notes app built with pure HTML/CSS/JS',                   lang: 'CSS',        stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 2',  forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 0' },
    { name: '2048-Nexus',      desc: '2048 desktop game with AI solver, ambient audio, and neon UI',            lang: 'Python',     stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 2',  forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 0' },
    { name: 'Snake-Game',      desc: 'Responsive neon Snake game built with pure HTML, CSS, & modular JS',       lang: 'JavaScript', stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 2',  forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 0' },
    { name: 'Gemini_cli',      desc: 'Hacker-style terminal AI chatbot in pure Bash with typing animations',    lang: 'Shell',      stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 2',  forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 0' },
    { name: 'CalcCosmos',      desc: 'Responsive cosmic scientific calculator built with Vanilla JS & CSS',     lang: 'JavaScript', stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 2',  forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 0' },
    { name: 'To-Do',           desc: 'Glassmorphism task manager with progress tracking & categories',           lang: 'CSS',        stars: '<i class="fa-solid fa-star" style="color:#f59e0b;font-size:0.85em;"></i> 2',  forks: '<i class="fa-solid fa-code-fork" style="color:var(--text-muted);font-size:0.85em;"></i> 0' },
  ],

  /* ── Timeline ── */
  timeline: [
    {
      date:    'Q1 2026',
      title:   'Open-Source Foundations',
      desc:    'Initiated dev-hints open-source projects including web applications, games, and developer utilities.',
      active:  false,
    },
    {
      date:    'Q2 2026',
      title:   'Infinity Browser & Desktop Apps',
      desc:    'Developed Infinity Browser for privacy-first desktop browsing alongside PyQt6 2048 Nexus game.',
      active:  false,
    },
    {
      date:    'Q3 2026',
      title:   'AirPointer & Gemini CLI',
      desc:    'Released AirPointer computer-vision virtual mouse and Gemini CLI hacker-style terminal chatbot in pure Bash.',
      active:  false,
    },
    {
      date:    'Q4 2026',
      title:   'Infinity Writer & Notes App',
      desc:    'Launched Infinity Writer clean HTML generator and Cosmic Notes application.',
      active:  true,
    },
  ],

  /* ── Tech Quotes ── */
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
  ],

  /* ── Core Values ── */
  values: [
    { icon: '<i class="fa-solid fa-lock-open" style="color:var(--color-primary-light)"></i>', title: 'Open Source',   desc: 'Everything lives in the open. We build accessible, transparent code for the global developer community.' },
    { icon: '<i class="fa-solid fa-shield-halved" style="color:var(--color-cyan)"></i>', title: 'Privacy First', desc: 'Your data belongs to you. Zero telemetry, local storage, and end-to-end encrypted designs by default.' },
    { icon: '<i class="fa-solid fa-bolt" style="color:#f59e0b"></i>', title: 'Performance',   desc: 'Every millisecond matters. Lightweight, zero-bloat implementations tailored for speed and efficiency.' },
    { icon: '<i class="fa-solid fa-atom" style="color:var(--color-secondary)"></i>', title: 'Innovation',    desc: 'Exploring computer vision, CLI AI tools, PyQt desktop apps, and cutting-edge web applications.' },
  ],

};

/* ──────────────────────────────────────────────
   RENDERER — Reads SI_CONFIG and builds DOM
   ────────────────────────────────────────────── */
const ProjectRenderer = (() => {

  const INITIAL_LIMIT = 6;
  let currentFilter = 'all';
  let isExpanded = false;

  /** Render project cards with 6-item default pagination */
  function renderProjects(filter = 'all', keepExpanded = false) {
    const container = document.getElementById('projects-grid');
    const paginationWrap = document.getElementById('projects-pagination-wrap');
    if (!container) return;

    if (filter !== currentFilter && !keepExpanded) {
      isExpanded = false;
    }
    currentFilter = filter;

    const allFilteredProjects = currentFilter === 'all'
      ? SI_CONFIG.projects
      : SI_CONFIG.projects.filter(p => p.tags.some(t => t.toLowerCase().includes(currentFilter)));

    const visibleProjects = isExpanded
      ? allFilteredProjects
      : allFilteredProjects.slice(0, INITIAL_LIMIT);

    container.innerHTML = visibleProjects.map((p, i) => `
      <article class="project-card reveal" style="transition-delay:${i * 0.05}s"
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
               <i class="fa-brands fa-github"></i> GitHub</a>` : ''}
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer"
               class="btn btn-primary btn-sm" aria-label="View ${p.title} live demo">
               <i class="fa-solid fa-rocket"></i> Demo</a>` : ''}
          ${!p.github && !p.demo ? `<span class="btn btn-ghost btn-sm" style="opacity:0.5;cursor:default;">Coming Soon</span>` : ''}
        </div>
      </article>
    `).join('');

    // Pagination / Load More button
    if (paginationWrap) {
      if (allFilteredProjects.length > INITIAL_LIMIT) {
        paginationWrap.innerHTML = `
          <button id="btn-toggle-projects" class="btn btn-outline" style="margin:0 auto;display:inline-flex;align-items:center;gap:var(--space-2);">
            <span>
              <i class="fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}"></i>
              ${isExpanded ? 'Show Fewer Projects' : `View All Projects (${allFilteredProjects.length})`}
            </span>
          </button>
        `;
        const toggleBtn = document.getElementById('btn-toggle-projects');
        if (toggleBtn) {
          toggleBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            renderProjects(currentFilter, true);
            if (!isExpanded) {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }
          });
        }
      } else {
        paginationWrap.innerHTML = '';
      }
    }

    // Trigger reveal for new cards
    requestAnimationFrame(() => {
      container.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
      if (paginationWrap) paginationWrap.classList.add('revealed');
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
          ${p.links.docs ? `<a href="${p.links.docs}" target="_blank" rel="noopener noreferrer"
               class="btn btn-ghost" aria-label="View ${p.name} Documentation">
               <i class="fa-solid fa-book"></i> Docs</a>` : ''}
          ${p.links.github ? `<a href="${p.links.github}" target="_blank" rel="noopener noreferrer"
               class="btn btn-outline" aria-label="View ${p.name} on GitHub">
               <span><i class="fa-brands fa-github"></i> GitHub</span></a>` : ''}
          ${p.links.demo ? `<a href="${p.links.demo}" target="_blank" rel="noopener noreferrer"
               class="btn btn-primary" aria-label="${p.name} live demo">
               <i class="fa-solid fa-rocket"></i> Demo</a>` : ''}
          ${!p.links.github && !p.links.demo && !p.links.docs ? `<span class="btn btn-ghost" style="opacity:0.5;cursor:default">In Development</span>` : ''}
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
      <a href="https://github.com/dev-hints/${r.name}" target="_blank" rel="noopener noreferrer"
         class="repo-card reveal" aria-label="Repository: ${r.name}">
        <div class="repo-name"><i class="fa-solid fa-cube" style="color:var(--color-primary-light);margin-right:0.4rem;"></i>${r.name}</div>
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
      { key: 'github',    name: 'GitHub',      bg: 'rgba(36,41,47,0.5)'       },
      { key: 'instagram', name: 'Instagram',   bg: 'rgba(225,48,108,0.15)'    },
      { key: 'twitter',   name: 'X (Twitter)', bg: 'rgba(29,161,242,0.15)'   },
      { key: 'linkedin',  name: 'LinkedIn',    bg: 'rgba(0,119,181,0.15)'     },
      { key: 'email',     name: 'Email',       bg: 'rgba(99,102,241,0.15)'    },
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
          <span class="social-card-arrow" aria-hidden="true"><i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.85em;"></i></span>
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
