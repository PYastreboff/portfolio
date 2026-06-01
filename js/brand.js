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

  function setInViewRegion(activeRegion) {
    document.querySelectorAll('[data-nav]').forEach(function (region) {
      region.classList.toggle('is-inview', region === activeRegion);
    });
  }

  var scrollSpyRegions = document.querySelectorAll('[data-nav]');
  var headerOffset = 72;
  var scrollScheduled = false;

  function updateScrollSpy() {
    if (!scrollSpyRegions.length) return;

    var scrollLine = window.scrollY + headerOffset;
    var activeRegion = scrollSpyRegions[0];
    var activeHash = activeRegion.getAttribute('data-nav');

    scrollSpyRegions.forEach(function (region) {
      var top = region.getBoundingClientRect().top + window.scrollY;
      if (top <= scrollLine + 1) {
        activeRegion = region;
        activeHash = region.getAttribute('data-nav');
      }
    });

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      var contact = document.getElementById('contact');
      if (contact) {
        activeRegion = contact;
        activeHash = '#contact';
      }
    }

    setActiveNav(activeHash);
    setInViewRegion(activeRegion);
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
    if (location.hash) {
      window.setTimeout(updateScrollSpy, 150);
    }
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
      var offset = window.innerWidth <= 768 ? 64 : 72;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      if (history.replaceState) {
        history.replaceState(null, '', id);
      }
      window.setTimeout(updateScrollSpy, 450);
    });
  });
})();
