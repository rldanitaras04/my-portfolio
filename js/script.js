/**
 * ==========================================
 * CONFIGURATION - Replace these placeholders
 * ==========================================
 * YOUR_EMAIL = your actual email
 * YOUR_GITHUB_URL = your GitHub profile URL
 * YOUR_LINKEDIN_URL = your LinkedIn profile URL
 * YOUR_CANONICAL_URL = your deployed site URL
 * YOUR_PROFILE_PHOTO = path to your profile image
 * YOUR_CV_FILE = path to your CV PDF
 */

const CONFIG = {
  email: 'rldanitaras@gmail.com',
  githubUrl: 'https://github.com/rldanitaras04',
  linkedinUrl: 'rldanitaras@gmail.com',
  canonicalUrl: 'https://rldanitaras04.github.io/my-portfolio/'
};

/**
 * Project data for modal
 */
const PROJECT_DATA = {
  'seams-ai': {
    title: 'SEAMS-AI',
    category: 'EdTech / AI / Assessment',
    overview: 'AI-Assisted Secure Assessment and Examination Management System.',
    problem: 'Faculty often face burdensome exam creation, lack of analytics, and risk of exam integrity issues.',
    solution: 'A secure assessment platform concept for managing examinations, AI-assisted question generation, faculty workflows, student assessments, Table of Specifications support, analytics, and assessment integrity.',
    features: [
      'Faculty / Student / Administrator roles',
      'AI-assisted question generation',
      'Source-grounded assessment generation',
      'Exam management',
      'Assessment analytics',
      'Offline interruption recovery',
      'Audit trails',
      'Role-based access control',
      'Secure examination workflows'
    ],
    tech: 'Next.js, Supabase, PostgreSQL, AI APIs, RLS',
    role: 'Concept architecture, security modeling, and academic research',
    status: 'Concept / Prototype'
  },
  'ucare-ai': {
    title: 'UCare AI',
    category: 'Campus Health Information System',
    overview: 'A university clinic information-system concept designed around secure clinical workflows.',
    problem: 'University clinics need systems that protect patient confidentiality while supporting daily operations.',
    solution: 'A privacy-focused architecture with role-based access, clinical information management, and an AI assistant integration.',
    features: [
      'Student / Faculty / Staff workflows',
      'Nurse and clinic staff workflows',
      'Physician and dentist access',
      'RBAC',
      'Privacy-focused architecture',
      'Clinical information management',
      'AI assistant integration'
    ],
    tech: 'Next.js, Supabase, PWA, AI Integration',
    role: 'Concept development and information system design',
    status: 'Concept / Prototype'
  },
};

/**
 * Achievements data (easily editable)
 */
const ACHIEVEMENTS = [
  {
    title: 'ASEAN AI Hackathon 2026',
    description: 'Mentoring involvement with Team Syntaxure SEA / LikasLens.'
  },
  {
    title: 'Startup & Innovation Mentoring',
    description: 'Mentoring student teams in technology innovation and startup-development activities.'
  },
  {
    title: 'Government ICT Experience',
    description: 'Professional experience involving programming, database administration, and ICT systems.'
  }
];

/* ==========================================
   DOM Ready
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initSmoothScroll();
  initActiveNav();
  initRevealAnimations();
  initProjectFilters();
  initProjectModal();
  initDynamicYear();
  initBackToTop();
  initAchievements();
  initScrollProgress();
  initCopyEmail();
});

/* ==========================================
   Theme Management
   ========================================== */
function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(currentTheme);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

/* ==========================================
   Navigation
   ========================================== */
function initNavigation() {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('nav-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked (mobile)
  menu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initSmoothScroll() {
  // Smooth scrolling is handled by CSS scroll-behavior: smooth
  // This function is available for any custom needs
}

/* ==========================================
   Active Navigation Detection
   ========================================== */
function initActiveNav() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const isActive = link.getAttribute('data-nav') === id;
          link.classList.toggle('active', isActive);
          if (isActive) {
            link.setAttribute('aria-current', 'page');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -80% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/* ==========================================
   Reveal Animations
   ========================================== */
function initRevealAnimations() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================
   Project Filtering
   ========================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      // Filter cards
      cards.forEach(card => {
        const categories = card.getAttribute('data-categories') || '';
        const shouldShow = filter === 'all' || categories.split(' ').includes(filter);

        if (shouldShow) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';

          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================
   Project Modal
   ========================================== */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalOverview = document.getElementById('modal-overview');
  const modalProblem = document.getElementById('modal-problem');
  const modalSolution = document.getElementById('modal-solution');
  const modalFeatures = document.getElementById('modal-features');
  const modalTech = document.getElementById('modal-tech');
  const modalRole = document.getElementById('modal-role');
  const modalStatus = document.getElementById('modal-status');

  const closeBtns = modal.querySelectorAll('[data-close-modal]');
  const projectBtns = document.querySelectorAll('[data-project]');

  let lastFocusedElement = null;

  function openModal(projectKey) {
    const data = PROJECT_DATA[projectKey];
    if (!data) return;

    lastFocusedElement = document.activeElement;

    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalOverview.textContent = data.overview;
    modalProblem.textContent = data.problem;
    modalSolution.textContent = data.solution;
    modalTech.textContent = data.tech;
    modalRole.textContent = data.role;
    modalStatus.textContent = data.status;

    modalFeatures.innerHTML = '';
    data.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      modalFeatures.appendChild(li);
    });

    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-labelledby', 'modal-title');

    // Focus management
    const closeBtn = modal.querySelector('.modal__close');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  projectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectKey = btn.getAttribute('data-project');
      openModal(projectKey);
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });
}

/* ==========================================
   Dynamic Footer Year
   ========================================== */
function initDynamicYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================
   Back to Top
   ========================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================
   Scroll Progress Bar
   ========================================== */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

/* ==========================================
   Copy Email
   ========================================== */
function initCopyEmail() {
  const btn = document.getElementById('copy-email');
  if (!btn) return;

  btn.addEventListener('click', () => {
    navigator.clipboard.writeText('rldanitaras@gmail.com').then(() => {
      const originalText = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => {
        btn.textContent = originalText;
      }, 2000);
    }).catch(() => {
      btn.textContent = 'Failed to copy';
      setTimeout(() => {
        btn.textContent = 'Copy Email';
      }, 2000);
    });
  });
}

/* ==========================================
   Achievements (Data-Driven)
   ========================================== */
function initAchievements() {
  const container = document.getElementById('achievements-list');
  if (!container) return;

  container.innerHTML = '';

  ACHIEVEMENTS.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'achievement-card reveal';
    card.style.transitionDelay = `${index * 0.1}s`;

    const title = document.createElement('h3');
    title.className = 'achievement-card__title';
    title.textContent = item.title;

    const desc = document.createElement('p');
    desc.className = 'achievement-card__text';
    desc.textContent = item.description;

    card.appendChild(title);
    card.appendChild(desc);
    container.appendChild(card);
  });

  // Re-init reveal for new cards
  initRevealAnimations();
}

/* ==========================================
   Optional: Add reveal class to key sections
   ========================================== */
document.querySelectorAll('.section, .hero, .identity, .philosophy').forEach(el => {
  el.classList.add('reveal');
});
