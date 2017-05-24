/* 
  Existen 3 conceptos prinpales que hacen un sitio o aplicación interactiva
    - Selección de elementos del sitio
    - Manipulación de los elementos seleccionados
    - Escuchar acciones del usuario

  La cabina de un avión contiene diversos botones y palancas que el piloto utiliza para maniobrar el avión. El piloto puede monitorear la posición del avión, comunicarse con la torre de control, volar y aterrizar con usando esos controles.

  El ambiente global de Javascript ( el objeto window que controla todo lo que ocurre en la ventana del navegador ) es muy similar a la cabina de un avión, contiene multiples tipos de controles que hacen  

  El DOM es un acrónimo que significa Document Object Model y viene a ser una representación del documento HTML. 

*/


//document.getElementById('js-title').style.color = 'purple';
//document.getElementById('js-title').style.backgroundColor = 'yellow';
//document.getElementsByClassName();
//document.getElementsByTagName();
//document.querySelector();
//document.querySelectorAll();

var myList = document.getElementsByTagName('li');
console.log(myList);

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}


var input = document.querySelector('input');
var p = document.querySelector('p.description');
var button = document.querySelector('button');

button.addEventListener('click', function() {
  p.innerHTML = input.value + ':';
});