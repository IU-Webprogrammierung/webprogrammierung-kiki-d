$("header").load("components/header.html", function() {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.navigation-list-header');

  // --- Hamburger Menü ---
  hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

  document.querySelectorAll('.navigation-list-header a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
    });
  });

  // --- Horizontal Fullscreen Slider ---
 const section = document.querySelector('#projects');
const wrapper = section.querySelector('.sticky-wrapper');
const list = section.querySelector('.projects-list');
const progress = section.querySelector('.scroll-progress-bar');

function horizontalScroll() {
  const isHorizontal = window.innerWidth >= 761;
  const scrollWidth = list.scrollWidth - window.innerWidth;

  if (!isHorizontal) {
    // Mobile: reset
    section.style.height = 'auto';
    wrapper.style.position = 'relative';
    list.style.transform = 'none';
    if (progress) progress.style.width = '0%';
    return;
  }

  section.style.height = `${window.innerHeight + scrollWidth}px`;

  const rect = section.getBoundingClientRect();

  if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
    // Sticky & horizontal scroll
    wrapper.style.position = 'fixed';
    wrapper.style.top = '0';
    wrapper.style.left = '0';
    wrapper.style.width = '100%';
    wrapper.style.height = '100vh';

    const scrollProgress = Math.min(Math.max(-rect.top / scrollWidth, 0), 1);
    list.style.transform = `translateX(-${scrollProgress * scrollWidth}px)`;
    if (progress) progress.style.width = `${scrollProgress * 100}%`;
  } else if (rect.bottom < window.innerHeight) {
    // Endzustand
    wrapper.style.position = 'relative';
    wrapper.style.height = 'auto';
    list.style.transform = `translateX(-${scrollWidth}px)`;
    if (progress) progress.style.width = '100%';
  } else {
    // Startzustand
    wrapper.style.position = 'relative';
    list.style.transform = 'translateX(0)';
    if (progress) progress.style.width = '0%';
  }
}

// Init + Events
horizontalScroll();
window.addEventListener('scroll', horizontalScroll);
window.addEventListener('resize', horizontalScroll);

});

