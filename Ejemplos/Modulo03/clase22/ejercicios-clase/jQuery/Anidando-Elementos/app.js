var toggleList = $('#toggleList');
var listDiv = $('.list');
var descriptionInput = $('input.description');
var descriptionP = $('p.description');
var descriptionButton = $('button.description');
var addItemInput = $('input.addItemInput');
var addItemButton = $('button.addItemButton');

toggleList.on('click', function(){
  if(listDiv.css('display') === 'none' ){
    $(this).text('Hide list');
    listDiv.css('display', 'block');
  }else {
    $(this).text('Show list');
    listDiv.css('display', 'none');
  }
});

descriptionButton.on('click', function(){
    descriptionP.text(descriptionInput.val());
    descriptionInput.val("");
});

addItemButton.on('click', function(){
  var ul = $('ul');
  var li = $('ul li');
  ul.append('<li>' + addItemInput.val() + '</li>');
  addItemInput.val("");
});

removeItemButton.on('click', function(){
  var itemLast = $('li:last-child');
  itemLast.remove();  
});
  
  
  
  
  
  
  
  
  