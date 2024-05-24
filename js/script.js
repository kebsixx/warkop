// toggle active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (event) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  event.preventDefault();
};

// klik diluar eleemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (event) {
  if (!hm.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(event.target) && !searchForm.contains(event.target)) {
    searchForm.classList.remove("active");
  }
});
