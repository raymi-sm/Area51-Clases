/* 
    El adivinador de números

    El ejercicio consiste en que el usuario adivine un número entre 1 y 10. Si adivina dicho número saldrá un mensaje ganador y si no, saldrá un mensaje para que el usuario lo intente de nuevo

    Pasos para armar el ejercicio
    
    1. Crear una variable que guarde el número aleatorio entre 1 y 10
    2. Usar prompt() para que el usuario pueda ingresar el número y adivinar
    3. Guardar el número ingresado por el usuario en una variable
    4. Comparar el valor del número ingresado y evaluar las siguientes condiciones:
      a. Si el valor que coloco el usuario es igual al número aleatrorio entonces colocar un mensaje ganador. 
      b. Si el valor que coloco el usuario es mayor que el numero aleatorio se le dara un mensaje al usuario con una pista que debe de usar un numero menor para adivinar
      c. Si el valor que coloco el usuario es menor que el numero aleatorio se le dara un mensaje al usuario con una pista que debe de usar un numero mayor para adivinar
    5. Si ninguna de las pistas funciona, se le mostrará un mensaje de que perdio junto a al numero que tenia que adivinar.

  */



var numeroRandom = Math.floor(Math.random() * 10) + 1;
console.log(numeroRandom);
var usuarioAdivinador = prompt("Estoy pensando en un numero del 1 al 10. Adivina cual es");

if(parseInt( usuarioAdivinador ) === numeroRandom) {
    document.write("Ganaste");
}else if( parseInt( usuarioAdivinador ) < numeroRandom ){
    var adivinadorMayor = prompt("Intentalo de nuevo. El numero que estoy pensando es mayor que " + usuarioAdivinador);
    if( parseInt(adivinadorMayor) === numeroRandom ){
        document.write("Ganaste")
    }else {
        document.write("<p>Perdiste Chibolax. El numero era " + numeroRandom + "</p>");
    }
}else if( parseInt( usuarioAdivinador ) > numeroRandom ) {
    var adivinadorMenor = prompt("Intentalo de nuevo. El numero que estoy pensando es menor que " + usuarioAdivinador);
    if( parseInt(adivinadorMenor) === numeroRandom ){
        document.write("Ganaste");
    }else {
        document.write("<p>Perdiste Chibolax. El numero era " + numeroRandom + "</p>");
    }
}