var toggleList = $('#toggleList');
var listDiv = $('.list');
var input = $('input.description');
var p = $('p.description');
var button = $('button.description');

toggleList.css('background-color', 'purple');
console.log(listDiv.hasClass('list'));
listDiv.height(480);
console.log('El ancho de listDiv es: ', listDiv.width());
// Sacar las coordenadas de un elemento
var offSet = listDiv.offset();
console.log(offSet);
p.html('top: ' + offSet.top + ' left: ' + offSet.left);
var offSetTop = Math.floor(offSet.top);
console.log(offSetTop);