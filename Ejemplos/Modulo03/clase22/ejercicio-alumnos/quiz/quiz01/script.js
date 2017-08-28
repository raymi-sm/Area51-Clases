var respuestasCorrectas = 0;
var listaPreguntas = document.querySelector(".lista");
var quizBTN = document.querySelector(".quiz-btn");

var quiz = [
  {
    pregunta: "¿Cuántos estados tienen los Estados Unidos?",
    respuesta: 50
  },
  {
    pregunta: "¿Cuántas patas tiene una araña?",
    respuesta: 8
  },
  {
    pregunta: "¿Como se llama el presidente de México?",
    respuesta: "Enrique Peña Nieto"
  },
  {
    pregunta: "¿Como se llama el presidente de USA?",
    respuesta: "Donald Trump"
  }
];

for (var i = 0; i < quiz.length; i++) {
  var pregunta = quiz[i].pregunta;
  var respuesta = quiz[i].respuesta;

  var preguntaDOM = document.createElement("p");
  preguntaDOM.className = "preguntas";
  preguntaDOM.innerHTML = pregunta;
  listaPreguntas.appendChild(preguntaDOM);

  var respuestaDOM = document.createElement("input");
  respuestaDOM.className = "respuestas";
  preguntaDOM.appendChild(respuestaDOM);

  var usuarioRespuesta = respuestaDOM.value;
  if (!usuarioRespuesta) {
    console.log("ahhhh");
  } else if (usuarioRespuesta == respuesta) {
    respuestasCorrectas++;
  }
}

function mandarQuiz(respuestaDOM, respuesta) {
  var usuarioRespuesta = respuestaDOM.value;
  if (respuestaDOM.value === "") {
    console.log("ahhhh");
  }
  if (usuarioRespuesta == respuesta) {
    //respuestasCorrectas = respuestasCorrectas + 1;
  }
}

function respuestas() {
  if (respuestasCorrectas === 3) {
    var mensaje = "<h2>Te ganaste la corona de oro!</h2>";
  } else if (respuestasCorrectas === 2) {
    var mensaje = "<h2>Te ganaste la corona de plata!</h2>";
  } else {
    var mensaje = "<h2>Perdiste :(</h2>";
  }
  return mensaje;
}

function imprimir(mensaje) {
  document.write(mensaje);
}

//imprimir(respuestas());
