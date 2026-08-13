/**
 * StrangeInfinity — Particle & Starfield Engine
 * assets/js/particles.js
 *
 * Highly optimized, 60fps mobile-ready cosmic particle background.
 */

const ParticleEngine = (() => {
  let canvas, ctx, W, H, animId;
  let mouse = { x: 0, y: 0 };
  let isMobile = false;

  // ── Dynamic Mobile-Aware Configuration ──
  const CFG = {
    starCount:      80,
    nebulaCount:    3,
    connectionDist: 90,
    mouseRadius:    160,
    shootInterval:  5000,
  };

  // ── Data arrays ──
  let stars = [];
  let nebulae = [];
  let shootingStars = [];

  // ── Utility helpers ──
  const rand    = (a, b) => Math.random() * (b - a) + a;
  const randInt = (a, b) => Math.floor(rand(a, b + 1));

  // ── Color helpers ──
  const COLORS = ['rgba(99,102,241,', 'rgba(6,182,212,', 'rgba(236,72,153,', 'rgba(129,140,248,'];
  const starColor = () => COLORS[randInt(0, COLORS.length - 1)];

  // ── Star class ──
  class Star {
    constructor() { this.reset(); }
    reset() {
      this.x     = rand(0, W);
      this.y     = rand(0, H);
      this.z     = rand(0.1, 1);
      this.r     = rand(0.5, 1.6) * this.z;
      this.color = starColor();
      this.alpha = rand(0.2, 0.9);
      this.alphaDir = rand(-0.003, 0.003);
      this.vx   = rand(-0.04, 0.04) * this.z;
      this.vy   = rand(-0.02, 0.02) * this.z;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha += this.alphaDir;
      if (this.alpha <= 0.1 || this.alpha >= 1) this.alphaDir *= -1;

      if (!isMobile) {
        const dx = (mouse.x / W - 0.5) * this.z * 0.4;
        const dy = (mouse.y / H - 0.5) * this.z * 0.4;
        this.x += dx;
        this.y += dy;
      }

      if (this.x < -5) this.x = W + 5;
      if (this.x > W + 5) this.x = -5;
      if (this.y < -5) this.y = H + 5;
      if (this.y > H + 5) this.y = -5;
    }
    draw() {
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle   = this.color + this.alpha + ')';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // ── Nebula class ──
  class Nebula {
    constructor() {
      this.x        = rand(0, W);
      this.y        = rand(0, H);
      this.r        = rand(100, 220);
      this.color    = COLORS[randInt(0, COLORS.length - 1)];
      this.alpha    = rand(0.02, 0.08);
      this.alphaDir = rand(-0.0002, 0.0002);
      this.dx       = rand(-0.06, 0.06);
      this.dy       = rand(-0.03, 0.03);
    }
    update() {
      this.x += this.dx;
      this.y += this.dy;
      this.alpha += this.alphaDir;
      if (this.alpha <= 0.01 || this.alpha >= 0.1) this.alphaDir *= -1;
      if (this.x + this.r < 0)  this.x = W + this.r;
      if (this.x - this.r > W)  this.x = -this.r;
      if (this.y + this.r < 0)  this.y = H + this.r;
      if (this.y - this.r > H)  this.y = -this.r;
    }
    draw() {
      const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
      g.addColorStop(0, this.color + this.alpha + ')');
      g.addColorStop(1, this.color + '0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // ── Shooting Star ──
  class ShootingStar {
    constructor() {
      this.x    = rand(0, W * 0.7);
      this.y    = rand(0, H * 0.4);
      this.len  = rand(60, 140);
      this.spd  = rand(8, 14);
      this.ang  = 0.5;
      this.life = 1;
      this.dec  = rand(0.02, 0.04);
    }
    update() { this.life -= this.dec; this.x += this.spd; this.y += this.spd * 0.4; }
    draw() {
      const tail = Math.cos(this.ang) * this.len;
      const tailY = Math.sin(this.ang) * this.len;
      const g = ctx.createLinearGradient(this.x - tail, this.y - tailY, this.x, this.y);
      g.addColorStop(0, `rgba(255,255,255,0)`);
      g.addColorStop(1, `rgba(129,140,248,${this.life * 0.8})`);
      ctx.strokeStyle = g;
      ctx.lineWidth   = 1.2 * this.life;
      ctx.beginPath();
      ctx.moveTo(this.x - tail, this.y - tailY);
      ctx.lineTo(this.x, this.y);
      ctx.stroke();
    }
    isDead() { return this.life <= 0; }
  }

  // ── Draw connection lines between stars ──
  function drawConnections() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const limit = stars.length;
    for (let i = 0; i < limit; i++) {
      for (let j = i + 1; j < limit; j++) {
        const dx   = stars[i].x - stars[j].x;
        const dy   = stars[i].y - stars[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CFG.connectionDist) {
          const alpha = (1 - dist / CFG.connectionDist) * (isLight ? 0.04 : 0.06);
          ctx.strokeStyle = isLight ? `rgba(79,70,229,${alpha})` : `rgba(99,102,241,${alpha})`;
          ctx.lineWidth   = 0.5;
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.stroke();
        }
      }
    }
  }

  // ── Main render loop ──
  function render() {
    ctx.clearRect(0, 0, W, H);

    nebulae.forEach(n => { n.update(); n.draw(); });
    drawConnections();
    stars.forEach(s => { s.update(); s.draw(); });

    shootingStars = shootingStars.filter(ss => !ss.isDead());
    shootingStars.forEach(ss => { ss.update(); ss.draw(); });

    animId = requestAnimationFrame(render);
  }

  // ── Resize handler ──
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    isMobile = W < 768;

    CFG.starCount      = isMobile ? 35 : 75;
    CFG.nebulaCount    = isMobile ? 2  : 3;
    CFG.connectionDist = isMobile ? 60 : 90;

    mouse = { x: W / 2, y: H / 2 };

    stars   = Array.from({ length: CFG.starCount }, () => new Star());
    nebulae = Array.from({ length: CFG.nebulaCount }, () => new Nebula());
  }

  // ── Shoot periodic star ──
  let shootTimer;
  function scheduleShoot() {
    shootTimer = setInterval(() => {
      if (shootingStars.length < 2) shootingStars.push(new ShootingStar());
    }, isMobile ? 8000 : 5000);
  }

  // ── Public API ──
  function init() {
    canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d', { alpha: true });
    resize();

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    window.addEventListener('touchmove', e => {
      if (e.touches.length) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        render();
      }
    });

    scheduleShoot();
    render();
  }

  function destroy() {
    cancelAnimationFrame(animId);
    clearInterval(shootTimer);
    window.removeEventListener('resize', resize);
  }

  return { init, destroy };
})();
