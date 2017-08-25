var terminasteBTN = document.querySelector("#button");

terminasteBTN.addEventListener("click", check);

function check(e) {
  e.preventDefault();
  var pregunta1 = document.querySelector(".pregunta1").value;
  var pregunta2 = document.querySelector(".pregunta2").value;
  var pregunta3 = document.querySelector(".pregunta3").value;
  var pregunta4 = document.querySelector(".pregunta4").value;

  var respuestasCorrectas = 0;

  if (pregunta1 == "Donald Trump") {
    respuestasCorrectas++;
  }

  if (pregunta2 == 8) {
    respuestasCorrectas++;
  }

  if (pregunta3 == "Enrique Peña Nieto") {
    respuestasCorrectas++;
  }

  if (pregunta4 == "Puerto Principe") {
    respuestasCorrectas++;
  }

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

  console.log(
    "Respuestas Correctas: " + respuestasCorrectas + " El rango es: " + rango
  );

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
