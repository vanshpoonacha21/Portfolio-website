// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Starting lights intro sequence =====
(function runLightsIntro() {
  const intro = document.getElementById("lightsIntro");
  const cells = intro.querySelectorAll(".light-cell");
  const caption = intro.querySelector(".lights-caption");
  const skipBtn = document.getElementById("skipIntro");

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const seenIntro = sessionStorage.getItem("vp_intro_seen");

  function finishIntro() {
    intro.classList.add("hide");
    document.body.style.overflow = "";
    sessionStorage.setItem("vp_intro_seen", "1");
  }

  if (prefersReducedMotion || seenIntro) {
    intro.classList.add("hide");
    return;
  }

  document.body.style.overflow = "hidden";

  let i = 0;
  const lightInterval = setInterval(() => {
    if (i < cells.length) {
      cells[i].classList.add("on");
      i++;
    } else {
      clearInterval(lightInterval);
      // All lights on — hold, then "lights out"
      setTimeout(() => {
        cells.forEach((c) => c.classList.remove("on"));
        caption.classList.add("show");
        setTimeout(finishIntro, 700);
      }, 600);
    }
  }, 350);

  skipBtn.addEventListener("click", () => {
    clearInterval(lightInterval);
    finishIntro();
  });
})();

// ===== Collapse mobile navbar after clicking a link =====
const navLinks = document.querySelectorAll("#navbarNav .nav-link");
const navbarCollapse = document.getElementById("navbarNav");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});

// ===== Highlight active nav link based on scroll position =====
const sections = document.querySelectorAll("section[id]");

function activateNavLink() {
  const scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 90;
    const sectionId = section.getAttribute("id");
    const link = document.querySelector(`#navbarNav .nav-link[href="#${sectionId}"]`);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link?.classList.add("active");
    } else {
      link?.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", activateNavLink);

// ===== Animate gauge fills when scrolled into view =====
const gauges = document.querySelectorAll(".gauge");

const gaugeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector(".gauge-fill");
        const level = entry.target.getAttribute("data-level") || 0;
        fill.style.width = level + "%";
        gaugeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

gauges.forEach((g) => gaugeObserver.observe(g));
