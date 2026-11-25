// Şirket künyesi ve site genelinde tekrar eden bilgiler tek yerde durur.
// Buradaki bir değişiklik bütün sayfalara yansır.

export const site = {
  url: 'https://keybrotherstech.com',
  name: 'KeyBrothers Teknoloji',
  legalName: 'KeyBrothers Teknoloji Yazılım ve Danışmanlık Limited Şirketi',
  tagline: 'Kamu ve özel sektör için yazılım ve yapay zeka',
  description:
    'Ankara merkezli KeyBrothers Teknoloji, kamu kurumları ve şirketler için ihtiyaca özel yazılım, yapay zeka ve otomasyon çözümleri geliştirir.',
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
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/urunler', label: 'Ürünler' },
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

// details: hizmetin kapsamı (Hizmetler sayfasında ve ana sayfada listelenir).
export const services = [
  {
    slug: 'saas',
    title: 'SaaS Ürün Geliştirme',
    summary: 'Bulut tabanlı, ölçeklenebilir ürünleri fikirden yayına tasarlıyor ve geliştiriyoruz.',
    details: [
      'İhtiyaç analizi ve ürün tasarımı',
      'Web ve mobil uygulama geliştirme',
      'Bulut altyapısı, ölçekleme ve izleme',
      'Yayın sonrası bakım ve geliştirme',
    ],
  },
  {
    slug: 'yapay-zeka',
    title: 'Yapay Zeka ve Otomasyon',
    summary: 'İş süreçlerini hızlandıran yapay zeka ve otomasyon çözümleri kuruyoruz.',
    details: [
      'Kurum verisiyle çalışan yapay zeka asistanları',
      'Belge okuma, sınıflandırma ve özetleme',
      'Tekrarlayan işler için iş akışı otomasyonu',
      'Mevcut sistemlerle entegrasyon',
    ],
  },
  {
    slug: 'pazarlama',
    title: 'Pazarlama Teknolojileri',
    summary: 'Kampanya yönetimi ve içerik optimizasyonu için araçlar tasarlıyoruz.',
    details: [
      'Kampanya yönetimi ve raporlama araçları',
      'İçerik üretimi ve optimizasyonu',
      'Kitle tepkisini yayından önce sınayan simülasyonlar',
      'Ölçüm ve analiz panelleri',
    ],
  },
  {
    slug: 'medya-oyun',
    title: 'Dijital Medya ve Oyun',
    summary: 'Etkileşimli deneyimler ve oyunlaştırma kurguları üzerinde çalışıyoruz.',
    details: [
      'Etkileşimli web deneyimleri',
      'Oyunlaştırma kurguları',
      'Dijital içerik ve medya ürünleri',
      'Eğitim ve tanıtım amaçlı etkileşimli içerik',
    ],
  },
] as const;

// Çalıştığımız alanlar. "main" olanlar büyük kartla, diğerleri yetkinlik alanı olarak gösterilir.
export const sectors = [
  {
    key: 'kamu',
    main: true,
    title: 'Kamu kurumları',
    summary:
      'Kamu kurumlarının işleyişine ve mevzuatına uygun yazılım ve yapay zeka çözümleri geliştiriyoruz; güvenliği ve sürdürülebilirliği tasarımın başında ele alıyoruz.',
  },
  {
    key: 'ozel',
    main: true,
    title: 'Özel sektör',
    summary:
      'Şirketlerin iş süreçlerini hızlandıran yazılımlar ve otomasyonlar kuruyor, bunları mevcut sistemlerle bütünleştiriyoruz.',
  },
  {
    key: 'hukuk',
    title: 'Hukuk ve mevzuat',
    summary: 'Mevzuat, içtihat ve resmi belgelerle çalışan arama, analiz ve belge sistemleri.',
  },
  {
    key: 'kamu-verisi',
    title: 'Kamu verisi ve raporlama',
    summary: 'Kamuya açık kayıtları toplayan, işleyen ve sade bir dille sunan veri platformları.',
  },
  {
    key: 'iletisim',
    title: 'Medya ve iletişim',
    summary: 'Kurumların iletişim kararlarını yayından önce sınayan analiz ve simülasyon araçları.',
  },
] as const;

export const process = [
  { title: 'Keşif', summary: 'İhtiyacı ve kapsamı birlikte netleştiririz.' },
  { title: 'Tasarım', summary: 'Akışı ve arayüzü, geliştirmeden önce görünür kılarız.' },
  { title: 'Geliştirme', summary: 'Kısa döngülerle ilerler, her adımı sizinle paylaşırız.' },
  { title: 'Yayın ve destek', summary: 'Yayından sonra da ürünün başında kalırız.' },
] as const;

export const reasons = [
  { title: 'Şeffaf süreç', summary: 'Kapsam, takvim ve ilerleme baştan sona açıktır.' },
  {
    title: 'Güvenlik ve gizlilik baştan',
    summary:
      'Kişisel verilerin korunmasını ve erişim güvenliğini sonradan değil, tasarım aşamasında ele alırız.',
  },
  {
    title: 'Büyümeye hazır mimari',
    summary: 'Sistemleri, kullanıcı ve veri arttıkça yeniden yazılmadan genişleyebilecek biçimde kurarız.',
  },
  {
    title: 'Uzun vadeli bakım',
    summary:
      'Yayın sonrası destek ve geliştirme işin parçasıdır; kendi platformlarımızı da yayında tutarak bu işin ne gerektirdiğini biliriz.',
  },
] as const;
