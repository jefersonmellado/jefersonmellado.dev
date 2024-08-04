const navbar = document.querySelector(".navbar");
const navItems = navbar.querySelectorAll(".nav-item");
const noApplyActive = ["linkedin", "email", "download-cv"];
const sections = document.querySelectorAll(".content-section");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (!noApplyActive.find((na_item) => na_item === item.dataset.target)) {
      window.scrollTo({
        top: document.getElementById(item.dataset.target).offsetTop - 100,
        behavior: "smooth",
      });
      navItems.forEach((i) => i.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));
    }

    if (item.dataset.target === "inicio") {
      navbar.classList.remove("vertical");
      navbar.classList.add("horizontal");
    } else {
      navbar.classList.remove("horizontal");
      navbar.classList.add("vertical");
    }

    if (
      !noApplyActive.find((na_item) => na_item === item.dataset.target) &&
      item.dataset.target !== "inicio"
    ) {
      item.classList.add("active");
    }
    const itemTarget = document.getElementById(item.dataset.target);
    if (itemTarget) {
      itemTarget.classList.add("active");
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
