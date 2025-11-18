$("header").load("components/header.html", function () {
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
if (!section) return;

const wrapper = section.querySelector('.sticky-wrapper');
const list = section.querySelector('.projects-list');
const progress = section.querySelector('.scroll-progress-bar');

function updateProgress() {
  const isHorizontal = window.innerWidth >= 761;
  const rect = section.getBoundingClientRect();

  if (isHorizontal) {
    // Desktop: horizontal scroll
    const scrollWidth = list.scrollWidth - window.innerWidth;
    const lastSlide = list.lastElementChild;
    const lastSlideWidth = lastSlide ? lastSlide.offsetWidth : 0;

    section.style.height = `${window.innerHeight + scrollWidth + lastSlideWidth}px`;

    if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
      wrapper.style.position = 'fixed';
      wrapper.style.top = '0';
      wrapper.style.left = '0';
      wrapper.style.width = '100%';
      wrapper.style.height = '100vh';

      const scrollProgress = Math.min(Math.max(-rect.top / scrollWidth, 0), 1);
      list.style.transform = `translateX(-${scrollProgress * scrollWidth}px)`;
      progress.style.width = `${scrollProgress * 100}%`;
    } else if (rect.bottom < window.innerHeight) {
      wrapper.style.position = 'relative';
      wrapper.style.height = 'auto';
      list.style.transform = `translateX(-${scrollWidth}px)`;
      progress.style.width = `100%`;
    } else {
      wrapper.style.position = 'relative';
      list.style.transform = `translateX(0)`;
      progress.style.width = `0%`;
    }
  } else {
    // Mobile: vertikal scroll, nur Fortschrittsleiste
    section.style.height = 'auto';
    wrapper.style.position = 'relative';
    wrapper.style.top = 'auto';
    wrapper.style.left = 'auto';
    wrapper.style.width = '100%';
    wrapper.style.height = 'auto';
    list.style.transform = 'none';

    const scrollTop = window.scrollY;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollProgress = Math.min(Math.max((scrollTop - sectionTop) / sectionHeight, 0), 1);
    progress.style.width = `${scrollProgress * 100}%`;
  }
}

// Init + Events
updateProgress();
window.addEventListener('scroll', updateProgress);
window.addEventListener('resize', updateProgress);


});


//Hero-Title
document.addEventListener("DOMContentLoaded", () => {
    const heroWrapper = document.querySelector(".hero-wrapper");
    if (!heroWrapper) return;

    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    const cursorRadius = 50;
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    const ease = 0.2;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        // Cursor gleitend bewegen
        cursorX += (mouseX - cursorX) * ease;
        cursorY += (mouseY - cursorY) * ease;
        cursor.style.left = `${cursorX - cursorRadius}px`;
        cursor.style.top = `${cursorY - cursorRadius}px`;

        // Sichtbarkeit nur im Hero Wrapper
        const wrapperRect = heroWrapper.getBoundingClientRect();
        const overWrapper =
            mouseX > wrapperRect.left && mouseX < wrapperRect.right &&
            mouseY > wrapperRect.top && mouseY < wrapperRect.bottom;

        cursor.style.opacity = overWrapper ? "1" : "0";
        cursor.style.backgroundColor = overWrapper ? "#fff" : "transparent";

        requestAnimationFrame(animate);
    }

    animate();
});

// Sanftes scrollen nach unten
document.querySelector('.scroll-to-contact').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#adress').scrollIntoView({ behavior: 'smooth' });
});

// Sanftes scrollen nach oben 
const scrollButton = document.querySelector('.scroll-button');

scrollButton.addEventListener('click', function(e) {
  e.preventDefault(); // verhindert das direkte Springen

  const scrollDuration = 800; // Dauer in Millisekunden
  const scrollStep = -window.scrollY / (scrollDuration / 15);

  const scrollInterval = setInterval(function() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
});







