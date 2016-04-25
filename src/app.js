var $menuIcon = document.querySelector(".menu-icon");
var $menuContainer = document.querySelector(".menu-container");
var $menuOverlay = document.querySelector(".menu-overlay");

function toggleMenu() {
  var menuStyle = $menuContainer.style.transform;
  var overlayStyle = $menuOverlay.style.transform;
  if (menuStyle === "translateX(-103%)" || menuStyle === "") {
    $menuContainer.style.transform = "translateX(0)";
    $menuOverlay.style.transform = "translateX(0)";
  }
  else {
    $menuContainer.style.transform = "translateX(-103%)";
    $menuOverlay.style.transform = "translateX(-103%)";
  }
}

$menuIcon.addEventListener("click", function () {
  toggleMenu();
}, false);

$menuOverlay.addEventListener("click", function () {
  toggleMenu();
}, false);
