/**
 * StrangeInfinity — Particle & Starfield Engine
 * assets/js/particles.js
 *
 * Canvas-based animated cosmic background:
 *   • Starfield with twinkling
 *   • Floating nebula orbs
 *   • Mouse parallax interaction
 *   • Shooting stars
 *   • Connection lines between close particles
 */

const ParticleEngine = (() => {
  let canvas, ctx, W, H, animId;
  let mouse = { x: W / 2, y: H / 2 };

  // ── Configuration ──
  const CFG = {
    starCount:      160,
    nebulaCount:    5,
    connectionDist: 120,
    mouseRadius:    200,
    shootInterval:  4000,   // ms between shooting stars
  };

  // ── Data arrays ──
  let stars = [];
  let nebulae = [];
  let shootingStars = [];

  // ── Utility helpers ──
  const rand    = (a, b)    => Math.random() * (b - a) + a;
  const randInt = (a, b)    => Math.floor(rand(a, b + 1));
  const lerp    = (a, b, t) => a + (b - a) * t;

  // ── Color helpers ──
  const COLORS = ['rgba(168,85,247,', 'rgba(6,182,212,', 'rgba(244,114,182,', 'rgba(192,132,252,'];
  const starColor = () => COLORS[randInt(0, COLORS.length - 1)];

  // ── Star class ──
  class Star {
    constructor() { this.reset(); }
    reset() {
      this.x     = rand(0, W);
      this.y     = rand(0, H);
      this.z     = rand(0.1, 1);        // depth (parallax weight)
      this.r     = rand(0.4, 1.8) * this.z;
      this.color = starColor();
      this.alpha = rand(0.2, 0.9);
      this.alphaDir = rand(-0.003, 0.003);
      this.vx   = rand(-0.05, 0.05) * this.z;
      this.vy   = rand(-0.02, 0.02) * this.z;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha += this.alphaDir;
      if (this.alpha <= 0.1 || this.alpha >= 1) this.alphaDir *= -1;
      // Mouse parallax
      const dx = (mouse.x / W - 0.5) * this.z * 0.6;
      const dy = (mouse.y / H - 0.5) * this.z * 0.6;
      this.x += dx;
      this.y += dy;
      // Wrap around
      if (this.x < -5) this.x = W + 5;
      if (this.x > W + 5) this.x = -5;
      if (this.y < -5) this.y = H + 5;
      if (this.y > H + 5) this.y = -5;
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle   = this.color + this.alpha + ')';
      ctx.shadowBlur  = this.r * 4;
      ctx.shadowColor = this.color + '0.8)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // ── Nebula class ──
  class Nebula {
    constructor() {
      this.x      = rand(0, W);
      this.y      = rand(0, H);
      this.r      = rand(120, 280);
      this.color  = COLORS[randInt(0, COLORS.length - 1)];
      this.alpha  = rand(0.03, 0.12);
      this.alphaDir = rand(-0.0002, 0.0002);
      this.dx     = rand(-0.08, 0.08);
      this.dy     = rand(-0.04, 0.04);
    }
    update() {
      this.x += this.dx;
      this.y += this.dy;
      this.alpha += this.alphaDir;
      if (this.alpha <= 0.02 || this.alpha >= 0.15) this.alphaDir *= -1;
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
      this.len  = rand(80, 180);
      this.spd  = rand(8, 16);
      this.ang  = rand(0.3, 0.7);  // radians (downward-right)
      this.life = 1;
      this.dec  = rand(0.015, 0.03);
    }
    update() { this.life -= this.dec; this.x += this.spd; this.y += this.spd * 0.4; }
    draw() {
      const tail = Math.cos(this.ang) * this.len;
      const tailY = Math.sin(this.ang) * this.len;
      const g = ctx.createLinearGradient(this.x - tail, this.y - tailY, this.x, this.y);
      g.addColorStop(0, `rgba(255,255,255,0)`);
      g.addColorStop(1, `rgba(192,132,252,${this.life * 0.9})`);
      ctx.strokeStyle = g;
      ctx.lineWidth   = 1.5 * this.life;
      ctx.beginPath();
      ctx.moveTo(this.x - tail, this.y - tailY);
      ctx.lineTo(this.x, this.y);
      ctx.stroke();
    }
    isDead() { return this.life <= 0; }
  }

  // ── Draw connection lines between stars ──
  function drawConnections() {
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx   = stars[i].x - stars[j].x;
        const dy   = stars[i].y - stars[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CFG.connectionDist) {
          const alpha = (1 - dist / CFG.connectionDist) * 0.08;
          ctx.strokeStyle = `rgba(124,58,237,${alpha})`;
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

    // Nebulae (behind stars)
    nebulae.forEach(n => { n.update(); n.draw(); });

    // Connection lines
    drawConnections();

    // Stars
    stars.forEach(s => { s.update(); s.draw(); });

    // Shooting stars
    shootingStars = shootingStars.filter(ss => !ss.isDead());
    shootingStars.forEach(ss => { ss.update(); ss.draw(); });

    animId = requestAnimationFrame(render);
  }

  // ── Resize handler ──
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    mouse = { x: W / 2, y: H / 2 };
  }

  // ── Shoot a new star periodically ──
  let shootTimer;
  function scheduleShoot() {
    shootTimer = setInterval(() => {
      shootingStars.push(new ShootingStar());
    }, CFG.shootInterval);
  }

  // ── Public API ──
  function init() {
    canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resize();

    // Create initial particles
    stars   = Array.from({ length: CFG.starCount }, () => new Star());
    nebulae = Array.from({ length: CFG.nebulaCount }, () => new Nebula());

    // Event listeners
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

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
