
////
///menu-bar-mobile js

///menu-bar-mobile js
var menu = document.getElementById('dd');
var menu_btn = document.querySelector('menu-btn');     
let showMenu = true;
              
function toggleMenu() {
    menu.classList.toggle('show');
}
console.log(menu.classList)
console.log(menu.style.left)

// document.addEventListener("click", function () {
//     menu.classList.toggle('show');
// });


// ////////////////////////////////////  



function  haederanime() {
    if (document.querySelector(".header")) {
        var bodyElement = document.querySelector(".header");
        var navElement = document.querySelector("header");
        var dropdown = document.querySelector(".dropdown-content");
        if (this.scrollY > 500) {
            navElement.style.position = "fixed"
            navElement.style.zIndex = 24
            navElement.style.backgroundColor = "#0F1A27"
            dropdown.style.backgroundColor = "#0F1A27"
            bodyElement.style.margin = "1rem 0rem"

        } else {
            navElement.style.position = "absolute"
            navElement.style.zIndex = 24
            navElement.style.backgroundColor = "rgb(15 26 39 / 0%)"
            dropdown.style.backgroundColor = "rgb(15 26 39 / 0%)"
        }
    }
    
}

window.addEventListener("scroll", haederanime , false);






//////////////////////////////////
function toggleIcon(expandIconPlus, expandIconMinus, isOpen) {
  if (isOpen) {
      expandIconPlus.style.display = 'none';
      expandIconMinus.style.display = 'block';
  } else {
      expandIconPlus.style.display = 'block';
      expandIconMinus.style.display = 'none';
  }
}

function createAccordion(el) {
  let animation = null;
  let isClosing = false;
  let isExpanding = false;
  const summary = el.querySelector('summary');
  const content = el.querySelector('.faq-content');
  const expandIconPlus = summary.querySelector('.icon-tabler-circle-plus');
  const expandIconMinus = summary.querySelector('.icon-tabler-circle-minus');

  function onClick(e) {
      e.preventDefault();
      el.style.overflow = 'hidden';
      if (isClosing || !el.open) {
          open();
      } else if (isExpanding || el.open) {
          shrink();
      }
  }

  function shrink() {
      isClosing = true;
      const startHeight = `${el.offsetHeight}px`;
      const endHeight = `${summary.offsetHeight}px`;
      if (animation) {
          animation.cancel();
      }
      animation = el.animate({
          height: [startHeight, endHeight]
      }, {
          duration: 400,
          easing: 'ease-out'
      });
      animation.onfinish = () => {
          toggleIcon(expandIconPlus, expandIconMinus, false);
          onAnimationFinish(false);
      };
      animation.oncancel = () => {
          toggleIcon(expandIconPlus, expandIconMinus, false);
          isClosing = false;
      };
  }

  function open() {
      el.style.height = `${el.offsetHeight}px`;
      el.open = true;
      window.requestAnimationFrame(expand);
  }

  function expand() {
      isExpanding = true;
      const startHeight = `${el.offsetHeight}px`;
      const endHeight = `${summary.offsetHeight + content.offsetHeight}px`;
      if (animation) {
          animation.cancel();
      }
      animation = el.animate({
          height: [startHeight, endHeight]
      }, {
          duration: 350,
          easing: 'ease-out'
      });
      animation.onfinish = () => {
          toggleIcon(expandIconPlus, expandIconMinus, true);
          onAnimationFinish(true);
      };
      animation.oncancel = () => {
          toggleIcon(expandIconPlus, expandIconMinus, true);
          isExpanding = false;
      };
  }

  function onAnimationFinish(open) {
      el.open = open;
      animation = null;
      isClosing = false;
      isExpanding = false;
      el.style.height = el.style.overflow = '';
  }

  summary.addEventListener('click', onClick);
}

document.querySelectorAll('details').forEach(createAccordion);



