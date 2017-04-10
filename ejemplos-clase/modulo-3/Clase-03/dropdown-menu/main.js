$(document).ready(function(){
  var portfolioBTN = $(".portfolio .link");
  portfolioBTN.on("click", function(){
    var menuDropdown = $(".dropdown-menu");
    menuDropdown.toggleClass("open");
    menuDropdown.on("mouseleave", function(){
      $(this).removeClass("open");
    });
  });
});