/**
 * Portofolio Josua Abrianto Harianja
 * JavaScript Murni (Vanilla ES6+)
 * Fitur: Sticky header, scroll progress, scroll reveal, active navigation,
 * mobile drawer menu, ambient cursor glow, copy email, dan contact form validation.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. ELEMEN DOM & VARIABEL
  // ==========================================================================
  const header = document.getElementById('header');
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const cursorGlow = document.getElementById('cursorGlow');
  const btnCopyEmail = document.getElementById('btnCopyEmail');
  const copyToast = document.getElementById('copyToast');
  const contactForm = document.getElementById('contactForm');
  const formNotification = document.getElementById('formNotification');
  const currentYearSpan = document.getElementById('currentYear');

  // Set tahun dinamis pada footer
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // ==========================================================================
  // 2. STICKY HEADER & SCROLL PROGRESS BAR
  // ==========================================================================
  let isTicking = false;

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    
    // Sticky header class
    if (scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll progress bar calculation
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0 && scrollProgressBar) {
      const progressPercent = Math.min((scrollY / docHeight) * 100, 100);
      scrollProgressBar.style.width = `${progressPercent}%`;
    }

    // Active Navigation (ScrollSpy)
    highlightNavOnScroll(scrollY);

    isTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(handleScroll);
      isTicking = true;
    }
  }, { passive: true });

  // Initial call on load
  handleScroll();

  // ==========================================================================
  // 3. ACTIVE NAV LINK HIGHLIGHT (SCROLLSPY)
  // ==========================================================================
  function highlightNavOnScroll(scrollY) {
    const headerHeight = header.offsetHeight + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // ==========================================================================
  // 4. MOBILE MENU DRAWER
  // ==========================================================================
  const toggleMobileMenu = (forceClose = false) => {
    const isOpen = forceClose ? false : !mobileMenu.classList.contains('is-open');

    mobileToggle.classList.toggle('is-active', isOpen);
    mobileMenu.classList.toggle('is-open', isOpen);
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));

    // Cegah scroll pada body saat menu terbuka
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileMenu());
  }

  // Tutup mobile menu saat link diklik
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(true));
  });

  // Tutup jika tombol Escape ditekan
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      toggleMobileMenu(true);
    }
  });

  // ==========================================================================
  // 5. AMBIENT CURSOR GLOW (DESKTOP)
  // ==========================================================================
  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  if (cursorGlow && !isTouchDevice()) {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorGlow.style.opacity = '1';
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      cursorGlow.style.opacity = '0';
    });

    // Smooth lerp animation loop
    const animateCursor = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      cursorGlow.style.left = `${currentX}px`;
      cursorGlow.style.top = `${currentY}px`;

      requestAnimationFrame(animateCursor);
    };

    requestAnimationFrame(animateCursor);
  }

  // ==========================================================================
  // 6. SCROLL REVEAL (INTERSECTION OBSERVER)
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal-up');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback untuk browser lawas tanpa observer
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // ==========================================================================
  // 7. SALIN EMAIL KE CLIPBOARD & TOAST
  // ==========================================================================
  if (btnCopyEmail && copyToast) {
    let toastTimeout;

    btnCopyEmail.addEventListener('click', async () => {
      const email = 'josuaabrianto15@gmail.com';

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback legacy execCommand
          const tempInput = document.createElement('textarea');
          tempInput.value = email;
          tempInput.style.position = 'fixed';
          tempInput.style.opacity = '0';
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        // Tampilkan Toast
        copyToast.classList.add('show');

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
          copyToast.classList.remove('show');
        }, 3200);

      } catch (err) {
        console.error('Gagal menyalin email:', err);
      }
    });
  }

  // ==========================================================================
  // 8. FORMULIR KONTAK & VALIDASI INTERAKTIF
  // ==========================================================================
  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('btnSubmitForm');
    const submitBtnText = submitBtn.querySelector('.btn-text');

    // Email regex validation
    const isValidEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };

    // Validasi field individual
    const validateField = (input, isValid, errorId) => {
      const errorMsg = document.getElementById(errorId);
      if (!isValid) {
        input.classList.add('is-invalid');
        if (errorMsg) errorMsg.style.display = 'block';
      } else {
        input.classList.remove('is-invalid');
        if (errorMsg) errorMsg.style.display = 'none';
      }
      return isValid;
    };

    // Hapus error saat user mulai mengetik
    [nameInput, emailInput, messageInput].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          input.classList.remove('is-invalid');
          const errorMsg = input.nextElementSibling;
          if (errorMsg && errorMsg.classList.contains('input-error-msg')) {
            errorMsg.style.display = 'none';
          }
        });
      }
    });

    // Form submission handler
    contactForm.addEventListener('submit', (e) => {
      const nameVal = nameInput.value.trim();
      const emailVal = emailInput.value.trim();
      const messageVal = messageInput.value.trim();

      const isNameValid = validateField(nameInput, nameVal.length >= 2, 'nameError');
      const isEmailValid = validateField(emailInput, isValidEmail(emailVal), 'emailError');
      const isMessageValid = validateField(messageInput, messageVal.length >= 8, 'messageError');

      if (!isNameValid || !isEmailValid || !isMessageValid) {
        e.preventDefault();
        return;
      }

      // Validasi sukses: biarkan form submit ke https://formsubmit.co/josuaabrianto15@gmail.com
      submitBtn.disabled = true;
      submitBtnText.textContent = 'Mengarahkan ke Pengiriman...';
    });
  }

  // ==========================================================================
  // 9. SMOOTH SCROLL BACK TO TOP
  // ==========================================================================
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================================================
  // 10. INTERACTIVE MEDIA PREVIEW SWITCHER (SIMTOKO Web Roles)
  // ==========================================================================
  const switchPills = document.querySelectorAll('.switch-pill');
  switchPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const parentMedia = pill.closest('.project-media');
      if (!parentMedia) return;

      const img = parentMedia.querySelector('.project-img');
      const targetSrc = pill.getAttribute('data-img');
      const targetAlt = pill.getAttribute('data-alt');

      if (img && targetSrc && img.getAttribute('src') !== targetSrc) {
        img.style.opacity = '0.35';
        setTimeout(() => {
          img.src = targetSrc;
          if (targetAlt) img.alt = targetAlt;
          img.style.opacity = '1';
        }, 140);
      }

      parentMedia.querySelectorAll('.switch-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

});

