(function(){
	var addValue = document.getElementById('add');

	addValue.addEventListener('click', function(event){
		event.preventDefault();
		// Agregando item
		var inputField = document.getElementById('post-field').value;
		var titulo = document.querySelector('.titulo-dinamico');
		if(inputField){
			var lista = document.getElementById('to-do');
			var item = document.createElement('li');
			item.className ='item';
			item.innerHTML = '<p>' + inputField + '</p>' + '<div class="icons"><span class="fa fa-trash-o"></span>' + '<span class="fa fa-check"></span></div>' ;
			lista.appendChild(item);
			document.getElementById('post-field').value = "";
		}else {
			alert('OYEEEEE TIENES QUE PONER ALGO PRIMERO D:')
		}

		var listaItems = document.getElementsByClassName('item');
		for(var i=0; i < listaItems.length; i++){
			listaItems[i].addEventListener('click', function(){
				titulo.innerHTML = inputField;
			});
		}

	});
})();
/*
var agregarItem = document.getElementById('add');

agregarItem.addEventListener('click', function(event){
	event.preventDefault();
	var campoTexto = document.getElementById('post-field');
	var campoTextoValue = campoTexto.value;

	var lista = document.createElement('li');
	lista.innerHTML = campoTextoValue;

	var listaWrap = document.getElementById('to-do');
	listaWrap.append(lista);
});*/
