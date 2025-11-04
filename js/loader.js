$("header").load("components/header.html", function() {

 const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.navigation-list-header');

  hamburger.addEventListener('click', () => {
    navList.classList.toggle('active'); // Menü auf-/zuklappen
  });

  // Optional: Menü nach Klick auf Link schließen
  document.querySelectorAll('.navigation-list-header a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
    });
  });
});

