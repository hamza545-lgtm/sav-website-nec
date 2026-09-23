document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.style.display === 'flex';
      nav.style.display = isOpen ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '76px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = '#FFFFFF';
      nav.style.padding = '20px 32px';
      nav.style.borderBottom = '1px solid #E3E7EC';
      nav.style.gap = '18px';
    });
  }

  // Scroll-reveal: fade content up as it enters the viewport.
  try {
    var revealTargets = document.querySelectorAll(
      '.section-head, .feature-row, .audience-card, .info-card, .blog-card, ' +
      '.step, .offering, .compliance-block, .split-panel, .consult-card-wrap, ' +
      '.quote-block, .article-cta'
    );

    revealTargets.forEach(function (el) {
      el.classList.add('reveal-el');
    });

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

      revealTargets.forEach(function (el) { observer.observe(el); });

      // Safety net: if anything is somehow missed, reveal it after a short delay.
      window.setTimeout(function () {
        document.querySelectorAll('.reveal-el:not(.is-visible)').forEach(function (el) {
          el.classList.add('is-visible');
        });
      }, 2500);
    } else {
      // No IntersectionObserver support: reveal everything immediately.
      revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
    }
  } catch (e) {
    // If anything goes wrong, make sure content is never left invisible.
    document.querySelectorAll('.reveal-el').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }
});
