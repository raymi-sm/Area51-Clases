/* Objetos

	Propiedades: Caracteristicas del objeto.
	Metodos: Acciones que realiza el objeto.

*/

// Seleccionando un campo de texto desde JavaScript

document.getElementById("campo-texto");

document.getElementById("campo-texto").value;

// Seleccionando el mismo campo pero guardandolo en una variable

// Creando un nuevo div con texto y colocandolo en el HTML desde JavaScript

/*var newDiv = document.createElement("div"); 

var newContent = document.createTextNode("Hi there and greetings!");

newDiv.appendChild(newContent);
document.body.prepend(newDiv);*/








var submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function(){
	/*var campoText = document.getElementById("campo-texto").value;
	var campoValue = campoText;
	console.log(campoValue);*/
	console.log("me estan clickeando");
});

submitBtn.addEventListener("click", function(){ alert("Mensaje"); })


var node = document.getElementById("container");
var a = document.createAttribute("my_attrib");
a.value = "newVal";
node.setAttributeNode(a);
console.log(node.getAttribute("my_attrib"));