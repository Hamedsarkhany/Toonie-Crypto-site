
////
///menu-bar-mobile js

///menu-bar-mobile js
var menu = document.getElementById('dd');
        
let showMenu = false;
        

        
function toggleMenu() {
  if (!showMenu) {
    menu.classList.add('show');
    showMenu = true;
  } 
  else {
    menu.classList.remove('show');
    showMenu = false;
  }
}
// ////////////////////////////////////  



function  haederanime() {
    var bodyElement = document.querySelector(".header");
    var navElement = document.querySelector("header");
    var dropdown = document.querySelector(".dropdown-content");
    if (this.scrollY > 500) {
        navElement.style.position = "fixed"
        navElement.style.zIndex = 2
        navElement.style.backgroundColor = "#0F1A27"
        dropdown.style.backgroundColor = "#0F1A27"
        bodyElement.style.margin = "1rem 0rem"

    }else {
        navElement.style.position = "absolute"
        navElement.style.zIndex = 2
        navElement.style.backgroundColor = "rgb(15 26 39 / 0%)"
        dropdown.style.backgroundColor = "rgb(15 26 39 / 0%)"
    }
}

window.addEventListener("scroll", haederanime , false);


