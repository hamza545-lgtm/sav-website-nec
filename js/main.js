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

  // Count-up numbers: animate from 0 to their target once visible.
  try {
    var counters = document.querySelectorAll('.count-num[data-target]');
    if (counters.length && 'IntersectionObserver' in window) {
      var countObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-target'), 10) || 0;
          var prefix = el.getAttribute('data-prefix') || '';
          var suffix = el.getAttribute('data-suffix') || '';
          var duration = 1400;
          var startTime = null;

          function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = prefix + Math.round(eased * target) + suffix;
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              el.textContent = prefix + target + suffix;
            }
          }
          window.requestAnimationFrame(step);
          countObserver.unobserve(el);
        });
      }, { threshold: 0.4 });

      counters.forEach(function (el) { countObserver.observe(el); });
    } else {
      counters.forEach(function (el) {
        var target = parseInt(el.getAttribute('data-target'), 10) || 0;
        el.textContent = (el.getAttribute('data-prefix') || '') + target + (el.getAttribute('data-suffix') || '');
      });
    }
  } catch (e) {
    document.querySelectorAll('.count-num[data-target]').forEach(function (el) {
      el.textContent = (el.getAttribute('data-prefix') || '') + (el.getAttribute('data-target') || '') + (el.getAttribute('data-suffix') || '');
    });
  }

  // "Find Your Path" interactive quiz
  try {
    var quiz = document.getElementById('path-quiz');
    if (quiz) {
      var steps = quiz.querySelectorAll('.quiz-step');
      var dots = quiz.querySelectorAll('.quiz-progress-dot');

      function showStep(id) {
        steps.forEach(function (s) {
          s.classList.toggle('is-active', s.getAttribute('data-step') === id);
        });
        var idx = 0;
        if (id === 'result') idx = 2;
        else if (id !== '1') idx = 1;
        dots.forEach(function (d, i) {
          d.classList.toggle('is-done', i <= idx);
        });
      }

      quiz.querySelectorAll('[data-goto]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          showStep(btn.getAttribute('data-goto'));
        });
      });

      var resultTitle = quiz.querySelector('.quiz-result h3');
      var resultText = quiz.querySelector('.quiz-result p');
      var resultCta = quiz.querySelector('.quiz-result .btn');

      var clientOptions = quiz.querySelectorAll('[data-path="client"]');
      var expertOptions = quiz.querySelectorAll('[data-path="expert"]');

      clientOptions.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var need = btn.getAttribute('data-need');
          resultTitle.textContent = 'Sounds like a fit for our Clients team.';
          resultText.textContent = "Based on what you're looking for (" + need + "), the fastest next step is to submit a request \u2014 our team typically follows up within one business day.";
          resultCta.setAttribute('href', 'clients.html#request');
          resultCta.textContent = 'Request an Expert';
          showStep('result');
        });
      });

      expertOptions.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var role = btn.getAttribute('data-role');
          resultTitle.textContent = 'You sound like a strong fit for our network.';
          resultText.textContent = "Professionals with a " + role + " background are exactly who our clients ask for most often. Apply below and our team will review your background.";
          resultCta.setAttribute('href', 'experts.html#apply');
          resultCta.textContent = 'Apply to Join';
          showStep('result');
        });
      });
    }
  } catch (e) {
    // Fail silently; the quiz is a progressive enhancement, not core functionality.
  }
});
