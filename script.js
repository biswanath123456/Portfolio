// HAMBURGER MENU
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// SKILLS TABS
function switchTab(event, tab) {
  document.querySelectorAll(".skills-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".skills-panel").forEach(p => p.classList.remove("active"));
  event.target.classList.add("active");
  const panel = document.getElementById("tab-" + tab);
  if (panel) panel.classList.add("active");
}

// SCROLL TO TOP
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", function () {
  const btn = document.getElementById("arrowUpBtn");
  if (!btn) return;
  btn.style.display =
    document.documentElement.scrollTop > 300 ? "flex" : "none";
});

// SCROLL REVEAL
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-up").forEach(el => revealObserver.observe(el));