import { defineConfig } from 'vite';

// GitHub "user site" (yourname.github.io) is served from the repo root,
// so the Vite base path stays "/". If this ever moves to a project-page
// repo (github.com/you/some-repo), change base to "/some-repo/".
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
