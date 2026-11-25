// Ana sayfa ust bolumundeki "veri agi" arka plani: yavasca suzulen noktalar, birbirine yaklasinca
// ince cizgilerle baglanir. Yalniz suslemedir (aria-hidden).
// - Cihazda "hareketi azalt" aciksa ag tek kare olarak, hareketsiz cizilir.
// - Bolum ekranda degilken ya da sekme arka plandayken cizim durur.
(function () {
  var canvas = document.querySelector('.home-hero__net');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var COLOR = '143, 196, 216'; // --ink-accent
  var LINK = 120; // bu mesafeden yakin noktalar baglanir (px)
  var points = [];
  var width = 0;
  var height = 0;
  var running = false;
  var visible = true;
  var frame = 0;

  function seed() {
    var rect = canvas.getBoundingClientRect();
    width = Math.max(1, Math.round(rect.width));
    height = Math.max(1, Math.round(rect.height));
    var ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    // Nokta sayisi alana gore; dar ekranda daha seyrek.
    var count = Math.round((width * height) / (width < 700 ? 16000 : 11000));
    count = Math.max(24, Math.min(count, 110));
    points = [];
    for (var i = 0; i < count; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r: 1.1 + Math.random() * 1.1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    var i, j, p, q, dx, dy, d2;
    var max2 = LINK * LINK;
    ctx.lineWidth = 1;
    for (i = 0; i < points.length; i++) {
      p = points[i];
      for (j = i + 1; j < points.length; j++) {
        q = points[j];
        dx = p.x - q.x;
        dy = p.y - q.y;
        d2 = dx * dx + dy * dy;
        if (d2 < max2) {
          ctx.strokeStyle = 'rgba(' + COLOR + ',' + (0.3 * (1 - Math.sqrt(d2) / LINK)).toFixed(3) + ')';
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    }
    ctx.fillStyle = 'rgba(' + COLOR + ', 0.75)';
    for (i = 0; i < points.length; i++) {
      p = points[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function step() {
    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    }
  }

  function loop() {
    if (!running) return;
    step();
    draw();
    frame = window.requestAnimationFrame(loop);
  }

  function update() {
    var should = !reduce && visible && !document.hidden;
    if (should && !running) {
      running = true;
      frame = window.requestAnimationFrame(loop);
    } else if (!should && running) {
      running = false;
      window.cancelAnimationFrame(frame);
    }
  }

  seed();
  draw();

  if (!reduce) {
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        update();
      }).observe(canvas);
    }
    document.addEventListener('visibilitychange', update);
    update();
  }

  var resizeTimer = 0;
  window.addEventListener(
    'resize',
    function () {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(function () {
        seed();
        draw();
      }, 150);
    },
    { passive: true },
  );
})();
