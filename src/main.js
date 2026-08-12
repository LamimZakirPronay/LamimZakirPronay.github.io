import './style.css';
import { profile, experience, teaching, education, publications, projects, leadership, skills } from './data.js';
import { orgBadge } from './logo.js';

// ---------------------------------------------------------------------------
// formatting helpers
// ---------------------------------------------------------------------------
function fmtDate(ym) {
  if (!ym) return 'Present';
  const [y, m] = ym.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return m ? `${months[parseInt(m, 10) - 1]} ${y}` : y;
}

function range(start, end) {
  return `${fmtDate(start)} — ${end ? fmtDate(end) : 'Present'}`;
}

// ---------------------------------------------------------------------------
// renderers
// ---------------------------------------------------------------------------
function renderExperience() {
  const el = document.getElementById('experience-list');
  experience.forEach((job) => {
    const item = document.createElement('div');
    item.className = 'tl-item';
    item.appendChild(orgBadge(job.org, job.domain));
    const bullets = job.bullets.map((b) => `<li>${b}</li>`).join('');
    item.insertAdjacentHTML(
      'beforeend',
      `
      <div class="tl-head"><h3>${job.role}</h3><span class="org">@ ${job.org}</span></div>
      <div class="meta">${range(job.start, job.end)} · ${job.location}</div>
      <ul>${bullets}</ul>
    `
    );
    el.appendChild(item);
  });
}

function renderSimpleList(containerId, items, mapFn) {
  const el = document.getElementById(containerId);
  items.forEach((entry) => {
    const item = document.createElement('div');
    item.className = 'simple-item';
    item.appendChild(orgBadge(entry.org || entry.school, entry.domain));
    item.insertAdjacentHTML('beforeend', mapFn(entry));
    el.appendChild(item);
  });
}

function renderTeaching() {
  renderSimpleList(
    'teaching-list',
    teaching,
    (t) => `
    <div class="body">
      <h3>${t.role}</h3>
      <div class="org">@ ${t.org}</div>
      <div class="meta">${range(t.start, t.end)}</div>
    </div>
  `
  );
}

function renderEducation() {
  renderSimpleList(
    'education-list',
    education,
    (e) => `
    <div class="body">
      <h3>${e.school}</h3>
      <div class="org">${e.degree}</div>
      <div class="meta">${range(e.start, e.end)} · ${e.location}</div>
    </div>
  `
  );
}

function renderLeadership() {
  const el = document.getElementById('leadership-list');
  leadership.forEach((l) => {
    const item = document.createElement('div');
    item.className = 'simple-item';
    item.appendChild(orgBadge(l.org, l.domain));
    const bullets = l.bullets.map((b) => `<li>${b}</li>`).join('');
    item.insertAdjacentHTML(
      'beforeend',
      `
      <div class="body">
        <h3>${l.role}</h3>
        <div class="org">@ ${l.org}</div>
        <div class="meta">${range(l.start, l.end)}</div>
        <ul>${bullets}</ul>
      </div>
    `
    );
    el.appendChild(item);
  });
}

function renderPublications() {
  const el = document.getElementById('pub-list');
  publications.forEach((p) => {
    const item = document.createElement('div');
    item.className = 'pub-item card';
    item.appendChild(orgBadge(p.venue, p.domain));
    item.insertAdjacentHTML(
      'beforeend',
      `
      <div class="pub-body">
        <h3>${p.title}</h3>
        <div class="pub-venue">${p.venue} · ${p.year}</div>
        <div class="pub-summary">${p.summary}</div>
        <a class="pub-doi" href="https://doi.org/${p.doi}" target="_blank" rel="noopener">doi.org/${p.doi} ↗</a>
      </div>
    `
    );
    el.appendChild(item);
  });
}

function renderProjects() {
  const el = document.getElementById('project-list');
  projects.forEach((p) => {
    const card = document.createElement('div');
    card.className = 'project-card card';
    const tags = p.stack.map((s) => `<span class="tag">${s}</span>`).join('');
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <div class="tag-row">${tags}</div>
    `;
    el.appendChild(card);
  });
}

function renderSkills() {
  const el = document.getElementById('skills-list');
  Object.entries(skills).forEach(([category, list]) => {
    const card = document.createElement('div');
    card.className = 'skill-card card';
    const tags = list.map((s) => `<span class="tag">${s}</span>`).join('');
    card.innerHTML = `<h4>${category}</h4><div class="tag-row">${tags}</div>`;
    el.appendChild(card);
  });
}

function renderContact() {
  const el = document.getElementById('contact-links');
  const links = [
    { label: `mail: ${profile.email}`, href: `mailto:${profile.email}` },
    { label: 'linkedin', href: profile.links.linkedin },
    { label: 'github', href: profile.links.github },
    { label: 'scholar', href: profile.links.scholar }
  ];
  links.forEach((l) => {
    const a = document.createElement('a');
    a.href = l.href;
    a.className = 'btn ghost';
    a.textContent = l.label;
    if (!l.href.startsWith('mailto')) {
      a.target = '_blank';
      a.rel = 'noopener';
    }
    el.appendChild(a);
  });
}

// ---------------------------------------------------------------------------
// fox guide — tilts with scroll motion, announces the active section
// ---------------------------------------------------------------------------
function initFox() {
  const guide = document.getElementById('fox-guide');
  const rotateEl = document.getElementById('fox-rotate');
  const label = document.getElementById('fox-label');
  if (!guide || !rotateEl || !label) return { announce: () => {} };

  let lastY = window.scrollY;
  let tiltResetTimer = null;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function onScroll() {
    if (prefersReduced) return;
    const y = window.scrollY;
    const delta = y - lastY;
    lastY = y;
    const tilt = Math.max(-10, Math.min(10, delta * 1.4));
    rotateEl.style.transform = `rotate(${tilt}deg)`;
    clearTimeout(tiltResetTimer);
    tiltResetTimer = setTimeout(() => {
      rotateEl.style.transform = 'rotate(0deg)';
    }, 220);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  let labelHideTimer = null;
  let perkTimer = null;
  function announce(text) {
    label.textContent = text;
    label.classList.add('show');
    guide.classList.add('listening');
    clearTimeout(labelHideTimer);
    clearTimeout(perkTimer);
    perkTimer = setTimeout(() => guide.classList.remove('listening'), 500);
    labelHideTimer = setTimeout(() => label.classList.remove('show'), 1800);
  }

  return { announce };
}

// ---------------------------------------------------------------------------
// nav behaviour
// ---------------------------------------------------------------------------
function initNav(fox) {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => links.classList.remove('open')));

  const sections = [...document.querySelectorAll('main section[id]')];
  const navAnchors = [...links.querySelectorAll('a')];
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const match = navAnchors.find((a) => a.getAttribute('href') === `#${entry.target.id}`);
          navAnchors.forEach((a) => a.classList.toggle('active', a === match));
          if (match) fox.announce(match.textContent);
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px' }
  );
  sections.forEach((s) => io.observe(s));
}

// ---------------------------------------------------------------------------
// reveal-on-scroll for generic .reveal blocks
// ---------------------------------------------------------------------------
function initReveal() {
  const targets = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((t) => io.observe(t));
}

// ---------------------------------------------------------------------------
// boot
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderExperience();
  renderTeaching();
  renderEducation();
  renderPublications();
  renderProjects();
  renderLeadership();
  renderSkills();
  renderContact();

  const fox = initFox();
  initNav(fox);
  initReveal();

  document.getElementById('year').textContent = new Date().getFullYear();
});
