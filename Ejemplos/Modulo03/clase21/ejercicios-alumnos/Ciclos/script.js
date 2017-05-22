/* 
  Ejercicio Bolas de Colores!

  El programa que tienes a continuación se trata de crear divs con diferentes colores que se cargan de manera aleatoria.

  La forma en como está escrito el código es ineficiente. Utiliza lo aprendido de ciclos para hacer este código más corto y simple.

*/

 
var divColor = '';
var rojo, verde, azul, colorRGB;

rojo = Math.floor(Math.random() * 256);
verde = Math.floor(Math.random() * 256);
azul = Math.floor(Math.random() * 256);
colorRGB = 'rgb(' + rojo + ',' + verde + ',' + azul + ')';
divColor += '<div class="colores" style="background-color:' + colorRGB + '"></div>';

rojo = Math.floor(Math.random() * 256);
verde = Math.floor(Math.random() * 256);
azul = Math.floor(Math.random() * 256);
colorRGB = 'rgb(' + rojo + ',' + verde + ',' + azul + ')';
divColor += '<div class="colores" style="background-color:' + colorRGB + '"></div>';

rojo = Math.floor(Math.random() * 256);
verde = Math.floor(Math.random() * 256);
azul = Math.floor(Math.random() * 256);
colorRGB = 'rgb(' + rojo + ',' + verde + ',' + azul + ')';
divColor += '<div class="colores" style="background-color:' + colorRGB + '"></div>';

rojo = Math.floor(Math.random() * 256);
verde = Math.floor(Math.random() * 256);
azul = Math.floor(Math.random() * 256);
colorRGB = 'rgb(' + rojo + ',' + verde + ',' + azul + ')';
divColor += '<div class="colores" style="background-color:' + colorRGB + '"></div>';

rojo = Math.floor(Math.random() * 256);
verde = Math.floor(Math.random() * 256);
azul = Math.floor(Math.random() * 256);
colorRGB = 'rgb(' + rojo + ',' + verde + ',' + azul + ')';
divColor += '<div class="colores" style="background-color:' + colorRGB + '"></div>';

document.write(divColor);

// Resolviendo el ejercicio con ciclos

for ( var i = 1; i <= 100; i += 1) {
  rojo = Math.floor(Math.random() * 256 );
  verde = Math.floor(Math.random() * 256 );
  azul = Math.floor(Math.random() * 256 );
  colorRGB = 'rgb(' + rojo + ',' + verde + ',' + azul + ')';
  divColor += '<div style="background-color:' + colorRGB + '"></div>';  
}

document.write(divColor);

// Agregando al ejercicio con funciones

var divColor = '';
var colorRGB;

function randomRGB() {
 return Math.floor(Math.random() * 256 ); 
}

function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

function print(message) {
  document.write(message);
}

for (var i = 0; i < 100; i += 1) {
  colorRGB = randomColor();
  divColor += '<div style="background-color:' + rgbColor + '"></div>';
}

print(divColor);