/* 
  Ejercicio Quiz

  El ejercicio consiste en que debemos crear un pequeño quiz de 5 preguntas que el usuario debe de responder. Si el usuario responde las 5 preguntas correactamente se le mostrará un mensaje que dirá que se ganó la corona de oro, si responde 3 preguntas se le mostrará un mensaje diciendole que ganó la corona de plata y si responde menos de 3 preguntas se le mostrará un mensaje donde perdió.

  Crea el programa usando funciones y lo has aprendido hasta ahora.
*/

/* 

Usando Arreglos

*/

var qa = [
	["¿Cuantos continentes tiene la Tierra?", 5],
	["¿Como se llama el presidente de USA?", "Donald Trump"],
	["¿Que animal hace cuac cuac?", "Pato"]
];

var respuestasCorrectas = 0;

function quiz(quiz){
	for (var i = 0; i < qa.length; i++){
		var pregunta = qa[i][0];
		var respuesta = qa[i][1];
		var usuarioRespuesta = prompt(pregunta);
		if(usuarioRespuesta == respuesta){
			respuestasCorrectas = respuestasCorrectas + 1;
		}
	}
}

function respuestas() {
	if( respuestasCorrectas === 3 ) {
		var mensaje = '<h2>Te ganaste la corona de oro!</h2>';
	}else if( respuestasCorrectas === 2 ){
  	var mensaje = '<h2>Te ganaste la corona de plata!</h2>';
	}else {
  	var mensaje = '<h2>Perdiste :(</h2>';
	}
	return mensaje;
}

function imprimir(mensaje){
	document.write(mensaje);
}

quiz(qa);

imprimir(respuestas());



/* 
	Usando Objetos
*/

var respuestasCorrectas = 0;

var quiz = [
	{
		pregunta: '¿Cuántos estados tienen los Estados Unidos?',
		respuesta: 50
	},
	{
		pregunta:'¿Cuántas patas tiene una araña?',
		respuesta: 8
	},
	{
		pregunta:'¿Como se llama el presidente de México?',
		respuesta:'Enrique Peña Nieto'
	},
	{
		pregunta:'¿Como se llama el presidente de USA?',
		respuesta:'Donald Trump'
	}
]

function createQuiz(quiz){
	for (var i = 0; i < quiz.length; i++){
		var pregunta = quiz[i].pregunta;
		console.log(pregunta);
		var respuesta = quiz[i].respuesta;
		var usuarioRespuesta = prompt(pregunta);
		if(usuarioRespuesta == respuesta){
			respuestasCorrectas = respuestasCorrectas + 1;
		}
	}
}

function respuestas() {
	if( respuestasCorrectas === 3 ) {
		var mensaje = '<h2>Te ganaste la corona de oro!</h2>';
	}else if( respuestasCorrectas === 2 ){
  	var mensaje = '<h2>Te ganaste la corona de plata!</h2>';
	}else {
  	var mensaje = '<h2>Perdiste :(</h2>';
	}
	return mensaje;
}

function imprimir(mensaje){
	document.write(mensaje);
}

createQuiz(quiz);

imprimir(respuestas());