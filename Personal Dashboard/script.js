/* ============================= */
/* Smooth Scroll Function        */
/* ============================= */
function scrollToSection(targetId) {
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav-menu');
  const targetElement = document.getElementById(targetId);
  if (header && nav && targetElement) {
    const offset = header.offsetHeight + nav.offsetHeight + 20;
    const targetPosition = targetElement.offsetTop - offset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  }
}

/* ============================= */
/* Footer Contact Overlay        */
/* ============================= */
function expandContact() {
  const footer = document.getElementById('contact-footer');
  if (footer) {
    footer.classList.add('expanded');
  }
}

function collapseContact() {
  const footer = document.querySelector('.footer');
  const footerFull = document.querySelector('.footer-full');
  if (footer && footerFull) {
    footerFull.classList.add('slide-down');
    setTimeout(() => {
      footer.classList.remove('expanded');
      footerFull.classList.remove('slide-down');
    }, 400); // Match the animation duration
  }
}

/* ============================= */
/* Navigation Link Handling      */
/* ============================= */
document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');
    if (targetId === 'contact-footer') {
      scrollToSection(targetId);
      setTimeout(expandContact, 200);
    } else {
      scrollToSection(targetId);
    }
  });
});

/* ============================= */
/* Back-to-Top Button            */
/* ============================= */
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================= */
/* GSAP Animations               */
/* ============================= */
gsap.from('.header-inner', {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: 'power2.out'
});

gsap.to('.background-shapes .shape', {
  y: 30,
  ease: 'none',
  scrollTrigger: {
    trigger: 'body',
    start: 'top top',
    scrub: true
  }
});