var terminasteBTN = document.querySelector("#button");

var mensajes = [
  "No sabes nada",
  "Tienes que estudiar",
  "Estudia Mas",
  "Estas listo para conquistar el mundo"
];

var imagenes = [
  "images/no-sabes-nada-meme.gif",
  "images/tienes-que-estudiar-meme.gif",
  "images/estudia-mas-meme.gif",
  "images/like-a-boss-meme.gif"
];

var rango = 0;

var respuestasCorrectas = 0;

terminasteBTN.addEventListener("click", check);

function check(evento) {
  evento.preventDefault();
  var usuarioRespuesta = Array.from(document.querySelectorAll(".pregunta"));
  var respuestas = [51, 8, "Enrique Peña Nieto", "Puerto Principe"];

  var nuevoArr = usuarioRespuesta.concat(respuestas);
  if (nuevoArr[0].value == nuevoArr[4]) {
    respuestasCorrectas++;
  }

  if (nuevoArr[1].value == nuevoArr[5]) {
    respuestasCorrectas++;
  }

  if (nuevoArr[2].value == nuevoArr[6]) {
    respuestasCorrectas++;
  }

  if (nuevoArr[3].value == nuevoArr[7]) {
    respuestasCorrectas++;
  }

  puntaje();
}

function puntaje() {
  if (respuestasCorrectas == 4) {
    rango = 3;
  }

  if (respuestasCorrectas == 3) {
    rango = 2;
  }

  if (respuestasCorrectas == 2) {
    rango = 1;
  }

  if (respuestasCorrectas == 1) {
    rango = 0;
  }

  var afterSubmit = document.querySelector(".after-submit");
  afterSubmit.style.opacity = "1";

  var correctas = document.querySelector(".correctas");
  var mensajePrint = document.querySelector(".mensaje");
  correctas.innerHTML = "Tuvsite " + respuestasCorrectas + " correctas";
  mensajePrint.innerHTML = mensajes[rango];

  var meme = document.getElementById("imagen");
  meme.src = imagenes[rango];
}
