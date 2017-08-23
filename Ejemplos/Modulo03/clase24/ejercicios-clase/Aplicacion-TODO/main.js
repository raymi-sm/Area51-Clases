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

(function() {
  var addValue = document.querySelector("#add");

  addValue.addEventListener("click", function(event) {
    event.preventDefault();
    var campoTexto = document.getElementById("post-field").value;
    var titulo = document.querySelector(".titulo-dinamico");
    if (campoTexto) {
      var lista = document.getElementById("to-do");
      var item = document.createElement("li");
      item.className = "item";
      //item.innerHTML = "<p>" + campoTexto + "</p>" + "<div><span class='fa fa-trash-o'></span>" + "<span class='fa fa-check'></span></div>";
      item.innerHTML = "<p>" + campoTexto + "</p>";
      lista.appendChild(item);
      document.getElementById("post-field").value = "";
    } else {
      alert("OYEEE TIENES QUE PONER ALGO PRIMERO U_U");
    }

    var listaItems = Array.from(document.querySelectorAll(".item"));
    var basurita = document.querySelector(".fa-trash-o");
    /*
        for(var contador = 0; contador < listaItems.length; contador++){
            listaItems[contador].addEventListener("click", function(){
                titulo.innerHTML = campoTexto;
            });
        }
    */
    listaItems.forEach(function(item) {
      item.addEventListener("click", function() {
        titulo.innerHTML = campoTexto;
      });
      basurita.addEventListener("click", function() {
        item.style.display = "none";
        titulo.style.display = "none";
      });
    });
  });
})();
