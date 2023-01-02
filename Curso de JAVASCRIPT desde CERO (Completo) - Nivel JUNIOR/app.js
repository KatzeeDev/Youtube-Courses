//? ====================== Variables ====================== 

// Let Va cambiando
let pepe = "pepito";
// Const  es constante
const userid = 0001;

// Declarar varias variables 
let number1 = 23, number2 = 32;
sumar = number1 + number2;
console.log(sumar)



//? ======================  Tipos de Datos  ====================== 
// String 
string = "Es un dato que es un texto, caracteres unidos";
string2 = 'Puede tambien estar escrito asi';
console.log(typeof string);

// Number 
numer0 = 15;
numer0 = 19;
console.log(typeof number);


// Boolean 
booleano = true ;
booleano = false;
console.log(typeof booleano);;

// Undefined  Es un tipo de dato que existe en el programa pero no tiene valor
let sinValor;
console.log(typeof sinValor);

// Null  Es un tipo de dato que existe en el programa pero no tiene valor
let sinValor2 = null;
console.log(typeof sinValor2);


//? ======================  Hoisting ====================== 
// Es un comportamiento que tiene javascript de mover las declaraciones de variables y funciones al inicio del programa
// Por ejemplo si declaramos una variable despues de usarla, javascript la movera al inicio del programa

//? ======================  Scope ======================
// Es el alcance que tiene una variable dentro de un programa
// Las variables declaradas con var tienen scope global
// Las variables declaradas con let tienen scope local
// Por ej 
var variableGlobal = "Soy una variable global";
let variableLocal = "Soy una variable local";

