/*

Para que el código de nuestras funciones pueda ser rehusable, utilizamos lo que se conoce como argumentos



function suma(num1, num2) {
  return num1 + num2;
}

console.log(suma(3, 5));
console.log(suma(13, 7));
console.log(suma(3, 25));


*/

/*
var sustantivo = prompt('Escribe un sustantivo' + preguntasRestantes);      
var adjetivo = prompt('Escribe un adjetivo' + preguntasRestantes);
var verbo = prompt('Escribe un verbo' + preguntasRestantes);     
alert("¿Estás listo para tu historia?");      
var historia = '<p> Habia una vez un ' + sustantivo + ' ' + 'que era muy ' + adjetivo + ' ' + 'y le gustaba salir a ' + verbo + '</p>'      
document.write(historia);

*/

function mensajes() {
  
}

function mensajes(palabras){
  var palabra = prompt(palabras);
  return palabra;
}

var sustantivo = mensajes('Escribe un sustantivo');
var adjetivo = mensajes('Escribe un adjetivo');
var verbo = mensajes('Escribe un verbo');

function oracion(oracion){
  document.write('<p> Habia una vez un ' + sustantivo + ' ' + 'que era muy ' + adjetivo + ' ' + 'y le gustaba salir a ' + verbo + '</p>');
}

oracion();