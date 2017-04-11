/* 
  Flujo del ejercicio:
    
    Cuando el usuario hace scroll, el menú activa aquel link que corresponde a la sección correspondiente al link.
    Cuando el usuario clickea en uno de los links, la ventana scrollea por si misma hasta la ubicación que corresponde a la sección del link

  Lista de Pasos:

  1. Obtener por jQuery el menú y los enlaces
  2. Obtener el alto del menú
  3. Cuando uno de los enlaces sea clickeado  la ventana se animará con una propiedad de scrolling desde jQuery, la cual será equivalente al valor en pixeles donde se encuentra la sección que pertenece al link

*/



var nav = $('nav');
var nav_height = nav.outerHeight();

nav.find('a').on('click', function (e) {
  var $el = $(this), 
      id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
});