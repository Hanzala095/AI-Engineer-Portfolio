// ===== Theme toggle (persisted) =====
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme') || 'dark';
  root.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  });
})();

// ===== Header on scroll =====
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== Mobile menu =====
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
  navLinks.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => navLinks.classList.remove('active'))
  );
}

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section[id]');
const navA = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.pageYOffset >= sec.offsetTop - 140) current = sec.getAttribute('id');
  });
  navA.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ===== Staggered grid reveal (projects / certs / research / skills) =====
const staggerEls = document.querySelectorAll('.stagger');
const staggerIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      staggerIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
staggerEls.forEach(el => staggerIO.observe(el));

// ===== Count-up hero stats =====
const counters = document.querySelectorAll('.num[data-count]');
const countIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + (p === 1 ? suffix : '');
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    countIO.unobserve(el);
  });
}, { threshold: 0.4 });
counters.forEach(el => countIO.observe(el));

// ===== Hero role typewriter =====
(function () {
  const el = document.getElementById('typeWord');
  if (!el) return;
  const words = [
    'Computer Vision Engineer',
    'NLP Practitioner',
    'Medical AI Builder',
    'Cybersecurity Enthusiast',
    'Machine Learning Engineer'
  ];
  let wi = 0, ci = 0, deleting = false;

  function step() {
    const word = words[wi];
    if (!deleting) {
      ci++;
      el.textContent = word.slice(0, ci);
      if (ci === word.length) {
        deleting = true;
        setTimeout(step, 1600);
        return;
      }
    } else {
      ci--;
      el.textContent = word.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        wi = (wi + 1) % words.length;
      }
    }
    setTimeout(step, deleting ? 35 : 60);
  }
  setTimeout(step, 900);
})();

// ===== Back to top =====
const toTop = document.getElementById('toTop');
if (toTop) {
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 700);
  });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== Project filter =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.style.display = show ? '' : 'none';
    });
  });
});

// ===== Footer year =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Contact form — EmailJS =====
(function () {
  if (window.emailjs) emailjs.init('Me2ymjtlVy5Xrmq37');

  const form = document.getElementById('contactForm');
  if (!form) return;
  const button = document.getElementById('cfSubmit');
  const toast = document.getElementById('toast');
  const toastIcon = document.getElementById('toastIcon');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(title, message, success = true) {
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    toast.classList.toggle('error', !success);
    toastIcon.className = success ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // honeypot
    if (document.getElementById('cf-website').value !== '') return;

    const fromName = document.getElementById('cf-name').value.trim();
    const fromEmail = document.getElementById('cf-email').value.trim();
    const subject = document.getElementById('cf-subject').value.trim();
    const message = document.getElementById('cf-message').value.trim();

    if (fromName.length < 2) return showToast('Invalid Name', 'Please enter your full name.', false);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(fromEmail)) return showToast('Invalid Email', 'Please enter a valid email address.', false);
    if (subject.length < 3) return showToast('Invalid Subject', 'Please enter a subject.', false);
    if (message.length < 10) return showToast('Message Too Short', 'Message should contain at least 10 characters.', false);

    const originalHTML = button.innerHTML;
    button.disabled = true;
    button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    emailjs.send('service_rbu06pl', 'template_gzyz5tb', {
      from_name: fromName,
      from_email: fromEmail,
      subject: subject,
      message: message
    }).then(() => {
      showToast('Message Sent', "Thank you! I'll get back to you soon.");
      form.reset();
      button.innerHTML = '<i class="fa-solid fa-circle-check"></i> Sent';
      setTimeout(() => { button.disabled = false; button.innerHTML = originalHTML; }, 2200);
    }).catch((error) => {
      console.error(error);
      showToast('Sending Failed', 'Something went wrong. Please try again.', false);
      button.disabled = false;
      button.innerHTML = originalHTML;
    });
  });
})();
