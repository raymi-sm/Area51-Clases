var input = document.querySelector('input');
var p = document.querySelector('p.description');
var button = document.querySelector('button');
/*
button.addEventListener('click', function() {
  p.innerHTML = input.value + ':';
});

button.addEventListener('click', function() {
  p.textContent = input.value + ':';
});
*/

p.innerHTML = input.value;
p.textContent = input.value;