var toggleList = $('#toggleList');
var listDiv = $('.list');
var descriptionInput = $('input.description');
var descriptionP = $('p.description');
var descriptionButton = $('button.description');
var addItemInput = $('input.addItemInput');
var addItemButton = $('button.addItemButton');
var removeItemButton = $('button.removeItemButton');
var usuario = $('#usuario');
var pass = $('#pass');

// Eventos del navegador: Scroll

$(window).scroll(function(){
  descriptionP.css({
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'black',
    color: 'white',
    padding: '15px',
    'margin-top': '0px'
  })
  descriptionP.html('Scroll Y: ' + $(window).scrollTop());
});

// Eventos del navegador: Resize

$(window).resize(function() {
  $( ".list" ).append( "<div>Handler for .resize() called.</div>" );
  $( "body" ).prepend( "<div>" + $(window).width() + "</div>" );
});

// Eventos de mouse

toggleList.on('click', function(){
  if(listDiv.css('display') === 'none' ){
    $(this).text('Hide list');
    listDiv.css('display', 'block');
  }else {
    $(this).text('Show list');
    listDiv.css('display', 'none');
  }
});

descriptionButton.on('click', function(){
    descriptionP.text(descriptionInput.val());
    descriptionInput.val("");
});

addItemButton.on('click', function(){
  var ul = $('ul');
  var li = $('ul li');
  ul.append('<li>' + addItemInput.val() + '</li>');
  addItemInput.val("");
});

removeItemButton.on('click', function(){
  var itemLast = $('li:last-child');
  itemLast.remove();  
});

descriptionP.on('dblclick', function(){
  $(this).css('color', 'blue');
});

// Eventos del teclado

addItemInput.on('keypress', function(e){
  if(e.keyCode === 13){
    var ul = $('ul');
    ul.append('<li>' + addItemInput.val() + '</li>')
    addItemInput.val('');
  }
});

descriptionInput.on('keydown', function(e){
  console.log(e.keyCode);
});

descriptionInput.on('keyup', function(e){
  console.log(e.keyCode);
});

// Eventos de formulario

/*
usuario.on('focus', function( event ) {
  console.log('formulario on focus');
  event.target.style.background = 'pink';    
});

pass.on("blur", function( event ) {
  console.log('formulario on blur');
  event.target.style.background = "blue";    
});
*/

usuario.on('focusin', function( event ) {
  console.log('formulario on focus');
  event.target.style.background = 'pink';    
});

pass.on("focusout", function( event ) {
  console.log('formulario on blur');
  event.target.style.background = "blue";    
});

  
  
  
  
  
  
  
  
  