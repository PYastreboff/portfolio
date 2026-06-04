(function () {
  'use strict';

  var toggle = document.querySelector('.site-header__toggle');
  var navWrap = document.querySelector('.site-nav-wrap');
  var body = document.body;

  function setMenuOpen(open) {
    if (!navWrap || !toggle) return;
    navWrap.classList.toggle('is-open', open);
    body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    toggle.classList.toggle('is-active', open);
    syncNavAccessibility();
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function syncNavAccessibility() {
    if (!navWrap) return;
    var mobile = window.innerWidth <= 768;
    if (!mobile) {
      navWrap.setAttribute('aria-hidden', 'false');
      if ('inert' in navWrap) navWrap.inert = false;
      return;
    }
    var open = navWrap.classList.contains('is-open');
    navWrap.setAttribute('aria-hidden', open ? 'false' : 'true');
    if ('inert' in navWrap) navWrap.inert = !open;
  }

  if (toggle && navWrap) {
    syncNavAccessibility();

    function onToggle(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      setMenuOpen(!navWrap.classList.contains('is-open'));
    }

    toggle.addEventListener('click', onToggle);

    navWrap.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });

    document.addEventListener('click', function (e) {
      if (!navWrap.classList.contains('is-open')) return;
      if (!navWrap.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) closeMenu();
      syncNavAccessibility();
    });
  }

  function setActiveNav(hash) {
    document.querySelectorAll('.site-nav a[href^="#"]').forEach(function (link) {
      var on = link.getAttribute('href') === hash;
      link.classList.toggle('is-active', on);
      if (on) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  function resetToTop() {
    window.scrollTo(0, 0);
    if (location.hash) {
      history.replaceState(null, '', location.pathname + location.search);
    }
    setActiveNav('#top');
  }

  resetToTop();
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) resetToTop();
  });

  var scrollSpyRegions = document.querySelectorAll('[data-nav]');
  var scrollScheduled = false;

  function getScrollOffset() {
    var header = document.querySelector('.site-header');
    var headerH = header ? header.offsetHeight : 56;
    var extra = parseFloat(getComputedStyle(document.documentElement).fontSize) * 2;
    return headerH + extra;
  }

  function updateScrollSpy() {
    if (!scrollSpyRegions.length) return;

    var headerOffset = getScrollOffset();
    var scrollLine = window.scrollY + headerOffset;
    var activeHash = scrollSpyRegions[0].getAttribute('data-nav');

    scrollSpyRegions.forEach(function (region) {
      var top = region.getBoundingClientRect().top + window.scrollY;
      if (top <= scrollLine + 1) {
        activeHash = region.getAttribute('data-nav');
      }
    });

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      var contact = document.getElementById('contact');
      if (contact) {
        activeHash = '#contact';
      }
    }

    setActiveNav(activeHash);
  }

  function onScrollSpy() {
    if (scrollScheduled) return;
    scrollScheduled = true;
    requestAnimationFrame(function () {
      updateScrollSpy();
      scrollScheduled = false;
    });
  }

  if (scrollSpyRegions.length) {
    window.addEventListener('scroll', onScrollSpy, { passive: true });
    window.addEventListener('resize', onScrollSpy);
    updateScrollSpy();
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (!id || id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      setActiveNav(id);
      var top = target.getBoundingClientRect().top + window.scrollY - getScrollOffset();
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      if (history.replaceState) {
        history.replaceState(null, '', id);
      }
      window.setTimeout(updateScrollSpy, 450);
    });
  });
})();
