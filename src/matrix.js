// Matrix digital-rain background, rendered on a fixed full-viewport canvas.
const CHARS =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';

export function initMatrixRain(canvas) {
  const ctx = canvas.getContext('2d');
  const fontSize = 15;
  let columns = 0;
  let drops = [];
  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    columns = Math.ceil(width / fontSize);
    drops = new Array(columns).fill(0).map(() => Math.floor((Math.random() * height) / fontSize) * -1);
  }

  function draw() {
    ctx.fillStyle = 'rgba(5, 8, 10, 0.15)';
    ctx.fillRect(0, 0, width, height);

    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < columns; i++) {
      const char = CHARS[(Math.random() * CHARS.length) | 0];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      const isHead = Math.random() > 0.93;
      ctx.fillStyle = isHead ? '#c8ffe0' : 'rgba(0, 255, 102, 0.55)';
      ctx.fillText(char, x, y);

      if (y > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  let rafId = null;
  let lastFrame = 0;
  const frameInterval = 1000 / 24;

  function loop(t) {
    rafId = requestAnimationFrame(loop);
    if (t - lastFrame < frameInterval) return;
    lastFrame = t;
    draw();
  }

  resize();
  window.addEventListener('resize', resize);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    rafId = requestAnimationFrame(loop);
  } else {
    draw();
  }

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
    window.removeEventListener('resize', resize);
  };
}
