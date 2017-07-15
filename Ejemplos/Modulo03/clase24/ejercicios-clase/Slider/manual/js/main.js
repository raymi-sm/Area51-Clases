'use strict';

$(function() {
    var flechaIzquierda = document.querySelector('.flecha-izquierda');
    var flechaDerecha = document.querySelector('.flecha-derecha');
    var currentSlide = 1;
    var slidesWrap = document.querySelector('.slides');
    var slidesWidth = 720;

    flechaIzquierda.addEventListener('click', sliderIzquierda);
    flechaDerecha.addEventListener('click', sliderDerecha);

    function sliderIzquierda(e) {
        e.preventDefault();
        slidesWrap.setAttribute('margin', '720');
    }

    function sliderDerecha(e) {
        e.preventDefault();
        
    }
    /*
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    var $slider = $('#slider');
    var $slideContainer = $('.slides');
    var $slides = $('.slide');

    var interval;

    function startSlider() {
        interval = setInterval(movingSlider, pause);
        
        function movingSlider(){
          $slideContainer.animate({
            'margin-left': '-=' + width
            }, 
            animationSpeed, 
            function() {
              if(++currentSlide === $slides.length) {
                currentSlide = 1;
                $slideContainer.css('margin-left', 0);
              }
          });
        }
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();
    */
});



