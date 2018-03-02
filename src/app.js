(function () {
  "use strict";

  var $menuIcon = document.querySelector(".menu__icon");
  var $menu = document.querySelector(".menu");
  var $menuOverlay = document.querySelector(".menu__overlay");

  addEventListeners();

  function addEventListeners() {
    // document.addEventListener("transitionend", transitionEnd);
    document.addEventListener("touchstart", touchStart, false);
    document.addEventListener("touchmove", touchMove, false);
    document.addEventListener("touchend", touchEnd, false);
    $menuIcon.addEventListener("click", toggleMenu, false);
    $menuOverlay.addEventListener("click", toggleMenu, false);
  }

  function toggleMenu() {
    if (!isMenuOpen()) {
      showMenu();
    }
    else {
      hideMenu();
    }
  }

  function isMenuOpen() {
    return $menu.classList.contains("menu--show");
  }

  function hideMenu() {
    $menu.style.transform = "";
    $menu.classList.remove("menu--show");
    $menuOverlay.classList.remove("menu__overlay--show");
  }

  function showMenu() {
    $menu.classList.add("menu--show");
    $menuOverlay.classList.add("menu__overlay--show");
  }

  var startDistance, movedDistance = 0;
  var distance = 0;

  function transitionEnd() {
    if (!isMenuOpen()) {
      hideMenu();
    }
  }

  function touchStart(event) {
    if (!isMenuOpen()) {
      return;
    }
    startDistance = event.touches[0].pageX;
    distance = startDistance;
  }

  function touchMove(event) {
    if (!isMenuOpen()) {
      return;
    }
    movedDistance = event.touches[0].pageX;
    var translate = Math.min(0, movedDistance - startDistance);
    if (translate < 0) {
      event.preventDefault();
    }
    $menu.style.transform = "translateX("+ translate +"px)";
  }

  function touchEnd(event) {
    var endDistance = Math.min(0, movedDistance - startDistance);
    $menu.style.transform = "";
    if (endDistance < 0 && movedDistance !== 0) {
      hideMenu();
    }
  }
})();
