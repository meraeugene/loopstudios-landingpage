const navBtn = document.querySelector("#navBtn");
const closeBtn = document.querySelector("#closeBtn");

navBtn.addEventListener("click", () => {
  document.querySelector(".nav-flex").classList.add("nav-flex-clicked");

  document.querySelector(".menu").classList.add("menu-show");

  navBtn.classList.add("hideNavBtn");
  closeBtn.classList.add("showCloseBtn");
});

closeBtn.addEventListener("click", () => {
  document.querySelector(".nav-flex").classList.remove("nav-flex-clicked");

  document.querySelector(".menu").classList.remove("menu-show");

  navBtn.classList.remove("hideNavBtn");
  closeBtn.classList.remove("showCloseBtn");
});
