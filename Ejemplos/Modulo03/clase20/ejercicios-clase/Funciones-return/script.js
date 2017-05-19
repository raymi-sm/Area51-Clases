/* 
  Que hace return: return sale de la función y envía un valor de vuelta al lugar en donde la función fue ejecutada

*/


/*function vePorMiCafe() {
  return 'Tu café americano ya llega!';
}

function obtenerNumeroRandom() {
  var numeroRandom = Math.floor(Math.random() * 6) + 1;
  return numeroRandom;
}

console.log(obtenerNumeroRandom());*/

function correoEstaVacio() {
  var campoTexto = document.querySelector('input').value;
  if(campoTexto === " ") {
    return true;
  }else {
    return false;
  }
}

var campoPrueba = correoEstaVacio();

if(campoPrueba) {
  document.write('<div class="container"><p>El campo está vació</p></div>');
}else {
  document.write('<div class="container"><p>el campo está lleno</p></div>');
}

/* 
  Colocarle un return a una función obliga al interpretador de javascript a salir de la función una vez se ha corrido el return
*/

function noAlerta() {
  return 5;
  alert('esta alerta no se va a ejecutar');
}

noAlerta();

function siAlerta() {
  alert('esta alerta no se va a ejecutar');
  return 5;
}
