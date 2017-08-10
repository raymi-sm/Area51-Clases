/*
var sustantivo = prompt('Escribe un sustantivo');
var adjetivo = prompt('Escribe un adjetivo');
var verbo = prompt('Escribe un verbo');
alert("¿Estás listo para tu historia?");
var historia = '<p> Habia una vez un ' + sustantivo + ' ' + 'que era muy ' + adjetivo + ' ' + 'y le gustaba salir a ' + verbo + '</p>'
document.write(historia);
*/

var sustantivo = document.getElementById('sustantivo');
var adjetivo = document.getElementById('adjetivo');
var verbo = document.getElementById('verbo');

var palabra = document.querySelectorAll('.palabra');
var cuento = document.querySelector('.cuento');
var button = document.querySelector('.oracion-btn');

button.addEventListener('click', cuentaCuentos);

function cuentaCuentos(e) {
  e.preventDefault();
  if(sustantivo.value != '' && adjetivo.value != '' && verbo.value != '' ) {
     var oracion = document.createElement('p');
      oracion.innerHTML = 'Habia una vez un ' + sustantivo.value + ' que era muy ' + adjetivo.value + ' y le gustaba ' + verbo.value;
      cuento.appendChild(oracion);
      for(var i=0; i<palabra.length; i++){
        palabra[i].value = ' ';
        palabra[i].className = 'palabra';
      }
   }
   
   for(var i=0; i<palabra.length; i++){
    if(palabra[i].value === ''){
      palabra[i].classList.add('input-wrong');
    }
   }
}
 