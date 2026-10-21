const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function closeMenu() {
  navLinks.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "打开导航");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const open = !navLinks.classList.contains("is-open");
  navLinks.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "关闭导航" : "打开导航");
  document.body.classList.toggle("menu-open", open);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.getElementById("year").textContent = new Date().getFullYear();
