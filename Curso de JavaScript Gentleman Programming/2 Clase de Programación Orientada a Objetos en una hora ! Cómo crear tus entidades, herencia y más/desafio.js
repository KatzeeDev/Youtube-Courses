/*! 2. Una función que acepte y diga si un animal tiene más de dos patas y si
tiene o no cola si entra como un objeto el animal como parámetro */

let gato = {
	patas : 4,
	cola : true,
	orejas : 2
}


function detector(animal) {
	if(animal.patas > 2 && animal.cola === true)  {
		console.log("El animal tiene mas de 2 patas y tiene cola");
		return
	} if (animal.patas > 2 && animal.cola === false)  {
		console.log("El animal tiene mas de 2 patas pero no tiene cola");
	} else {
		console.log("El animal no tiene mas de 2 patas ni tampoco tiene cola");
	}
}

detector(gato);


//3 Escribe una función que es cree un mensaje pantallas saludando una persona por su nombre

let persona = "Matias";


function saludar(nombre) {
	console.log("Bienvenido Sr " + nombre)
}

saludar(persona);




// 4. Escribe una funcion que recorra un arreglo de personas, y por cada uno de esos elementos escriba un saludo

let arrayPersonas = ["Vicho", "Barbara", "Matias", "Barbara2"]

function recorrerArray (personas) {
	for (let index = 0; index < personas.length; index ++) {
		console.log("Hola!! " + personas[index])
	}
}

recorrerArray(arrayPersonas);


// 5. Escribe una funcion que busque dentro de un arreglo de persona aquella cuyo nombre empiece con a y sea mayor de 18 anos

let arrayOvejas = [
	{nombre: "Barbara", edad: 18},
	{nombre: "Barbara2", edad: 24},
	{nombre: "Barbara3", edad: 21},
	{nombre: "Barbara4", edad: 26},
	{nombre: "Barbara5", edad: 29},
	{nombre: "Agata", edad: 19},
	{nombre: "Vicho", edad: 19}
]


function encontrarOveja (ovejas) {
	for (let index = 0; index < ovejas.length; index++) 
	while (ovejas[index].nombre.startsWith("V") && ovejas[index].edad > 18){
		console.log("La oveja ha sido encontrada en la posicion : " + index);
		return
	}

	console.log("La oveja no ha sido encontrada");

}


encontrarOveja(arrayOvejas);


// Escribe una función llamada filtrarPersonas que reciba como parámetro un arreglo de objetos que representan personas. 
// La función debe filtrar las personas que cumplan con las siguientes condiciones:

/* Tener una edad mayor o igual a 18 años.
Tener una profesión específica, por ejemplo, "desarrollador".  
Tener una edad mayor o igual a 18 años.

*/ 

let personas = [
	{ nombre: "Barbara", edad: 25, profesion: "desarrollador" },
	{ nombre: "Matias", edad: 20, profesion: "desarrollador" },
	{ nombre: "Vicho", edad: 30, profesion: "diseñador" },
	{ nombre: "Copito", edad: 19, profesion: "desarrollador" },
	{ nombre: "Agata", edad: 22, profesion: "diseñador" }
 ];

 function filtrarPersonas(arrayPersonas) {
	let index = 0;
	let newArray = [];
 
	while (index < arrayPersonas.length) {
	  if (arrayPersonas[index].profesion === "desarrollador" && arrayPersonas[index].edad > 18) {
		 newArray.push(arrayPersonas[index]);
	  }
	  index++;
	}
	if (newArray.length > 0) {
	  console.log("Hemos encontrado a las siguientes personas:");
	  console.log(newArray);
	} else {
	  console.log("No hemos encontrado a ninguna persona que cumpla las condiciones.");
	}
 }
 
 filtrarPersonas(personas);
 
