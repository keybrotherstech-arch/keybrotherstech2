(function () {
    'use strict';

    const preloader = document.getElementById('preloader');
    const preloaderBar = document.getElementById('preloaderBar');
    const preloaderPercent = document.getElementById('preloaderPercent');
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scrollProgress');
    const isInnerPage = document.body.classList.contains('inner-page');

    /* =====================
       PRELOADER
       ===================== */
    if (preloader && preloaderBar && preloaderPercent) {
        document.body.classList.add('loading');
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 12 + 3;
            if (progress > 100) progress = 100;
            preloaderBar.style.width = progress + '%';
            preloaderPercent.textContent = Math.floor(progress) + '%';
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    preloader.classList.add('hidden');
                    document.body.classList.remove('loading');
                    navbar.classList.add('visible');
                    startTerminal();
                }, 400);
            }
        }, 80);
    }

    /* =====================
       SCROLL PROGRESS BAR
       ===================== */
    function updateScrollProgress() {
        if (!scrollProgress) return;
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollProgress.style.width = progress + '%';
    }

    /* =====================
       NAVBAR SCROLL
       ===================== */
    let lastScrollY = 0;
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        updateScrollProgress();
        updateTimelineFill();
        lastScrollY = window.scrollY;
    }, { passive: true });

    /* =====================
       MOBILE MENU
       ===================== */
    const burger = document.getElementById('navBurger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (burger && mobileMenu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    /* =====================
       SMOOTH SCROLL
       ===================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - 72;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    /* =====================
       TERMINAL ANIMATION
       ===================== */
    function startTerminal() {
        const lines = [
            { id: 'termLine1', type: 'cmd' },
            { id: 'termLine2', type: 'output' },
            { id: 'termLine3', type: 'cmd' },
            { id: 'termLine4', type: 'output' },
            { id: 'termLine5', type: 'cmd' },
            { id: 'termLine6', type: 'output' },
        ];

        let delay = 300;
        lines.forEach(line => {
            const el = document.getElementById(line.id);
            if (!el) return;
            setTimeout(() => {
                el.classList.add('visible');
                if (line.type === 'cmd') {
                    const cmdEl = el.querySelector('.terminal-cmd');
                    if (cmdEl) typeText(cmdEl, cmdEl.getAttribute('data-text'), 25);
                }
            }, delay);
            delay += line.type === 'cmd' ? 1200 : 500;
        });

        setTimeout(() => {
            const cursor = document.querySelector('.terminal-cursor-line');
            if (cursor) cursor.classList.add('visible');
        }, delay + 200);
    }

    function typeText(el, text, speed) {
        let i = 0;
        el.textContent = '';
        const timer = setInterval(() => {
            if (i < text.length) { el.textContent += text.charAt(i); i++; }
            else clearInterval(timer);
        }, speed);
    }

    /* =====================
       SCROLL REVEAL + COUNTERS
       ===================== */
    const animated = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const d = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
                setTimeout(() => entry.target.classList.add('in-view'), d);
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });
    animated.forEach(el => observer.observe(el));

    /* =====================
       COUNTER ANIMATION
       ===================== */
    const counters = document.querySelectorAll('.counter-value[data-target]');
    let countersAnimated = false;

    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                animateCounters();
                counterObserver.disconnect();
            }
        });
    }, { threshold: 0.3 });

    const counterSection = document.querySelector('.counters-section');
    if (counterSection) counterObserver.observe(counterSection);

    function animateCounters() {
        counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const isDecimal = target % 1 !== 0;
            const duration = 2000;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = eased * target;

                counter.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);

                if (progress < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
        });
    }

    /* =====================
       TIMELINE FILL
       ===================== */
    const timelineFill = document.getElementById('timelineFill');
    const timelineSection = document.querySelector('.process-home');

    function updateTimelineFill() {
        if (!timelineFill || !timelineSection) return;
        const rect = timelineSection.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
            const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (sectionHeight + windowHeight * 0.5)));
            timelineFill.style.height = (progress * 100) + '%';
        }
    }

    /* =====================
       GLOW CARD MOUSE TRACKING
       ===================== */
    document.querySelectorAll('.glow-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', x + '%');
            card.style.setProperty('--mouse-y', y + '%');
        });
    });

    /* =====================
       PARALLAX HERO GLOWS
       ===================== */
    const heroGlow1 = document.querySelector('.hero-glow-1');
    const heroGlow2 = document.querySelector('.hero-glow-2');

    window.addEventListener('scroll', () => {
        if (!heroGlow1 || !heroGlow2) return;
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
            heroGlow1.style.transform = `translateX(-50%) translateY(${scrollY * 0.15}px)`;
            heroGlow2.style.transform = `translateY(${scrollY * -0.1}px)`;
        }
    }, { passive: true });

    /* Active nav link logic removed — nav links point to separate pages, not anchors */

    /* =====================
       INNER PAGE: SHOW NAVBAR IMMEDIATELY
       ===================== */
    if (isInnerPage) {
        navbar.classList.add('visible');
    }
})();
