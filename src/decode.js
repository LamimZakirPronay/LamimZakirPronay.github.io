// Cipher "decrypt" text effect — scrambles through random glyphs before each
// character locks into place, evoking a codebreaking / decryption sequence.
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_\\/[]{}—=+*^?#0123456789';

// tickMs: ms between animation ticks. ticksPerChar: how many ticks apart each
// character's lock-in is staggered. Total runtime ≈ chars * ticksPerChar * tickMs.
export function decodeText(el, finalText, { tickMs = 35, ticksPerChar = 2.2 } = {}) {
  const chars = finalText.split('');
  const lockedAt = chars.map((_, i) => Math.round(i * ticksPerChar));
  const totalTicks = Math.round(chars.length * ticksPerChar) + 8;
  let tick = 0;

  function render() {
    let out = '';
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === ' ') {
        out += ' ';
      } else if (tick >= lockedAt[i]) {
        out += chars[i];
      } else {
        out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
    }
    el.textContent = out;
  }

  render();
  const timer = setInterval(() => {
    tick += 1;
    render();
    if (tick >= totalTicks) {
      el.textContent = finalText;
      clearInterval(timer);
    }
  }, tickMs);

  return () => clearInterval(timer);
}

// Runs decodeText on every element once it scrolls into view.
export function observeDecodeTargets(selector = '[data-decode]') {
  const targets = document.querySelectorAll(selector);
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const text = el.dataset.decode || el.textContent;
          if (!el.dataset.decoded) {
            el.dataset.decoded = '1';
            decodeText(el, text);
          }
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.4 }
  );
  targets.forEach((t) => io.observe(t));
}
