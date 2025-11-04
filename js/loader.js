$("header").load("components/header.html", function() {

  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.navigation-list-header');

  hamburger.addEventListener('click', () => {
    navList.classList.toggle('active'); 
    hamburger.classList.toggle('active');
  });
});

