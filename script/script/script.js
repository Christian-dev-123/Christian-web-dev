const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.classList.toggle('fa-times');
    });

    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      header.style.background = window.scrollY > 50 ? "#0b0b0b" : "#111";
    });

    
