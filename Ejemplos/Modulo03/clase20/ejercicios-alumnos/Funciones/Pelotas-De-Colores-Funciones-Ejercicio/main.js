/*

var divColor = '';
var rojo, verde, azul, colorRGB;

for( var i = 1; i <= 100; i++ ){
	rojo = Math.floor(Math.random() * 256);
	verde = Math.floor(Math.random() * 256);
	azul = Math.floor(Math.random() * 256);
	colorRGB = 'rgb(' + rojo + ',' + verde + ',' + azul + ')';
	divColor += '<div class="colores" style="background-color:' + colorRGB + '"></div>';
}

document.write(divColor);

*/

var divColor = '';
var colorRGB;

function randomRGB() {
 return Math.floor(Math.random() * 256 ) + 1; 
}

function randomColor() {
  var color = 'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ');';
  return color;
}

function print(message) {
  document.write(message);
}

for (var i = 0; i < 100; i += 1) {
  colorRGB = randomColor();
  divColor += '<div class="colores" style="background-color:' + colorRGB + '"></div>';
}

print(divColor);