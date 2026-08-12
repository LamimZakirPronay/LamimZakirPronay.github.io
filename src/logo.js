// Renders a logo badge that tries a public logo API first and falls back to
// a generated monogram if the fetch 404s — never shows a broken-image icon.
export function orgBadge(name, domain) {
  const initials = name
    .split(/\s+/)
    .filter((w) => w.length > 1 || /[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  const wrap = document.createElement('div');
  wrap.className = 'org-badge';

  if (domain) {
    const img = document.createElement('img');
    img.src = `https://logo.clearbit.com/${domain}?size=96`;
    img.alt = `${name} logo`;
    img.loading = 'lazy';
    img.onload = () => img.classList.add('loaded');
    img.onerror = () => {
      wrap.innerHTML = `<span class="mono">${initials}</span>`;
    };
    wrap.appendChild(img);
  } else {
    wrap.innerHTML = `<span class="mono">${initials}</span>`;
  }

  return wrap;
}
