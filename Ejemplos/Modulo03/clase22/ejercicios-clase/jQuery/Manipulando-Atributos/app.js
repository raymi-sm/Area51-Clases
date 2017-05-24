var input = $('input');
var p = $('p.description');
var button = $('button');


input.addClass('input-class');
input.removeClass('description');

console.log(input.attr("type"));
input.attr("type", "checkbox");
