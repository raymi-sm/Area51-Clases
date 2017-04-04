// Eventos: Comunicación entre lo que hace el usuario y el navegador

// Evento Click

var agregarItem = document.getElementById('add');

agregarItem.addEventListener('click', function(event){
	event.preventDefault();
	var campoTexto = document.getElementById('post-field');
	var campoTextoValue = campoTexto.value;

	var lista = document.createElement('li');
	lista.innerHTML = campoTextoValue;

	var listaWrap = document.getElementById('to-do');
	listaWrap.append(lista);
});
