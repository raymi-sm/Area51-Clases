
$(document).ready(function(){
  // Aquí va mi jQuery  
  $(".ui-nav-site ul li").click(function(event){
    event.preventDefault();
    $(".ui-nav-site ul li").removeClass("activo");
    $(this).addClass("activo");
  });
});