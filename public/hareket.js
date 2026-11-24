// Sayfa hareketleri: kaydirdikca beliren icerik, okuma ilerleme cizgisi, ust menu golgesi
// ve ana sayfadaki pencere dizisinin kaydirmayla acilmasi.
// <head> icinde calisir: "reveal" sinifini sayfa cizilmeden once ekler, boylece icerik once gorunup
// sonra kaybolmaz. Cihazda "hareketi azalt" aciksa ya da tarayici desteklemiyorsa hicbir sey yapmaz;
// icerik oldugu gibi gorunur.
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  root.classList.add('reveal');

  var DONE_AFTER = 1150; // en uzun gecis (cizgi: 0,15 sn bekleme + 0,8 sn) + pay, ms

  function show(el, delay) {
    if (el.classList.contains('is-visible')) return;
    if (delay) el.style.setProperty('--reveal-delay', delay + 'ms');
    el.classList.add('is-visible');
    // Belirme bitince isaretler kaldirilir: oge kendi olagan stiline (uzerine gelme gecisleri dahil) doner.
    window.setTimeout(function () {
      el.removeAttribute('data-reveal');
      el.classList.remove('is-visible');
      el.style.removeProperty('--reveal-delay');
    }, delay + DONE_AFTER);
  }

  function setUpReveal() {
    var observer = new IntersectionObserver(
      function (entries) {
        // Ayni anda ekrana giren grup ogeleri sirayla gelir. Tek basina giren oge (ornegin dar ekranda
        // alt alta dizilmis kartlar) beklemez.
        var groups = [];
        var counts = [];
        for (var e = 0; e < entries.length; e++) {
          var entry = entries[e];
          var above = entry.boundingClientRect.top < 0;
          // Gorunur olan ya da ekranin ustunde kalmis (sayfa asagidan acilmis) ogeler gosterilir.
          if (!entry.isIntersecting && !above) continue;
          var el = entry.target;
          observer.unobserve(el);

          var delay = 0;
          var group = entry.isIntersecting ? el.closest('[data-reveal-group]') : null;
          if (group) {
            var at = groups.indexOf(group);
            if (at === -1) {
              groups.push(group);
              counts.push(0);
              at = groups.length - 1;
            }
            var step = parseInt(group.getAttribute('data-reveal-group'), 10) || 80;
            delay = Math.min(counts[at], 6) * step;
            counts[at]++;
          }
          show(el, delay);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    );

    var targets = document.querySelectorAll('[data-reveal]');
    for (var t = 0; t < targets.length; t++) observer.observe(targets[t]);
  }

  function setUpScroll() {
    var header = document.querySelector('.site-header');
    var progress = document.querySelector('.scroll-progress');
    var cascade = document.querySelector('.cascade');
    var ticking = false;
    var max = 0;
    var viewport = 0;

    // Sayfa boyu yalniz yuklenince ve pencere boyutu degisince olculur; kaydirma sirasinda
    // yerlesim hesabi yaptirilmaz.
    function measure() {
      viewport = window.innerHeight;
      max = Math.max(0, root.scrollHeight - viewport);
      update();
    }

    function update() {
      ticking = false;
      var y = window.scrollY || 0;

      if (header) header.classList.toggle('is-scrolled', y > 8);

      // Ilerleme cizgisi yalniz uzun sayfalarda gorunur.
      if (progress) {
        var long = max > viewport * 1.5;
        progress.classList.toggle('is-active', long);
        if (long) progress.style.transform = 'scaleX(' + Math.min(1, Math.max(0, y / max)).toFixed(4) + ')';
      }

      // Ana sayfadaki pencereler kaydirdikca birbirinden hafifce ayrilir.
      if (cascade) cascade.style.setProperty('--spread', Math.min(1, Math.max(0, y / 520)).toFixed(3));
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure, { passive: true });
    // Gorseller ve yazi tipleri yuklenince sayfa boyu degisir.
    window.addEventListener('load', measure);
    if ('ResizeObserver' in window) new ResizeObserver(measure).observe(document.body);
    measure();
  }

  function start() {
    try {
      setUpReveal();
      setUpScroll();
    } catch (error) {
      // Bir sey ters giderse icerik gizli kalmasin.
      root.classList.remove('reveal');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
