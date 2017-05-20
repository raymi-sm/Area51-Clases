/* 

Las funciones son un bloque de instrucciones que nosotros podemos correr en multiples ocasiones.
Supongamos que yo tengo una asistente y quiero que todas las mañanas me traiga café. 
El primer día yo puedo darle las instrucciones de como llegar a la caferería más cercana de la oficina y que café quiero que me traiga.

A pesar de en ese momento no me trae ningún café, al día siguiente puedo decirle "Asistente, traeme un café" y mi asistente, que ha guardado mis instrucciones en su memoria el día anterior, simplemente irá por mi café y así puedo decirle que me traiga café todos los días
*/

/* 
  Declarando Funciones


function vePorMiCafe() {
  document.write('Voy por tu café!');
}

vePorMiCafe();

*/ 

function mensaje(mensaje) {
  //document.write(mensaje);
  //console.log(mensaje);
  alert(mensaje);
}

//Ejemplo con Generador de Numeros Aleatorios

/*
function generarNumeroAleatorio() {
  var numeroAleatorio = Math.floor( Math.random() * 10 ) + 1;
  document.write('<div class="container"><p>' + numeroAleatorio + '</p></div>');
}

generarNumeroAleatorio();
generarNumeroAleatorio();
generarNumeroAleatorio();
generarNumeroAleatorio();
*/

/*
Los programas que hemos escrito hasta ahora corren desde el comienzo del archivo, corren línea por línea hasta el final del archivo. 

En la clase anterior vimos que las condicionales cambiaban el flujo de un programa condicionando las acciones del programa si la condición era verdadera o falsa. Sin embargo aún el programa se leía línea por línea.

Las funciones cambian este flujo. Cada vez que la función es ejecutada el navegador sube a la función, corre el código y luego regresa al lugar en donde la función fue llamada

*/

//Segunda forma de declarar una funcion

var generarNumeroAleatorio = function() {
  var numeroAleatorio = Math.floor( Math.random() * 10 ) + 1;
  document.write('<div class="container"><p>' + numeroAleatorio + '</p></div>')
};

generarNumeroAleatorio();
generarNumeroAleatorio();
generarNumeroAleatorio();
generarNumeroAleatorio();