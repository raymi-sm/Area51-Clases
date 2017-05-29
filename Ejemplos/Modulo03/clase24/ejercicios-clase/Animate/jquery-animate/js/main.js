$(document).ready(animateBoxClick);

function animateBoxKeyboard(){
  var htmlDocument = $(document);
  htmlDocument.on('keydown', function(e){
    var teclas = e.keyCode;
    if(teclas === 39){
      $('.caja').animate({
        left: '+=40px'
      });
    }else if(teclas === 38) {
      $('.caja').animate({
        top: '-=40px'
      });
    }else if(teclas === 37) {
      $('.caja').animate({
        left: '-=40px'
      });
    }else if(teclas === 40) {
      $('.caja').animate({
        top: '+=40px'
      });
    }
  })  
}

function animateBoxClick(){
  var flechaIzquierda = $('.flecha-izquierda');
  var flechaArriba = $('.flecha-arriba');
  var flechaDerecha = $('.flecha-derecha');
  var flechaAbajo = $('.flecha-abajo');
  
  flechaIzquierda.on('click', function(e){
    e.preventDefault();
    $('.caja').animate({
        left: '-=40px'
    });
  });

  flechaArriba.on('click', function(e){
    e.preventDefault();
    $('.caja').animate({
        top: '-=40px'
    });
  });

  flechaDerecha.on('click', function(e){
    e.preventDefault();
    $('.caja').animate({
        left: '+=40px'
    });
  });

  flechaAbajo.on('click', function(e){
    e.preventDefault();
    $('.caja').animate({
        top: '+=40px'
    });
  });
}