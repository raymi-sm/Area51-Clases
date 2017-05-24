/*  
var persona = {
  nombre : 'Juan Carlos',
  pais : 'Peru',
  edad: 35,
  Area51Estudiante : true,
  habilidades : ['JavaScript', 'HTML', 'CSS']
};

*/

// Accediendo a las propiedades de un objeto
/*
alert(persona['nombre']);
alert(persona.nombre);
*/
// Agregando nuevas propiedades
/*
persona.ciudad = 'Lima';
console.log(persona);
*/

// Usando loops para los objetos

/*
for(var i=0; i<persona.habilidades.length; i++) {
document.write(persona.habilidades[i]);
}

for (prop in person) {
   //Esto está mal: console.log(prop, ': ', person.prop);
  console.log(prop, ': ', person[prop]);
}
*/

/*
var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}
*/

/*
  var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p>';
message += '<p>I live in the ' + person.country + '</p>';
person.name = 'Rainbow Dash';
message += '<p>But, I wish my name was ' + person.name + '</p>';
person.age += 1;
message += '<p>My age is now ' + person.age + '</p>';
message += '<p>I have ' + person.skills.length + ' skills: ' ;
message += person.skills.join(', ') + '</p>';
print(message);
*/

/* 
Usando el ejercicio de la clase anterior
// Sin objetos

var respuestasCorrectas = 0;
var pregunta, respuesta, usuarioRespuesta;

var preguntasYrespuestas = [
	[ '¿Cuántos estados tienen los Estados Unidos?', 50 ],
	[ '¿Cuántos continentes hay en el mundo', 7 ],
	[ '¿Cuántas patas tiene una araña', 8 ],
  [ '¿Cuantos dedos tiene un ser humano?', 5],
  [ '¿En que año Colón descubrió América?', 1492]
];

for(var i = 0; i < preguntasYrespuestas.length; i++){
	pregunta = preguntasYrespuestas[i][0];
	respuesta = preguntasYrespuestas[i][1];
	usuarioRespuesta = parseInt(prompt(pregunta));
	if(usuarioRespuesta === respuesta){
		respuestasCorrectas++
	}
}

document.write('Tuviste ' + respuestasCorrectas + ' respuestas correctas');
*/ 

/*
// Con Objetos

var respuestasCorrectas = 0;
var preguntaUsuario, respuestaUsuario, usuarioRespuesta;

var preguntasYrespuestas = [
  { 
    pregunta: '¿Cuántos estados tienen los Estados Unidos?',
    respuesta: 50
   },
   {
     pregunta:'¿Cuántos continentes hay en el mundo',
     respuesta: 7
   },
   {
     pregunta: '¿Cuántas patas tiene una araña',
     respuesta: 8
   },
   {
     pregunta: '¿Cuantos dedos tiene un ser humano?',
     respuesta: 5
   },
   {
     pregunta: '¿En que año Colón descubrió América?',
     respuesta: 1492
   }
];

for(var i = 0; i < preguntasYrespuestas.length; i++){
	pregunta  = preguntasYrespuestas[i].pregunta;
	respuesta = preguntasYrespuestas[i].respuesta;
	usuarioRespuesta = parseInt(prompt(pregunta));
	if(usuarioRespuesta === respuesta){
		respuestasCorrectas++
	}
}

if(respuestasCorrectas === 5) {
  document.write('Te ganaste la corona de oro!');
}else if(respuestasCorrectas === 3) {
  document.write('Te ganaste la corona de plata!');
}else if(respuestasCorrectas < 3) {
  document.write('Perdiste!');
}

document.write('Tuviste ' + respuestasCorrectas + ' respuestas correctas');
*/

