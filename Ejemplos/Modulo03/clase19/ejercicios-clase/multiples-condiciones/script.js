// Multiples Condiciones 

/*
if() {

}
Si la primera condición es falsa
else if() {

}
Si ambas condiciones son falsas
else {

}
*/ 

/* 
  Usando multiples condiciones en el adivinador de numeros.

  Para este caso vamos a revisar si el número que el usuario colocó es mayor que el número aleatorio. Si esta condición es verdadera le daremos al usuario la pista de que debe de usar un número menor para adivinar y de igual manera si el número es menor que el número aleatorio.
*/

var adivinadorCorrecto = false; 
var numeroRandom = Math.floor(Math.random() * 10) + 1;
var adivinador = prompt('Estoy pensando en un número del 1 al 10. Adivina cual es');

/* Las condicionales retornan un valor booleano por eso es que no es necesario hacer una comparación */

if (parseInt(adivinador) === numeroRandom) {
  adivinadorCorrecto = true;
}else if(parseInt(adivinador) < numeroRandom){
  var adivinaMayor = prompt('Intentalo de nuevo. El número que estoy pensando es mayor que ' + adivinador);
  if(adivinaMayor === numeroRandom) {
    adivinadorCorrecto = true;
  }
}else if(parseInt(adivinador) > numeroRandom) { 
  var adivinaMenor = prompt('Intentalo de nuevo. El número que estoy pensando es menor que ' + adivinador);
  if(adivinaMenor === numeroRandom) {
    adivinadorCorrecto = true;
  }
}

if (adivinadorCorrecto) {
  document.write('<p> Adivinaste!</p>');
}else {
  document.write('<p> No adivinaste! El número era ' + numeroRandom + '</p>');
}