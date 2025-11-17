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

    function horizontalScroll() {
        const isHorizontal = window.innerWidth >= 761; // Tablet & Desktop
        const scrollWidth = list.scrollWidth - window.innerWidth;
        const lastSlide = list.lastElementChild;
        const lastSlideWidth = lastSlide ? lastSlide.offsetWidth : 0;

        if (!isHorizontal) {
            // Mobile Reset
            section.style.height = 'auto';
            wrapper.style.position = 'relative';
            wrapper.style.top = 'auto';
            wrapper.style.left = 'auto';
            wrapper.style.width = 'auto';
            wrapper.style.height = 'auto';
            list.style.transform = 'none';
            if (progress) progress.style.width = '0%';
            return;
        }

        // Section-Höhe = Viewport + gesamte horizontale Strecke
        section.style.height = `${window.innerHeight + scrollWidth + lastSlideWidth}px`;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
            // Sticky & horizontal scroll
            wrapper.style.position = 'fixed';
            wrapper.style.top = '0';
            wrapper.style.left = '0';
            wrapper.style.width = '100%';
            wrapper.style.height = '100vh';

            const scrollProgress = Math.min(Math.max(-rect.top / (scrollWidth), 0), 1);
            list.style.transform = `translateX(-${scrollProgress * scrollWidth}px)`;

            if (progress) progress.style.width = `${scrollProgress * 100}%`;

        } else if (rect.bottom < window.innerHeight) {
            // Endzustand: letzte Slide fixieren
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

// Kontakt

const form = document.getElementById('contact-form');
const status = document.getElementById('status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch('send-email.php', {
      method: 'POST',
      body: formData
    });
    const text = await response.text();
    status.textContent = text;
  } catch (err) {
    status.textContent = 'Fehler beim Senden der Nachricht';
  }
});



