var anotherBG = document.body;
var randomNum = Math.floor(Math.random() * 3) + 1;
anotherBG.setAttribute(
  'style', 
  'background: url(images/img-' + randomNum + '.jpg);'
);