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

// toggle active shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (event) => {
  shoppingCart.classList.toggle("active");
  event.preventDefault();
};

// klik diluar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (event) {
  if (!hm.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(event.target) && !searchForm.contains(event.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(event.target) && !shoppingCart.contains(event.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (event) => {
    itemDetailModal.style.display = "flex";
    event.preventDefault();
  };
});

// klik tombol close
document.querySelector(".modal .close-icon").onclick = (event) => {
  itemDetailModal.style.display = "none";
  event.preventDefault();
};

// klik diluar modal
window.onclick = (event) => {
  if (event.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
