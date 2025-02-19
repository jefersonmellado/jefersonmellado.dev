// Seleccionamos todos los enlaces de navegación (desktop y mobile)
const navItems = document.querySelectorAll(".nav-item");
const noApplyActive = ["linkedin", "email", "download-cv"];
const sections = document.querySelectorAll(".content-section");

navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // Evitar comportamientos por defecto (si es enlace real)
    
    // Si el enlace no es uno de los que se excluyen:
    if (!noApplyActive.includes(item.dataset.target)) {
      const targetSection = document.getElementById(item.dataset.target);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 100, // Ajusta el offset según tu diseño
          behavior: "smooth"
        });
      }
      
      // Remover clase activa de todos y asignar al actual
      navItems.forEach((i) => i.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));
      item.classList.add("active");
      if (targetSection) {
        targetSection.classList.add("active");
      }
    }
    
    // Cambiar la orientación del navbar según la sección
    if (item.dataset.target === "inicio") {
      document.querySelector(".navbar").classList.remove("vertical");
      document.querySelector(".navbar").classList.add("horizontal");
    } else {
      document.querySelector(".navbar").classList.remove("horizontal");
      document.querySelector(".navbar").classList.add("vertical");
    }
    
    // Si se hizo clic en un enlace del menú móvil, cerrar el menú offcanvas
    if (item.closest(".mobile-menu")) {
      document.querySelector(".mobile-menu").classList.remove("active");
    }
  });
});


particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#ffffff", "#00adef", "#6ed3ec"], // Tres colores diferentes
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.7,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

// Funcionalidad para el menú móvil
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");

// Mostrar menú
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// Cerrar menú
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll(".mobile-menu .nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

