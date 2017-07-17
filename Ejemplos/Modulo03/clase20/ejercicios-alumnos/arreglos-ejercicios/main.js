/* 
  Ejercicio Quiz

  El ejercicio consiste en que debemos crear un pequeño quiz de 5 preguntas que el usuario debe de responder. Si el usuario responde las 5 preguntas correactamente se le mostrará un mensaje que dirá que se ganó la corona de oro, si responde 3 preguntas se le mostrará un mensaje diciendole que ganó la corona de plata y si responde menos de 3 preguntas se le mostrará un mensaje donde perdió.
*/

var pregunta1 = prompt('¿Cuántos continentes tiene La Tierra?');
var pregunta2 = prompt('¿Como se llama el presidente de USA?');
var pregunta3 = prompt('¿Qué animal hace cuac cuac?');

var respuestasCorrectas = 0;

if( parseInt(pregunta1) === 5 ) {
  respuestasCorrectas = respuestasCorrectas + 1;
}

if( pregunta2 === 'Donal Trump' ){
  respuestasCorrectas = respuestasCorrectas + 1;
}

if( pregunta3 === 'Pato' ) {
  respuestasCorrectas = respuestasCorrectas + 1;
}

if( respuestasCorrectas === 3 ) {
  document.write('<h2>Te ganaste la corona de oro!</h2>');
}else if( respuestasCorrectas === 2 ){
  document.write('<h2>Te ganaste la corona de plata!</h2>');
} else {
  document.write('<h2>Perdiste! :(</h2>')
}
