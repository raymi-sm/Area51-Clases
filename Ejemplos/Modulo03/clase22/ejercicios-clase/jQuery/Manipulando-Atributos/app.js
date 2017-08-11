var input = $('input[type="text"]');
var p = $('p.description');
var button = $('button');
var check1 = $('#check1');
var check2 = $('#check2');
var label1 = $('label[for="check1"]');
var label2 = $('label[for="check2"]');
console.log(label2);

input.addClass('input-class');
input.removeClass('description');
p.toggleClass('nuevaclase');

console.log(input.attr('type'));
input.attr('type', 'checkbox');
console.log(check1.prop("checked"));
console.log(check2.is(":checked"));
console.log(input.val());
check2.removeAttr('id');