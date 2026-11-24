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
      // Govde ve basliklar
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['400 800'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
    },
    {
      // Logodaki "KeyBrothers Tech." yazisinin tipi
      provider: fontProviders.fontsource(),
      name: 'Poppins',
      cssVariable: '--font-poppins',
      weights: [600],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'Segoe UI', 'sans-serif'],
    },
    {
      // Vekilin'in kendi sitesindeki yazi isaretinin tipi
      provider: fontProviders.fontsource(),
      name: 'Schibsted Grotesk',
      cssVariable: '--font-schibsted',
      weights: [800],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'Segoe UI', 'sans-serif'],
    },
  ],
});
