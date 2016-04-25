var $menuIcon = document.querySelector(".menu-icon");
var $menuContainer = document.querySelector(".menu-container");
var $menuOverlay = document.querySelector(".menu-overlay");

function toggleMenu() {
  var menuStyle = $menuContainer.style.transform;
  if (menuStyle === "translateX(-103%)" || menuStyle === "") {
    $menuContainer.style.transform = "translateX(0)";
    $menuOverlay.style.visibility = "visible";
    document.body.style.overflow = "hidden";
  }
  else {
    $menuContainer.style.transform = "translateX(-103%)";
    $menuOverlay.style.visibility = "";
    document.body.style.overflow = "";
  }
}

$menuIcon.addEventListener("click", function () {
  toggleMenu();
}, false);

$menuOverlay.addEventListener("click", function () {
  toggleMenu();
}, false);
