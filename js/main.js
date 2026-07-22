/* Barrion — interações do protótipo */
(function () {
  'use strict';

  /* ---- Ano no rodapé ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Tema claro/escuro ---- */
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var saved = localStorage.getItem('barrion-theme');
  if (saved) root.setAttribute('data-theme', saved);
  syncIcon();

  function syncIcon() {
    if (!toggle) return;
    toggle.textContent = root.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('barrion-theme', next);
      syncIcon();
    });
  }

  /* ---- Menu mobile ---- */
  var navToggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll('.section, .service-card, .news-item, .av-card, .value-strip');
  revealEls.forEach(function (el) { el.classList.add('reveal'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Contadores animados ---- */
  var counters = document.querySelectorAll('[data-count]');
  var counted = false;
  function runCounters() {
    if (counted) return;
    counted = true;
    counters.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var prefix = el.getAttribute('data-prefix') || '';
      var start = 0;
      var dur = 1400;
      var t0 = performance.now();
      function step(now) {
        var p = Math.min((now - t0) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + Math.round(start + (target - start) * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  var numSection = document.getElementById('numeros');
  if (numSection && 'IntersectionObserver' in window) {
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { runCounters(); io2.disconnect(); } });
    }, { threshold: 0.4 });
    io2.observe(numSection);
  } else {
    runCounters();
  }

  /* ---- Formulário (protótipo) ---- */
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      if (note) note.hidden = false;
      form.reset();
    });
  }
})();
