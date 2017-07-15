/* 
  Ejercicio Arreglos

  El ejercicio consiste en crear un lista de máximo 6 productos, cada producto con sus respectivos precio.
*/

var productos = ['Polos', 'Faldas', 'Pantalones', 'Zapatillas', 'Medias', 'Brasieres'];

var precios = [100, 50, 20, 10, 80, 40];

document.write(
  '<ul><li>' + productos[0] + ' <span>' + '$' + precios[0] + '</span></li>' + 
  '<li>' + productos[1] + '</li>' + 
  '<li>' + productos[2] + '</li>' +
  '<li>' + productos[3] + '</li>' + 
  '<li>' + productos[4] + '</li>' +
  '<li>' + productos[5] + '</li>' +
  '</ul>'
);

debugger

document.write('<p>' + productos.join('--') +'</p>');

document.write('<p>' + productos.splice(0, 2) + '</p>');
document.write('<p>' + productos + '</p>');

productos.push('<li>Calzones</li>');