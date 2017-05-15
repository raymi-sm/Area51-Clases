/* 

Probando los booleans 

if(false) {
  document.write('La condición es verdadera');
}else {
  document.write('La condición es falsa');
}

*/

/* Usando los booleanos en el adivinador de numeros  */


var adivinadorCorrecto = false; 
var numeroRandom = Math.floor(Math.random() * 10) + 1;
var adivinador = prompt('Estoy pensando en un número del 1 al 10. Adivina cual es');

/* Las condicionales retornan un valor booleano por eso es que no es necesario hacer una comparación */

if (parseInt(adivinador) === numeroRandom) {
  adivinadorCorrecto = true;
}

if (adivinadorCorrecto === true) {
  document.write('<p> Adivinaste!</p>');
}else {
  document.write('<p> No adivinaste! El número era ' + numeroRandom + '</p>');
}