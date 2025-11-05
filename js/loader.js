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


const section = document.querySelector('#projects');
const list = section.querySelector('.projects-list');
const progress = section.querySelector('.scroll-progress-bar');

function horizontalScroll() {
  if (!section || !list) return;

  const scrollWidth = list.scrollWidth - window.innerWidth;
  section.style.height = `${window.innerHeight + scrollWidth}px`; // Section-Höhe anpassen

  const rect = section.getBoundingClientRect();

  if (rect.top <= 0 && rect.bottom > 0) {
    // Scroll-Fortschritt innerhalb der Section (0 - 1)
    const scrollProgress = Math.min(Math.max(-rect.top / scrollWidth, 0), 1);

    // Horizontal verschieben
    list.style.transform = `translateX(-${scrollProgress * scrollWidth}px)`;

    // Fortschrittsbalken
    if (progress) progress.style.width = `${scrollProgress * 100}%`;
  }
}

// Initial berechnen
horizontalScroll();

// Event Listener
window.addEventListener('scroll', horizontalScroll);
window.addEventListener('resize', horizontalScroll); // Responsive





  
});
