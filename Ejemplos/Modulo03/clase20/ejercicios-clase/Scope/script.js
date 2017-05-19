/* 
  El scope es la manera en como nosotros accedemos a las variables y sus valores de acuerdo al ambiente en donde están 

*/

function saludo() {
  var nombre = "Juan Carlos"
  document.write("<div class='container'>" + nombre + "</div>");
}
saludo();
var nombre = "Raymi";
document.write("<div class='container'>" + nombre + "</div>");