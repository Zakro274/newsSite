const button = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-menu");
button.addEventListener("click", () => {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
});
