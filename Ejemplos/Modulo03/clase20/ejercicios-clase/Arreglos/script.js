var nombre1 = "raymi";
var nombre2 = "daniel";
var nombre3 = "elder";
var nombre4 = "juan carlos";
var nombre5 = "daniela";


var listaNombres = ["Raymi","Daniel","Elder","Juan Carlos","Daniela","Camila","Cesar","Sue"];
//console.log(listaNombres);

var listaDatos = ["Elder","Susana",30,50,100]
//console.log(listaDatos);

var superArreglo = ["valor1",20,listaNombres,listaDatos]
//console.log(superArreglo);

//console.log("este es el valor del indice 1 "+listaNombres[1]);
//console.log("este es el valor del indice 2 "+listaNombres[2]);
//console.log("este es el valor del indice 3 "+listaNombres[3]);
//console.log("este es el valor del indice 4 " +listaNombres[20]);

//console.log(superArreglo)
//console.log(superArreglo[2])
//console.log(superArreglo[2][3])




var nombres = ["juan carlos", "diego", "martin"];
//console.log(nombres);
//console.log(nombres[0]);
//console.log(nombres[1]);
//console.log(nombres[2]);

/*
var meses = [
	"Enero" ,
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Setiembre",
	"Octubre",
	"Noviembre",
	"Diciembre"
];

var dias = [
	"Lunes",
	"Martes",
	"Miercoles",
	"Jueves",
	"Viernes",
	"Sabado",
	"Domingo"
];
*/
	
var fechaActual = new Date();
var indiceMes = fechaActual.getMonth();
//console.log(meses[indiceMes]);

//console.log(meses);

var fechaActual = new Date();

//console.log(fechaActual.getMonth());
//console.log("el mes actual es : "+meses[fechaActual.getMonth()]);
//console.log(fechaActual.getDay());
//console.log("el dia actual es : "+dias[fechaActual.getDay()-1]);


var fechaPartes = [20, 12, 2014]; 
console.log("Inicial", fechaPartes);

console.log("arreglo unido por / ", fechaPartes.join("-") );
console.log("Último elemento borrado", fechaPartes.pop() )
console.log(fechaPartes);
console.log("Con nuevo elemento", fechaPartes.push(2016));
console.log("arreglo modificado", fechaPartes);

console.log("Cantidad de elementos del arreglo", fechaPartes.length );
console.log("Posición del elemento con valor 12", fechaPartes.indexOf(12) );
console.log("Al revés", fechaPartes.reverse() );
console.log("Agregando elementos", fechaPartes.concat(25, 1, 2015,33,45,1098) );

/*var pass = prompt("Ingrese su contraseña");
var carecteres = pass.split("");

console.log(carecteres);

var arroba = carecteres.indexOf("@");
var punto = carecteres.indexOf(".");
console.log("existe un arroba?")
console.log(arroba);
console.log("existe un punto?")
console.log(punto);
*/

	var imagenesIndex = document.querySelectorAll('.imagenes');
	var imagenesArray = Array.from(imagenesIndex);
	console.log("Haciendo push: " + imagenesArray.push(10));
	console.log(imagenesArray);

	/*for(var i=0; i < imagenesIndex.length; i++) {
		if(imagenesIndex[i].className === 'imagenes hide') {
			imagenesIndex[i].setAttribute('style', 'display:none');
		}
	}*/