$(document).ready(menuFullScreen);

function menuFullScreen(){
	$(".menu-link").click(function(e){
        e.preventDefault();
        $(".overlay").addClass("is-open");
        return false;
    });

    $(".close-btn").click(function(e){
        $(".overlay").removeClass("is-open");
    });
}