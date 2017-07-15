function inicial(){
  var header = document.getElementById('header');
  window.addEventListener('scroll', scrollingMenu);
}

/* 
  Solucion 1 


function scrollingMenu(){
  if(window.scrollY >= 216) {
    header.style.background = 'white';
  }else {
    header.style.background = 'transparent'
  }
}
*/

/* Solucion 2 */

function scrollingMenu(){
  if(window.scrollY >= 216) {
    header.className = 'nav-sticky';
  }else {
    header.className = ' ';
  }
}

inicial();