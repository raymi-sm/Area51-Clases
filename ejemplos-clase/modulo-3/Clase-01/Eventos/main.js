// Eventos: Comunicación entre lo que hace el usuario y el navegador

// Evento Click
var campoTexto = document.getElementById('campo-texto').value;
var submitBTN = document.getElementById('submit-btn');


submitBTN.addEventListener('click', function(){
  console.log("hello");
});
