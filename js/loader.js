$("header").load("components/header.html", function() {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.navigation-list-header');

  hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

  document.querySelectorAll('.navigation-list-header a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
    });
  });

  // Horizontales Scrollen für Projekte
  const projects = document.querySelector('#projects .projects-list');
  const scrollBar = document.querySelector('#projects .scroll-progress-bar');

  if (projects && scrollBar) {
    projects.addEventListener('wheel', e => {
      e.preventDefault(); // verhindert vertikales Scrollen
      projects.scrollLeft += e.deltaY; // horizontales Scrollen

      // Fortschritt berechnen
      const percent = (projects.scrollLeft / (projects.scrollWidth - projects.clientWidth)) * 100;
      scrollBar.style.width = percent + '%';
    });
  }
});
