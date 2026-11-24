import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Yayindaki sayfalar. Yeni sayfa eklenince bu listeye de eklenir.
const paths = [
  '/',
  '/urunler',
  '/aylex',
  '/vekilin',
  '/promptturk',
  '/hizmetler',
  '/hakkimizda',
  '/iletisim',
  '/kvkk-aydinlatma-metni',
  '/gizlilik-politikasi',
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = paths
    .map(
      (p) =>
        `  <url><loc>${site.url}${p === '/' ? '/' : p}</loc><lastmod>${lastmod}</lastmod></url>`,
    )
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
