import './style.css';
import {
  profile,
  publications,
  researchExperience,
  education,
  teaching,
  experience,
  projects,
  leadership,
  skills
} from './data.js';

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
  return `${fmtDate(start)} – ${end ? fmtDate(end) : 'Present'}`;
}

// ---------------------------------------------------------------------------
// renderers
// ---------------------------------------------------------------------------
function renderAbout() {
  const el = document.getElementById('about-text');
  el.innerHTML = profile.about.map((p) => `<p>${p}</p>`).join('');
}

function renderPublications() {
  const el = document.getElementById('pub-list');
  publications.forEach((p) => {
    const item = document.createElement('div');
    item.className = 'pub-item';
    item.innerHTML = `
      <h4>${p.title}</h4>
      <div class="pub-venue">${p.venue} · ${p.year}</div>
      <p class="pub-summary">${p.summary}</p>
      <a class="pub-doi" href="https://doi.org/${p.doi}" target="_blank" rel="noopener">doi.org/${p.doi}</a>
    `;
    el.appendChild(item);
  });
}

function renderTimeline(containerId, entries) {
  const el = document.getElementById(containerId);
  entries.forEach((job) => {
    const item = document.createElement('div');
    item.className = 'tl-item';
    const bullets = job.bullets.map((b) => `<li>${b}</li>`).join('');
    item.innerHTML = `
      <div class="tl-head"><h3>${job.role}</h3><span class="org">${job.org}</span></div>
      <div class="meta">${range(job.start, job.end)} · ${job.location}</div>
      <ul>${bullets}</ul>
    `;
    el.appendChild(item);
  });
}

function renderEducation() {
  const el = document.getElementById('education-list');
  education.forEach((e) => {
    const item = document.createElement('div');
    item.className = 'simple-item';
    item.innerHTML = `
      <h3>${e.school}</h3>
      <div class="org">${e.degree}</div>
      <div class="meta">${range(e.start, e.end)} · ${e.location}</div>
    `;
    el.appendChild(item);
  });
  document.getElementById('leadership-note').innerHTML = `<strong>Leadership.</strong> ${leadership}`;
}

function renderTeaching() {
  const el = document.getElementById('teaching-list');
  teaching.forEach((t) => {
    const item = document.createElement('div');
    item.className = 'simple-item';
    item.innerHTML = `
      <h3>${t.role}</h3>
      <div class="org">${t.org}</div>
      <div class="meta">${range(t.start, t.end)}</div>
      <p class="note">${t.note}</p>
    `;
    el.appendChild(item);
  });
}

function renderProjects() {
  const el = document.getElementById('project-list');
  projects.forEach((p) => {
    const item = document.createElement('div');
    item.className = 'project-item';
    const tags = p.stack.join(' · ');
    item.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <div class="tag-row">${tags}</div>
    `;
    el.appendChild(item);
  });
}

function renderSkills() {
  const el = document.getElementById('skills-list');
  Object.entries(skills).forEach(([category, list]) => {
    const row = document.createElement('div');
    row.className = 'skill-row';
    row.innerHTML = `<span class="skill-category">${category}</span><span class="skill-items">${list.join(', ')}</span>`;
    el.appendChild(row);
  });
}

function renderContact() {
  const el = document.getElementById('contact-links');
  const links = [
    { label: profile.email, href: `mailto:${profile.email}` },
    { label: 'LinkedIn', href: profile.links.linkedin },
    { label: 'GitHub', href: profile.links.github },
    { label: 'Google Scholar', href: profile.links.scholar }
  ];
  links.forEach((l) => {
    const a = document.createElement('a');
    a.href = l.href;
    a.className = 'contact-link';
    a.textContent = l.label;
    if (!l.href.startsWith('mailto')) {
      a.target = '_blank';
      a.rel = 'noopener';
    }
    el.appendChild(a);
  });
}

// ---------------------------------------------------------------------------
// nav behaviour
// ---------------------------------------------------------------------------
function initNav() {
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
          if (match) navAnchors.forEach((a) => a.classList.toggle('active', a === match));
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
    { threshold: 0.1 }
  );
  targets.forEach((t) => io.observe(t));
}

// ---------------------------------------------------------------------------
// boot
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderAbout();
  renderPublications();
  renderTimeline('research-experience-list', researchExperience);
  renderEducation();
  renderTimeline('experience-list', experience);
  renderTeaching();
  renderProjects();
  renderSkills();
  renderContact();

  initNav();
  initReveal();

  document.getElementById('year').textContent = new Date().getFullYear();
});
