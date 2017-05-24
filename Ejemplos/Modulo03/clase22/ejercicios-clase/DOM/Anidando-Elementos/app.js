var addItemInput = document.querySelector('input.addItemInput');
var addItemButton = document.querySelector('button.addItemButton');

/*
addItemButton.addEventListener('click', function() {
  var ul = document.getElementsByTagName('ul')[0];
  var li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});
  
  
var ul = document.getElementsByTagName('ul')[0];
var li = document.createElement('li');
li.textContent = 'New Item';
ul.appendChild(li);
*/

var ul = document.getElementsByTagName('ul')[0];
var li = document.createElement('li');
li.textContent = 'New Item';
ul.prepend(li);
  
  
  
  
  
  
  