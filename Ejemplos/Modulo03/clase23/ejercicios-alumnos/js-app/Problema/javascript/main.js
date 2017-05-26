/*Lista de pasos para hacer todo-app

	1. Obtener el campo de texto
	2. Obtener el boton
	3. Activar el evento click
	4. Una vez que el botón es clickeado, obtner el valor del campo de texto
	5. Poner el valor debajo de mi app
	6. Obtener el elemento de la lista que voy a clickear
	7. Clickear dicho elemento
	8. Obtener el valor del elemento y cambiar el titulo por defecto por dicho valor
*/

(function(){
	var addValue = document.getElementById("add");
	addValue.addEventListener("click", function(event){
		event.preventDefault();
		
		var inputField = document.getElementById("post-field").value;
		var titulo = document.querySelector(".titulo-dinamico");
		if(inputField){
			var lista = document.getElementById("to-do");
			var item = document.createElement("li");
			item.className = "item";
			item.innerHTML = inputField;
			lista.append(item);
			document.getElementById("post-field").value = "";
		}
		else {
			alert("oye no has escrito nada tonto");
		}

		var listaItems = document.querySelector(".item");
		console.log(listaItems);
		
		for( var i=0; i<listaItems.length; i++ ){
			console.log(listaItems[i]);
			listaItems[i].addEventListener("click", function(event){
				event.preventDefault();
				titulo.innerHTML = this.innerHTML;
			});
		}
	});

})();




