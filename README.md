# Lamim Zakir Pronay — Portfolio

A single-page portfolio site with a Matrix / codebreaking-terminal aesthetic,
built with vanilla JS + Vite (no framework, no backend — deploys as static
files to GitHub Pages).

## Before you deploy

Two placeholders need real values in [`src/data.js`](src/data.js):

```js
links: {
  linkedin: 'https://linkedin.com/in/REPLACE_ME',
  github: 'https://github.com/REPLACE_ME',
  scholar: 'https://scholar.google.com/citations?user=REPLACE_ME'
}
```

All résumé content (experience, publications, projects, skills) also lives in
that one file — edit it directly to update the site, no HTML digging required.

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
```

## Deploying to GitHub Pages (yourname.github.io)

This repo is set up as a **user site**, which GitHub Pages serves at the
domain root (`https://<your-username>.github.io/`). That requires the repo
itself to be named exactly `<your-username>.github.io`.

1. Create a GitHub repo named `<your-username>.github.io` (empty, no README).
2. Point this local repo at it and push:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git push -u origin main
   ```
3. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
4. Push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
   which builds the Vite site and publishes `dist/` to Pages automatically.
5. Your site goes live at `https://<your-username>.github.io/` within a
   minute or two of the workflow finishing.

If you later switch to a **project site** (any other repo name) instead,
change `base: '/'` to `base: '/your-repo-name/'` in
[`vite.config.js`](vite.config.js).

## Logos

Company/institute logos in the Experience, Education, and Publications
sections are fetched at runtime from [Clearbit's public logo API](https://clearbit.com/logo)
by domain (configured per-entry in `data.js` as `domain: '...'`). If a logo
fails to load, it falls back automatically to a clean monogram badge — no
broken-image icons, no manual asset management.

## Stack

- [Vite](https://vitejs.dev/) — build tool, no framework
- Vanilla JS (ES modules) — canvas Matrix rain, scramble/decode text effect,
  scroll-reveal via `IntersectionObserver`
- Plain CSS with custom properties — no CSS framework
