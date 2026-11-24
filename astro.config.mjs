import { defineConfig, fontProviders } from 'astro/config';

// Cikti duz HTML'dir; Cloudflare Workers static assets dist/ klasorunu sunar.
export default defineConfig({
  site: 'https://keybrotherstech.com',
  // /hakkimizda -> dist/hakkimizda.html (adresler uzantisiz ve sonda egik cizgisiz kalir)
  build: { format: 'file' },
  trailingSlash: 'never',
  compressHTML: true,
  devToolbar: { enabled: false },
  server: { port: 4321 },
  // Yazi tipleri build sirasinda indirilir ve sitenin kendi sunucusundan verilir
  // (ziyaretci tarayicisi ucuncu tarafa istek atmaz).
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Newsreader',
      cssVariable: '--font-newsreader',
      weights: ['300 600'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Iowan Old Style', 'Palatino Linotype', 'Georgia', 'serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-plex-sans',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Segoe UI', 'system-ui', 'Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-plex-mono',
      weights: [500],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['ui-monospace', 'Cascadia Mono', 'Consolas', 'monospace'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Schibsted Grotesk',
      cssVariable: '--font-schibsted',
      weights: ['400 900'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'Segoe UI', 'sans-serif'],
    },
  ],
});
