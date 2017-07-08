$(document).ready(function(){
    /*$(".cta").on("click", function(e){
        e.preventDefault();
        console.log("mi click funciona");
    });*/

    $(".cta").click(function(e){
        e.preventDefault();
        $(".overlay").addClass("is-open");
        return false;
    });

    $(".close-btn").click(function(e){
        $(".overlay").removeClass("is-open");
    });
});