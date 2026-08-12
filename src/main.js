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
// fox guide — sits still, then runs + hops to a new spot each time you cross
// into a new section, landing roughly in step with how far through the page
// that section is. A click/tap gets a separate small in-place jump + message.
// ---------------------------------------------------------------------------
const FOX_MESSAGES = [
  'Five research papers published, and counting.',
  'Currently building Salesforce + AI systems at Accelerize360.',
  'Five Salesforce certifications, backed by production work.',
  "I'm just here to keep you company while you scroll.",
  'Say hello — the contact section has my email.'
];

function initFox() {
  const guide = document.getElementById('fox-guide');
  const facing = document.getElementById('fox-facing');
  const bob = document.getElementById('fox-bob');
  const btn = document.getElementById('fox-btn');
  const label = document.getElementById('fox-label');
  const legFront = document.getElementById('fox-leg-front');
  const legBack = document.getElementById('fox-leg-back');
  const tailWrap = document.getElementById('fox-tail-wrap');
  const earWrap = document.getElementById('fox-ear-wrap');
  if (!guide || !facing || !bob || !btn || !label || !legFront || !legBack || !tailWrap || !earWrap) {
    return { goToSection: () => {}, announce: () => {} };
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MARGIN = 20;
  const HOP_HEIGHT = 15; // per-bound height, not a single arc over the whole run
  const PX_PER_BOUND = 140; // roughly one stride length, so distance sets stride count
  const MS_PER_BOUND = 150;
  const MIN_BOUNDS = 2;
  const MAX_BOUNDS = 6;
  const FRONT_REACH = 34; // deg, leg swing at full extension
  const BACK_REACH = 30;
  const TAIL_SWING = 10;
  const EAR_TILT = 12;

  function xForFraction(frac) {
    const foxWidth = facing.getBoundingClientRect().width || 92;
    const travel = Math.max(0, window.innerWidth - foxWidth - MARGIN * 2);
    return MARGIN + Math.min(1, Math.max(0, frac)) * travel;
  }

  let currentX = MARGIN;
  let facingLeft = false;
  let runToken = 0;
  guide.style.left = currentX + 'px';

  function resetPose() {
    bob.style.transform = '';
    legFront.style.transform = '';
    legBack.style.transform = '';
    tailWrap.style.transform = '';
    earWrap.style.transform = '';
  }

  let labelHideTimer = null;
  let alertTimer = null;
  function showLabel(text, duration) {
    label.textContent = text;
    label.classList.add('show');
    guide.classList.add('alert');
    clearTimeout(labelHideTimer);
    clearTimeout(alertTimer);
    alertTimer = setTimeout(() => guide.classList.remove('alert'), 350);
    labelHideTimer = setTimeout(() => label.classList.remove('show'), duration);
  }

  function announce(text) {
    showLabel(text, 1800);
  }

  // accelerate into the run, decelerate into the landing — reads as a dash
  // rather than one long glide-to-a-stop
  const easeRun = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  function runTo(targetX, onArrive) {
    if (prefersReduced) {
      currentX = targetX;
      guide.style.left = currentX + 'px';
      if (onArrive) onArrive();
      return;
    }
    const dx = targetX - currentX;
    if (Math.abs(dx) < 1) {
      if (onArrive) onArrive();
      return;
    }
    const myRun = ++runToken;
    const startX = currentX;
    const dist = Math.abs(dx);
    const bounds = Math.min(MAX_BOUNDS, Math.max(MIN_BOUNDS, Math.round(dist / PX_PER_BOUND)));
    const durationMs = bounds * MS_PER_BOUND;
    const startTime = performance.now();
    const goingLeft = dx < 0;
    const dir = goingLeft ? -1 : 1;
    if (goingLeft !== facingLeft) {
      facingLeft = goingLeft;
      facing.classList.toggle('face-left', facingLeft);
    }
    bob.classList.remove('jump');

    function step(now) {
      if (myRun !== runToken) return; // a newer run superseded this one
      const t = Math.min(1, (now - startTime) / durationMs);
      currentX = startX + dx * easeRun(t);
      guide.style.left = currentX + 'px';

      // one shared phase drives the hop, both legs' stride, the tail lag and
      // the ear tilt — that shared timing is what makes it read as one gait
      const phase = t * bounds * Math.PI;
      const stride = Math.sin(phase); // -1..1, one full stride cycle per bound
      const hopFactor = Math.abs(stride); // 0 at every landing, 1 at every peak

      bob.style.transform = `translateY(${-hopFactor * HOP_HEIGHT}px) scaleY(${1 + hopFactor * 0.05})`;
      legFront.style.transform = `rotate(${dir * FRONT_REACH * stride}deg)`;
      legBack.style.transform = `rotate(${-dir * BACK_REACH * stride}deg)`;
      tailWrap.style.transform = `rotate(${dir * TAIL_SWING * Math.sin(phase - 0.6)}deg)`;
      earWrap.style.transform = `rotate(${-dir * EAR_TILT * hopFactor}deg)`;

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        resetPose();
        if (onArrive) onArrive();
      }
    }
    requestAnimationFrame(step);
  }

  function goToSection(fraction, name) {
    runTo(xForFraction(fraction), () => announce(name));
  }

  let msgIndex = 0;
  btn.addEventListener('click', () => {
    showLabel(FOX_MESSAGES[msgIndex % FOX_MESSAGES.length], 2600);
    msgIndex++;
    if (!prefersReduced) {
      runToken++; // cancel any in-flight run so the click-jump owns the bob transform
      resetPose();
      bob.classList.add('jump');
      setTimeout(() => bob.classList.remove('jump'), 520);
    }
  });

  window.addEventListener('resize', () => {
    const foxWidth = facing.getBoundingClientRect().width || 92;
    const maxX = Math.max(MARGIN, window.innerWidth - foxWidth - MARGIN);
    if (currentX > maxX) {
      currentX = maxX;
      guide.style.left = currentX + 'px';
    }
  });

  return { goToSection, announce };
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
          const index = sections.indexOf(entry.target);
          const match = navAnchors.find((a) => a.getAttribute('href') === `#${entry.target.id}`);
          navAnchors.forEach((a) => a.classList.toggle('active', a === match));
          if (match) {
            const fraction = sections.length > 1 ? index / (sections.length - 1) : 0;
            fox.goToSection(fraction, match.textContent);
          }
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
