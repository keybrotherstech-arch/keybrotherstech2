// Urun ekran goruntuleri ve ayrintili sayfa icerikleri tek yerden okunur.
// Goruntuler her urunun kendi sitesinden alinmis gercek ekran goruntuleridir (acik ve koyu tema).
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/urunler/**/*.png', {
  eager: true,
});

export interface ThemeShot {
  light: ImageMetadata;
  dark: ImageMetadata;
}

// name: "aylex" (ana goruntu) ya da "aylex/1" (ayrintili sayfadaki bolum goruntusu)
export function shot(name: string): ThemeShot {
  const light = files[`../assets/urunler/${name}-light.png`]?.default;
  const dark = files[`../assets/urunler/${name}-dark.png`]?.default;
  if (!light || !dark) throw new Error(`Ekran goruntusu eksik: ${name}`);
  return { light, dark };
}

export function hasShot(name: string): boolean {
  return Boolean(
    files[`../assets/urunler/${name}-light.png`] && files[`../assets/urunler/${name}-dark.png`],
  );
}

export interface ProductDetail {
  key: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  lead: string;
  highlights: { title: string; text: string }[];
  sections: { eyebrow: string; title: string; text: string; bullets: string[] }[];
  audience: { title: string; text: string }[];
  trust: { title: string; items: { title: string; text: string }[] } | null;
  facts: { label: string; value: string }[];
}

const details = import.meta.glob<{ default: ProductDetail }>('./urunler/*.json', { eager: true });

export function detail(key: string): ProductDetail {
  const d = details[`./urunler/${key}.json`]?.default;
  if (!d) throw new Error(`Urun icerigi eksik: ${key}`);
  return d;
}
