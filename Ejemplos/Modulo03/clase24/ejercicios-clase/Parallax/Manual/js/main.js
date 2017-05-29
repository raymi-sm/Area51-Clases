$(window).scroll(function(){
    var navegadorScroll = $(window).scrollTop(); // scrollTop: te da la posicion en pixeles de que tan lejos te encuentras de la parte de arriba de la ventana del navegador
    $('.parallax').css('background-position', 'center ' + navegadorScroll +'px')
})



