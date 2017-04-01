// Programa para calcular el número de segundos en un día

/*var segPorMin = 60;
var minPorHora = 60;
var horaPorDia = 24;
var semanasPorAnio = 52;

var segundosPorDía =  segPorMin * minPorHora * horaPorDia;*/


// Solucion de ejercicio

var preguntas = 3;
var preguntaSaldo = ' [quedan ' + preguntas + ' preguntas]';
var adjetivo = prompt('Escribe aquí un adjetivo' + preguntaSaldo);
preguntas -= 1;
var preguntaSaldo = ' [quedan ' + preguntas + ' preguntas]';
var sustantivo = prompt('Escribe aquí un sustantivo' + preguntaSaldo);
preguntas -= 1;
var preguntaSaldo = ' [quedan ' + preguntas + ' preguntas]';
var verbo = prompt('Escribe aquí un verbo' + preguntaSaldo);
alert('Todo listo!');
var oracion = '<h1>Había una vez un programador que ' + adjetivo + ' quería aprender a Ruby y ' + sustantivo + ' para ' + verbo + '</h1>';
document.write(oracion);
