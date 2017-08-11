/* 
  Eventos en JavaScript 

  Nos demos cuenta o no, cada vez que el usuario interactúa con el sitio web se generan diferentes tipos de eventos.

  Un evento es algo que haces en un sitio web como mover el mouse, hacer scrolling o clickear en un botón o un link. Los navegadores pueden escuchar estos eventos y por consiguiente pueden hacer algo en respuesta a los mismos. Por ejemplo, agrandar una foto cuado se hace click a un botón o a la misma foto.

  Por defecto el navegador no es que haga mucho en respuesta a estos eventos a no ser que nosotros escribamos codigo en JavaScript que se encargue de manejar las respuestas a los eventos. Por ejemplo, usando JavaScript nosotros podemos escuchar el evento click y escribir la respuesta en una función

  Algunos eventos con los que vamos a trabajar ahora son: 

  Eventos relacionados con el uso del muouse o trackpad

  click
  dblclick
  mousedown
  mouseup
  mousemove
  mouseover
  mouseout

  en smartphones y tables existen los siguientes eventos

  touchstart
  touchmove
  touchend

  Eventos relacionados con el uso del teclado

  keydown
  keyup
  keypress

  Existen eventos que no necesariamente están asociados con la interacción del usuario. 

  load, es un evento que disparará código javascript una vez que el sitio haya terminado de cargar todo el HTML, CSS y Javascript que pueda estar incluido en el sitio

  Como sabemos las funciones pueden ser tratadas como un tipo de dato al igual que una cadena de texto o un número. Por esto, nosotros podemos pasar una función como un parámetro de la misma manera en que podemos pasar un número o una cadena de texto.

  Cuando nosotros pasamos una función como parámetro dentro de otra función lo que hacemos es retrasar la llamada de la función que está como parámetro.

  El evento addEventListener() se encarga de registrar el evento que queremos que el navegador escuche y así mismo nosotros le podemos pasar una función como parámetro para que dentro de ella, escribamos el código de la respuesta que queremos dar una vez el evento sea llamado.

*/

var toggleList = document.getElementById('toggleList');
var listDiv = document.querySelector('.list');
var descriptionInput = document.querySelector('input.description');
var descriptionP = document.querySelector('p.description');
var descriptionButton = document.querySelector('button.description');
var addItemInput = document.querySelector('input.addItemInput');
var addItemButton = document.querySelector('button.addItemButton');
var removeItemButton = document.querySelector('button.removeItemButton');
var listItems = document.querySelectorAll('li');
var scrolling = document.querySelector('.scroll');
var usuario = document.getElementById('usuario');
var pass = document.getElementById('pass');

// Eventos del navegador

window.addEventListener('scroll', function(){
  scrolling.textContent = 'X: ' + window.scrollX + ' Y: ' + window.scrollY;
});

window.addEventListener('resize', function(){
  var myDiv = document.createElement('div');
  myDiv.innerHTML = 'Holap';
  myDiv.className = 'miclase';
  listDiv.insertBefore(myDiv, descriptionP);
});

// Eventos del mouse

listItems.forEach(function(items){
  items.addEventListener('mouseover', function(){
    items.textContent = items.textContent.toUpperCase();
  });
  items.addEventListener('mouseout', function(){
    items.textContent = items.textContent.toLowerCase();
  });
});


toggleList.addEventListener('click', function(){
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', function() {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});


addItemButton.addEventListener('click', function() {
  var ul = document.getElementsByTagName('ul')[0];
  var li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

removeItemButton.addEventListener('click', function() {
  var ul = document.getElementsByTagName('ul')[0];
  var li = document.querySelector('li:last-child');
  ul.removeChild(li);
});
  
descriptionP.addEventListener('dblclick', function(){
  descriptionP.style.color = 'blue';
});

// Eventos del teclado


addItemInput.addEventListener('keypress', function(e){
  console.log(e.keyCode);
  if(e.keyCode === 13){
    var ul = document.getElementsByTagName('ul')[0];
    var li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
  }
})
  
descriptionInput.addEventListener('keydown', function(e){
  console.log(e.keyCode);
});

descriptionInput.addEventListener('keyup', function(e){
  console.log(e.keyCode);
});

// Eventos de formulario

/*
usuario.addEventListener('focus', function( event ) {
  console.log('formulario on focus');
  event.target.style.background = 'pink';    
});

pass.addEventListener("blur", function( event ) {
  console.log('formulario on blur');
  event.target.style.background = "blue";    
});
*/

usuario.addEventListener('focusin', function( event ) {
  console.log('formulario on focus');
  event.target.style.background = 'pink';    
});

pass.addEventListener("focusout", function( event ) {
  console.log('formulario on blur');
  event.target.style.background = "blue";    
});