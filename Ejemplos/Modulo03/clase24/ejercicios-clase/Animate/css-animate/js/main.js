$(document).ready(inicio1);

function inicio(){
  var submitBTN = $('input[name="submit-btn"]');
  submitBTN.on('click', function(e){
    e.preventDefault();
    $('input[name="text-field"]').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('input[name="text-field"]').removeClass('animated shake');
    });
  });
}

function inicio1(){
  var submitBTN = $('input[name="submit-btn"]');
  submitBTN.on('click', function(e){
    e.preventDefault();
    $('input[name="text-field"]').toggleClass('animated shake')
  });
}