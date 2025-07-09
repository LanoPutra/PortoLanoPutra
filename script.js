document.addEventListener("DOMContentLoaded", function () {
  // Scroll pakai navbar
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Tambahkan class .fade ke semua section
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("fade");
  });

  // Observer: munculkan elemen saat terlihat di layar
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );
  sections.forEach((section) => observer.observe(section));

  // Scroll spy navbar
  const navLinks = document.querySelectorAll("nav a");
  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const navLink = document.querySelector(`nav a[href="#${id}"]`);
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          if (navLink) navLink.classList.add("active");
        }
      });
    },
    { threshold: 0.6 }
  );
  sections.forEach((section) => spyObserver.observe(section));
});

// Loading screen + progress bar
window.addEventListener("load", function () {
  const loader = document.getElementById("loading-screen");
  const progressFill = document.getElementById("progress-fill");
  let progress = 0;

  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
      loader.classList.add("fade-out");
      setTimeout(() => {
        loader.style.display = "none";
        document.body.style.overflow = "auto";
      }, 500);
    } else {
      progress += 1;
      progressFill.style.width = progress + "%";
    }
  }, 25); // total sekitar 2,5 detik
});
