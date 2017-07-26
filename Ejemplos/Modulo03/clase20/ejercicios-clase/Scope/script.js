/* 
  El scope es la manera en como nosotros accedemos a las variables y sus valores de acuerdo al ambiente en donde están 



function saludo() {
  var nombre = "Juan Carlos"
  document.write("<div class='container'>" + nombre + "</div>");
}

var nombre = "Raymi";
saludo();

document.write("<div class='container'>" + nombre + "</div>");

*/

/* 
 Una función puede cambiar el valor de una variale que se encuentra en el scope global
 Cuando no usamos el "var" la función al ser llamada, va a buscar la variable en el scope global. Al encontrarla va a cambiar el valor de esta variable que está en el scope global.
*/

function saludo() {
  nombre = "Juan Carlos"
  document.write("<div class='container'>" + nombre + "</div>");
}

var nombre = "Raymi";
saludo();

document.write("<div class='container'>" + nombre + "</div>");