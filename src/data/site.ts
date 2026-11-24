// Şirket künyesi ve site genelinde tekrar eden bilgiler tek yerde durur.
// Buradaki bir değişiklik bütün sayfalara yansır.

export const site = {
  url: 'https://keybrotherstech.com',
  name: 'KeyBrothers Teknoloji',
  legalName: 'KeyBrothers Teknoloji Yazılım ve Danışmanlık Limited Şirketi',
  tagline: 'Kendi ürününü geliştiren yazılım şirketi',
  description:
    'KeyBrothers Teknoloji; hukuk platformu AyLex, Meclis takip platformu Vekilin ve tepki simülasyonu PromptTurk’ün geliştiricisidir. Kamu ve özel sektör kurumlarına yazılım ve yapay zeka çözümleri üretir.',
  locale: 'tr_TR',
  email: 'info@keybrotherstech.com',
  phone: {
    display: '0850 302 44 68',
    href: 'tel:+908503024468',
  },
  address: {
    street: 'MTC Plaza, Emek Mah., Bişkek Cad. No: 125-127 D:16',
    postalCode: '06490',
    district: 'Çankaya',
    city: 'Ankara',
    country: 'TR',
    oneLine: 'MTC Plaza, Emek Mah., Bişkek Cad. No: 125-127 D:16, 06490 Çankaya/Ankara',
  },
  registry: {
    mersis: '0549094442000001',
    tradeRegistry: 'Ankara Ticaret Sicil No 540788',
    kep: 'keybrothersteknoloji@hs01.kep.tr',
  },
} as const;

export const nav = [
  { href: '/urunler', label: 'Ürünler' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
] as const;

// Ürün metinleri her ürünün kendi sitesinden alınmıştır.
export const products = [
  {
    key: 'aylex',
    name: 'AyLex',
    domain: 'aylex.ai',
    url: 'https://aylex.ai',
    category: 'Hukuk teknolojisi',
    title: 'Hukukun her aracı, tek platformda.',
    summary:
      'AyLex, içtihat aramadan dosya takibine, tevkilden UYAP entegrasyonuna kadar bir avukatın gündelik araçlarını tek ekranda toplar. Yapay zeka taslağı kurar; son söz her zaman avukattadır.',
    features: [
      'Kaynak gösteren yapay zeka asistanı',
      '81 ilde ücretsiz ve komisyonsuz tevkil ağı',
      'UYAP, UETS, KEP ve e-imza entegrasyonu',
    ],
    linkLabel: 'aylex.ai’yi ziyaret edin',
    shotAlt: 'AyLex sitesinde kaynak gösteren yapay zeka asistanı bölümünün ekran görüntüsü',
  },
  {
    key: 'vekilin',
    name: 'Vekilin',
    domain: 'vekilin.com',
    url: 'https://vekilin.com',
    category: 'Sivil teknoloji',
    title: 'Vekilin Meclis’te ne yaptı?',
    summary:
      'İlini seç, vekilini bul. Vekilin; her milletvekilinin yazılı sorularını, kanun tekliflerini, açık oylamalardaki oylarını ve konuşmalarını TBMM kayıtlarından alır, sade bir dille gösterir.',
    features: [
      'İl il, vekil vekil Meclis haritası',
      'Sorular, kanunlar, teklifler ve oylamalar tek yerde',
      'Her bilgi TBMM kaydına bağlı',
    ],
    linkLabel: 'vekilin.com’u ziyaret edin',
    shotAlt: 'Vekilin ana sayfasındaki arama alanı ve Türkiye Meclis haritasının ekran görüntüsü',
  },
  {
    key: 'promptturk',
    name: 'PromptTurk',
    domain: 'promptturk.com',
    url: 'https://promptturk.com',
    category: 'Yapay zeka',
    title: 'Bir şey yapmadan önce, dünyanın tepkisini gör.',
    summary:
      'O paylaşım, o ürün, o karar: yayınlamadan önce tepkiyi sahnede izleyin. Gerçek sosyal medya dilinden öğrenen yapay zeka; yorumları, tartışmaları ve mesajları sekiz platformda canlandırır.',
    features: [
      'Bireyler için eğlence ve merak',
      'Kurumlar için öngörü: lansmandan önce test',
      'Her kişi, her yorum, her sayı sentetik',
    ],
    linkLabel: 'promptturk.com’u ziyaret edin',
    shotAlt: 'PromptTurk ana sayfasının ekran görüntüsü',
  },
] as const;

export const services = [
  {
    slug: 'saas',
    title: 'SaaS Ürün Geliştirme',
    summary: 'Bulut tabanlı, ölçeklenebilir ürünleri fikirden yayına tasarlıyor ve geliştiriyoruz.',
  },
  {
    slug: 'yapay-zeka',
    title: 'Yapay Zeka ve Otomasyon',
    summary: 'İş süreçlerini hızlandıran yapay zeka ve otomasyon çözümleri kuruyoruz.',
  },
  {
    slug: 'pazarlama',
    title: 'Pazarlama Teknolojileri',
    summary: 'Kampanya yönetimi ve içerik optimizasyonu için araçlar tasarlıyoruz.',
  },
  {
    slug: 'medya-oyun',
    title: 'Dijital Medya ve Oyun',
    summary: 'Etkileşimli deneyimler ve oyunlaştırma kurguları üzerinde çalışıyoruz.',
  },
] as const;

export const process = [
  { title: 'Keşif', summary: 'İhtiyacı ve kapsamı birlikte netleştiririz.' },
  { title: 'Tasarım', summary: 'Akışı ve arayüzü, geliştirmeden önce görünür kılarız.' },
  { title: 'Geliştirme', summary: 'Kısa döngülerle ilerler, her adımı sizinle paylaşırız.' },
  { title: 'Yayın ve destek', summary: 'Yayından sonra da ürünün başında kalırız.' },
] as const;

export const reasons = [
  {
    title: 'Kendi ürünümüzü işletiyoruz',
    summary: 'Yazılımı teslim edip bırakmayı değil, yaşatmayı biliyoruz.',
  },
  { title: 'Şeffaf süreç', summary: 'Kapsam, takvim ve ilerleme baştan sona açıktır.' },
  { title: 'Uzun vadeli bakım', summary: 'Yayın sonrası destek ve geliştirme işin parçasıdır.' },
] as const;
