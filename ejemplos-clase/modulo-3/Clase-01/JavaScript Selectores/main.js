/*

Selectores en JavaScript

Objeto: document

 - document.getElementsByClassName('clase');
 - document.getElementById('id');
 - document.getElementsByTagName('p');
 - document.querySelector('.clase'); / document.querySelector('#id');
 - document.querySelectorAll('.clase'); / document.querySelectorAll('#id');

 Objeto document y sus propiedades

 document.getElementById.innerHTML : Propiedad
 document.getElementById.className : Propiedad
 document.getElementById.value : Propiedad
 document.createElement() : Método
 document.append() : Método
 document.prepend() : Método

*/

var mensaje = "Hola soy texto dinamico"
var element = document.createElement('p');
element.innerHTML = mensaje;
var contenidoPrincipal = document.getElementById('contenidoPrincipal');
contenidoPrincipal.append(element);



//document.getElementById('contenidoSecundario').innerHTML ="<h2>esta es contenido agregado en java script</h2><img src='http://pub.a2cdn.net/delegate-blog/2011/07/learn/javascript101.png'>";
//document.getElementById('contenidoPrincipal').innerHTML ="<h2>este contenido corresponde al primero</h2>";
