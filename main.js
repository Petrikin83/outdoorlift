/* ============================================================
   OutdoorLift — main.js
   ============================================================ */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- Hero video ----
const heroVideo = document.querySelector('.hero-media video');
if (heroVideo && prefersReducedMotion) {
  heroVideo.pause();
  heroVideo.removeAttribute('autoplay');
}

// ---- Scroll reveal (fade+rise for .reveal, clip-path wipe for .reveal-img) ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const delay = parseFloat(el.style.transitionDelay) || 0;
    el.classList.add('is-visible');
    revealObserver.unobserve(el);
    // Clear stagger delay after animation so hover states aren't affected
    if (delay > 0) {
      setTimeout(() => { el.style.transitionDelay = ''; }, (delay + 1.0) * 1000);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-img').forEach(el => revealObserver.observe(el));

// ---- Stagger delays for grouped elements ----
[
  ['.trust-bar .trust-stat',       0.09],
  ['.projects-grid .project-item', 0.07],
  ['.pillars-grid .pillar',        0.11],
  ['.capacity-tiers .tier',        0.08],
  ['.faq-list .faq-item',          0.07],
].forEach(([selector, step]) => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.style.transitionDelay = `${i * step}s`;
  });
});

// ---- Counter animation for trust bar numbers ----
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function runCounters() {
  const DURATION = 2000;
  const startTime = performance.now();
  const nums = document.querySelectorAll('.trust-num');

  const configs = [
    { el: nums[0], from: 2000, to: 2009, fmt: v => Math.round(v).toString() },
    { el: nums[1], from: 0,    to: 1.2,  fmt: v => v.toFixed(1) + 'M' },
    { el: nums[2], from: 0,    to: 2100, fmt: v => {
      const n = Math.round(v);
      return n.toLocaleString('en-US') + ' kg';
    }},
  ];

  function tick(now) {
    const t = Math.min((now - startTime) / DURATION, 1);
    const e = easeOutExpo(t);
    configs.forEach(({ el, from, to, fmt }) => {
      if (el) el.textContent = fmt(from + (to - from) * e);
    });
    if (t < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

const trustBar = document.querySelector('.trust-bar');
if (trustBar && !prefersReducedMotion) {
  const counterObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      runCounters();
      counterObserver.disconnect();
    }
  }, { threshold: 0.6 });
  counterObserver.observe(trustBar);
}

// ---- Hero parallax ----
const heroMedia   = document.querySelector('.hero-media');
const heroSection = document.querySelector('.hero');
let   rafPending  = false;

function applyParallax() {
  const scrollY = window.scrollY;
  if (heroSection && scrollY < heroSection.offsetHeight * 1.3) {
    heroMedia.style.transform = `translateY(${scrollY * 0.28}px)`;
  }
  rafPending = false;
}

if (heroMedia && heroSection && !prefersReducedMotion) {
  window.addEventListener('scroll', () => {
    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(applyParallax);
    }
  }, { passive: true });
}

// ---- Header scroll state ----
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

// ---- Mobile nav ----
const navToggle = document.querySelector('.nav-toggle');
const mobileNav  = document.getElementById('mobile-nav');

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
    mobileNav.setAttribute('aria-hidden', String(!open));
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
    });
  });
}
