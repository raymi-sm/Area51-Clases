var input = document.querySelector('input');
var p = document.querySelector('p.description');
var button = document.querySelector('button');

console.log(input.type);
console.log(input.type = 'checkbox');
console.log(p.className = 'new-description');
p.setAttribute('style', 'background: red;');
input.setAttribute('name', 'my-text')
p.classList.add('nuevaClase');
