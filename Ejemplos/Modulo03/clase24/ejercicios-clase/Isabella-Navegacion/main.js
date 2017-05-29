$(document).ready(navegacionScroll);

function navegacionScroll(){
  $(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
        $('.main-nav').addClass('sticky');
    } else {
        $('.main-nav').removeClass('sticky');
    }
  });
}