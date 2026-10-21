const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuText = menuButton.querySelector(".sr-only");

function closeMenu() {
  navLinks.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("title", "Open navigation");
  menuText.textContent = "Open navigation";
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const willOpen = !navLinks.classList.contains("is-open");

  if (willOpen) {
    navLinks.classList.add("is-open");
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("title", "Close navigation");
    menuText.textContent = "Close navigation";
    document.body.classList.add("menu-open");
  } else {
    closeMenu();
  }
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
    closeMenu();
    menuButton.focus();
  }
});

const filters = document.querySelectorAll(".filter");
const publications = document.querySelectorAll(".publication");

function applyPublicationFilter(filter) {
  publications.forEach((publication) => {
    const categories = publication.dataset.category.split(" ");
    publication.hidden = filter !== "all" && !categories.includes(filter);
  });
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
    applyPublicationFilter(button.dataset.filter);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
