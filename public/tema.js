// Koyu / acik tema. <head> icinde, sayfa cizilmeden once calisir (yanip sonme olmasin diye).
// Site ilk giriste koyu temada acilir; dugmeyle acik temaya gecilir ve secim yalniz bu tarayicida saklanir.
(function () {
  var KEY = 'kb-tema';
  var root = document.documentElement;
  var switchTimer = 0;

  function stored() {
    try {
      var v = localStorage.getItem(KEY);
      return v === 'dark' || v === 'light' ? v : null;
    } catch (e) {
      return null;
    }
  }

  function syncButtons(theme) {
    var buttons = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-label', theme === 'dark' ? 'Açık temaya geç' : 'Koyu temaya geç');
    }
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#111316' : '#ffffff');
    syncButtons(theme);
  }

  root.classList.add('js');
  apply(stored() || 'dark');

  document.addEventListener('DOMContentLoaded', function () {
    syncButtons(root.getAttribute('data-theme'));
  });

  document.addEventListener('click', function (event) {
    var target = event.target;
    var button = target && target.closest ? target.closest('[data-theme-toggle]') : null;
    if (!button) return;
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(KEY, next);
    } catch (e) {
      /* saklanamazsa secim yalniz bu sayfa icin gecerli olur */
    }
    // Renkler bir anda degil, kisa bir gecisle degisir.
    root.classList.add('theme-switching');
    window.clearTimeout(switchTimer);
    switchTimer = window.setTimeout(function () {
      root.classList.remove('theme-switching');
    }, 320);
    apply(next);
  });
})();
