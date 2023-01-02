//? ================== Tipos de Datos ================= 
// String
"Hello World"
'Hello World'
"Soy un String"
"I'am a String"

// Numeros
320  

// Boolean: Solo puede tener dos valores, verdadero o falso
true
false

// Null: Es un valor que no existe, se usa cuando se quiere limpiar una variable.
null

// Undefined: Es un valor que no existe se utiliza cuando una variable no tiene valor
undefined

// Array: Es una lista de valores, se puede tener un array de strings, numeros, booleanos, etc.
let array = [1,2,3,4,5]
console.log(array);

// Object: Es un objeto que tiene propiedades y valores, se puede tener un objeto con strings, numeros, booleanos, etc.
let object = {
	name: 'John',
	age: 30,
	developer: true
}
console.log(object);

// La diferencia entre null y undefined es que undefined es un valor que no se ha definido y null es un valor que se ha definido pero no tiene valor
// Ejemplo:
let name = 'John'
name = null
console.log(name); 
console.log("Este es el tipo  null " + typeof name);
//  Es de tipo objeto porque es un valor que no existe, pero es un valor que se ha definido.
let name2 = 'Ryan'
name = undefined
console.log("Este es el tipo de undefined" + typeof name2);
// Es de tipo undefined porque es un valor que no existe y no se ha definido.

//? ================== Variables =================
// Respecto a Let: se puede usar let para declarar variables que se van a modificar.
// Ejemplo:
let ejemplolet = 'John'
ejemplolet = 'Ryan'
console.log("Este es el ejemplo de let: " + ejemplolet);
// Respecto a Const: se puede usar const para declarar variables que no se van a modificar.
// Ejemplo:
const ejemploconst = 'John'
console.log("Este es el ejemplo de const: " + ejemploconst);
// En este caso nos va a dar un error porque no se puede modificar una variable constante.

//? ================== Operadores =================
// Operadores Aritmeticos
// Suma
let suma = 1 + 2
console.log("Este es la suma: " + suma);
suma = suma + 10
console.log("Este es la suma reasiganada: " + suma);
// Resta
let resta = 1 - 2
console.log("Este es la resta: " + resta);
// Multiplicacion
let multiplicacion = 1 * 2
console.log("Este es la multiplicacion: " + multiplicacion);
// Division
let division = 1 / 2
console.log("Este es la division: " + division);
// Modulo que es el residuo de una division
let modulo = 1 % 2
console.log("Este es el modulo: " + modulo);
// Incremento es igual a incremento + 1 
let incremento = 1
incremento++
console.log("Este es el incremento: " + incremento);
// Decremento es igual a decremento - 1
let decremento = 1
decremento--
console.log("Este es el decremento: " + decremento);

// Operadores de Asignacion: Son operadores que se usan para asignar valores a una variable
// Asignacion
let asignacion = 1
console.log("Este es el ejemplo de asignacion: " + asignacion);

// Asignacion de suma
let asignacionsuma = 1
asignacionsuma += 2 // Esto es igual a asignacionsuma = asignacionsuma + 2
console.log("Este es el ejemplo de asignacion de suma: " + asignacionsuma);

// Asignacion de Resta
let asignacionresta = 2
asignacionresta -= 1 // Esto es igual a asignacionresta = asignacionresta - 1
console.log("Este es el ejemplo de asignacion de resta: " + asignacionresta); 

// Asignacion de Multiplicacion
let asignacionmultiplicacion = 3 
asignacionmultiplicacion *=3 // Esto es igual a asignacionmultiplicacion = asignacionmultiplicacion * 3
console.log("Este es el ejemplo de asignacion de multiplicacion: " + asignacionmultiplicacion);

// Asignacion de Division
let asignaciondivision = 4 
asignaciondivision /= 2 // Esto es igual a asignaciondivision = asignaciondivision / 2
console.log("Este es el ejemplo de asignacion de division: " + asignaciondivision);

// Asignacion de Modulo
let asignacionmodulo = 5
asignacionmodulo %= 2 // Esto es igual a asignacionmodulo = asignacionmodulo % 2
console.log("Este es el ejemplo de asignacion de modulo: " + asignacionmodulo);
// El resultado es 1 porque el modulo es el residuo de una division y 5/2 = 2.5 y el residuo es 1 porque 2.5 no es un numero entero y el residuo es 1 y no 2.5 ya que el residuo es el numero que sobra de la division.

// Operadores de Comparacion: Son operadores que se usan para comparar valores y devolver un valor booleano (true o false)
// Igualdad
let igualdad = 1 == 1
console.log("Este es el ejemplo de igualdad: " + igualdad);
// No se usa 1 = 1 porque 1 = 1 es una asignacion y no una comparacion

// Desigualdad
let desigualdad = 1 != 1
console.log("Este es el ejemplo de desigualdad: " + desigualdad);

// Mayor que
let mayorque2 = 2 > 1
console.log("Es 2 mayor que 1: " + mayorque2);
let mayorque1 = 1 > 1
console.log("Es mayor 1 que 1: " + mayorque1);

// Menor que
let menorque4 = 4 < 2
console.log("Es 4 menor que 2: " + menorque4);
let menorque5 = 4 < 5
console.log("Es 4 menor que 5: " + menorque5);

// Mayor o igual que
let mayoroigualque6 = 6 >= 6
console.log("Es 6 mayor o igual que 6: " + mayoroigualque6);
let mayoroigualque7 = 7 >= 6
console.log("Es 7 mayor o igual que 6: " + mayoroigualque7);
let mayoroiqualque8 = 8 >= 9
console.log("Es 8 mayor o igual que 8: " + mayoroiqualque8);

// Menor o igual que 
let menoroigualque9 = 8 <= 9
console.log("Es 8 menor o igual que 9: " + menoroigualque9)
let menoroigualque10 = 10 <= 9 
console.log("Es 10 menor o igual que 9: " + menoroigualque10)

// Pasemos a la comparacion de cadenas algo asi como 
cadenascomp = "73" < "9"
console.log(cadenascomp)

cadenascomp2 = "73" < "73"
console.log(cadenascomp2)

// El criterio de ordenacion se basa en una compracacion binaria que esta por detras 

// aaa = 01100001 01100001 01100001
// aa = 01100001 01100001
cadenascomp3 = "aaa" > "aa"
console.log(cadenascomp3)


//? Formas de Escribir variables 

// camelcase
let userName = 'Gato'
// snake_case
let user_name = 'Gato'
// PascalCase
let UserName = 'Gato'


// Concatenacion de variables
let usernamee = 'Gato'
let id = 3045
let usertag = usernamee + '#' + id
console.log(usertag)


//? ============== Condicionales ==============
let passwordDB = "pipo123"

let input = "vicho123"

let result = passwordDB == input;
console.log(result)

if (result === true) {
	console.log("El login ha funcionado! Bienvenido!")

} else {
	console.log("El login ha fallado")
}


// Ejercicio score. Muestra un document write segun los scores alcanzados en el juego

let score = 70;

if (score >= 70) {
	console.log("Te encuentras en el 1% de jugadores");
} else if (score >= 50) {
	console.log("Te encuentras en el 10% de jugadores");
} else if (score >= 30) {
	console.log("Te encuentras en el 30% de jugadores");
} else {
	console.log("Necesitas practicar mas");
}

// Switch 

let typecard = 'Gato Card';

switch(typecard) {
	case 'Debit Card':
		console.log("Estas utilizando una tarjeta de debito")
		break;
	case 'Credit Card':
		console.log("Estas utilizando una tarjeta de credito")
		break;
	case 'Prepaid Card':
		console.log("Estas utilizando una tarjeta prepago")
		break;

	// Que pasa si no es ninguno de los otros
	default:
		console.log("Esa targeta ya no es valida")
		break 
}


//   While   Imprimir 50 veces hola mundo


// Tenemos una variable con valor de 10 . si count > 0 sumale + 10
// Y si count llega a 50 break;
let count = 0
while(count >= 0){
	console.log("Estamos en " + count)
	count = count + 5;
	if (count == 50) {
		console.log("Hemos llegado a 50")
		break;
	}
}

let count2 = 20;

while(count2 > 0) {
	console.warn("Estamos en "+ count2)
	count2 = count2 - 1;
	if (count2 == 10) {
		console.error("Hemos llegado a 10")
	
	} if (count2 == 0) { 
		console.error("Hemos llegado a 0")
		break;
	}
}













































