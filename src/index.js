// Navbar Actions
const offcanvas = document.querySelectorAll(".offcanvas");
const menu = document.getElementsByClassName("menu");
const close = document.getElementsByClassName("close-button");
const nav = document.getElementsByTagName("nav");
const navLinks = document.querySelectorAll(".nav-links");

clickAction(menu[0], function () {
  nav[0].style.display = "none";
  offcanvas[0].style.display = "block";
});

clickAction(close[0], function () {
  nav[0].style.display = "flex";
  offcanvas[0].style.display = "none";
});

navLinks.forEach((item) => {
  clickAction(item, function () {
    nav[0].style.display = "flex";
    offcanvas[0].style.display = "none";
  });
});

function clickAction(element, callback) {
  element.addEventListener("click", callback);
}

// Button's Navigation
const button = document.querySelectorAll(".clickable");

button.forEach((link) => {
  clickAction(link, (e) => {
    e.view.location.href = getChildLink(link);
  });
});

function getChildLink(element) {
  return element.children[0].href;
}
