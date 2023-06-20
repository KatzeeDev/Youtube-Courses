//Variables
var nombre = "Matias"; // String
var numero = 888; // Number
var esFalso = false; // Boolean

// Arreglos
var conjuntoDeNombres = ["Vicho", "Copito"]; // Arreglos de Strings
var conjuntoDeNumeros = [1, 2, 3, 4]; // Arregkis de Numeros
var conjuntoDeBooleanos = [true, false]; // Arreglos de Booleanos
var conjuntoDeArreglos = [conjuntoDeBooleanos, conjuntoDeNumeros]; // Arreglo con arreglos  dentro
console.log(conjuntoDeArreglos);

var combinado = ["Matias", 7, esFalso, numero, true, conjuntoDeNumeros]; // Arreglo con distintos tipos y estructuras de datos.

// Impresion de esos arreglos en consola
console.log(nombre);
console.log(conjuntoDeNombres);
console.log(conjuntoDeNumeros);
console.log(combinado);

// Reasignacion de Variables
var conjuntoDeNombres2 = conjuntoDeNombres;
conjuntoDeNombres2 = 1;
console.log(conjuntoDeNombres2);

// Testeo Simple del funcionamiento de estas
var conjunto1 = (conjunto2 = ["Prueba"]);
console.log(conjunto1);
conjunto1 = ["Pruebota"];
console.log(conjunto1);
console.log(conjunto2);

// Funciones
console.log(nombre);
console.log(numero);
console.log(esFalso);
console.log(conjuntoDeNombres);

// Funcion Void (No retorna nada)
function muetraMiVariableEnConsola(param) {
  console.log("Mi divina variable es: " + param);
}

muetraMiVariableEnConsola(nombre);
muetraMiVariableEnConsola(numero);
muetraMiVariableEnConsola(esFalso);

// Funciones que retornan valores
var name = "heisenberg";
function sayMyName(paramNombre) {
  return "..... " + paramNombre; // Retorna una solucion
}

console.log(sayMyName(name));

function sumaDeNumeros(num1, num2) {
  return num1 + num2 + " Es tu numero";
}
console.log(sumaDeNumeros(55, 45));

// Condicionales

function sumaDeNumeros(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2 + " ... Es tu numero 🤓";
  } else {
    return "Flaco Mete numeros!! 😾";
  }
}
console.log(sumaDeNumeros(55, 45));
console.log(sumaDeNumeros(55, "45"));

var variable1 = 1;
var variable2 = 2;

if (typeof variable1 === "number" && typeof variable2 === "number") {
  console.log(variable1 + variable2);
} else {
  console.log("No son numeros");
}

// Objetos (Es una representacion pequeña de la realidad que tienen propiedades)

var matias = {
  nombre: "Matias",
  edad: 24,
  mascotas: conjuntoDeNombres,
};

console.log(matias);

function esMayorDeEdad(persona) {
  if (persona.edad >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(esMayorDeEdad(matias));

// Ahora simplifiquemos la funcion haciendo algo llamado Shorthand
function esMayorDeEdad2(persona) {
  return persona.edad >= 18;
}
console.log(esMayorDeEdad(matias));

// Loops o Ciclos     WHILE

var mascotas = ["Vicho", "Copito", "Agata", "Oddie"]; // Array de String

console.log(mascotas.length);

function mostrarMisMascotas(nombres) {
  var index = 0;
  while (index < mascotas.length) {
    // El indice es menor a la longitud de nombres?   (En este caso 3)
    console.log(nombres[index]); // Escribe lo que tenga en el valor 0, 1 , 2
    index += 1;
  }
}
mostrarMisMascotas(mascotas);

// Loop FOR

var gatos = ["Vicho", "Copito"];

function mostrarMisGatos(nombres) {
  // Yo voy a crear una variable index que sera igual a 0 y siempre cuando eso sea menor al de los nombres le sumare 1 al final
  for (var index = 0; index < nombres.length; index++) {
    console.log(nombres[index]);
  }
}
mostrarMisGatos(gatos);

// Diferencia entre While y For. El for es para buscar.

console.log(conjuntoDeNumeros);

// Primero vamos a buscar utilizando un IF
function mostrarMisNumeros(numeros) {
  //
  for (var index = 0; index < numeros.length; index++) {
    var numeroDelCicloActual = numeros[index];
    if (numeroDelCicloActual === 1) {
      console.log("Lo encontramos!! POLICIA!!!");
    } else {
      console.log(numeroDelCicloActual);
    }
  }
}

// EL problema es que se sigue ejecutando, en cambio el While se cortara

mostrarMisNumeros(conjuntoDeNumeros);
console.log("======================");

var conjuntoDeNumeros2 = [1, 2, 3, 4, 5, 6, 7, "Gato"];

function buscarNumeros(numeros, numeroABuscar) {
  var index = 0;
  var encontrado = "No lo hemos encontrado"; // cambio aquí
  while (index < numeros.length) { // cambio aquí
    if (numeros[index] === numeroABuscar) {
      encontrado = "Lo hemos encontrado!";
      break; // detenemos el bucle una vez encontrado el número
    }
    index += 1;
  }
  console.log(encontrado);
}

buscarNumeros(conjuntoDeNumeros2, 1);
buscarNumeros(conjuntoDeNumeros2, 3);
buscarNumeros(conjuntoDeNumeros2, "Gato");
buscarNumeros(conjuntoDeNumeros2, "Barbara");


console.log(conjuntoDeNombres);

function modificarYEscribirMisMascotasEnConsola (nombres) {
	var auxArray = [...nombres];
	for (let index = 0; index < auxArray.length; index++) {
		auxArray[index] = "Minnie";
	}
	console.log(auxArray);
}


modificarYEscribirMisMascotasEnConsola(conjuntoDeNombres);
console.log(conjuntoDeNombres);

