## Desafio

1. Escribir con sus palabras
cuál es el proceso que involucra a definir una variable y dar un ejemplo comparándolo con la vida real en mi caso
por ejemplo yo en la clase había dado el caso de una zapatería

Respuesta: El proceso que involucra definir una variable  Por ej consiste en cajas.
|Ejemplo Estamos en un supermercado. 

Dentro de ese supermercado existen diversos productos que contienen x unidades de productos.

const cantidadLeche = 10;
const cantidadAgua = 10;
const cantidadCereal = 20;
En este caso a las variables se les asigna un numero.


2. Una función que acepte que acepte diga si un animal tiene más de dos patas y si
tiene o no cola si entra como un objeto el animal como parámetro

Listo en desafio.js

3. escribe una función que es cree un mensaje pantallas saludando una persona por su nombre

4. Escribe una funcion que recorra un arreglo de personas, y por cada uno de esos elementos escriba un saludo

5. Escribe una funcion que busque dentro de un arreglo de persona aquella cuyo nombre empiece con a y sea mayor de 18 anos



## Programacion Orientada a Objeto
Paradigma de la programacion que dice que todo se puede representar a traves de objetos


# Clase 

Es un esquema que vamos a utilizar para crear un objeto.
Una clase por si sola no existe.
Las clases van en Mayuscula
Es la base para crear un objeto.

# Constructor
Un constructor acepta por parametros lo que el usuario le indique

	constructor(matricula, nombre, apellido, carrera) {
		this.matricula = matricula;
		this.nombre = nombre;
		this.apellido = apellido;
		this.carrera = carrera;
	}

# This
Con esa accedemos a las propiedades de la clase.

El this se basa sobre lo que es un scope
El scope es la caja donde tenemos nuestras cosas. 

Ej la clase Alumno es una caja. Dentro de esa caja encontraremos matricula, nombre, apellido etc

El scope nos ayuda a no crear una ambiguedad. Es cuando escribimos algo y esperamos que tenga cierto valor. 

Con el this decimos lo que esta dentro de esta cajita basicamente


# Encapsulamiento

Yo no quiero que se puedan acceder las propiedades de una clase desde algo que no sea propio de una clase. 

Quien es ese algo? Los metodos.


# Herencia
Un alumno y un profesor comparten cosas en comun?

si
 
 Los 2 tienen nombre, los 2 apellidos.

 Por que ? Porque los 2 son personas.

Herencia es tener un padre y vos heredas todo del padre basicamente. Por eso si obtenemos
		console.log(alumnno.getNombre());
 
 Obtenemos el nombre pese a que alumno no lo tiene, pero persona si.

Una clase entonces es como una maquina para hacer las cosas mas rapido. 

# Polimorfismo
Habla de que un metodo, una logica va a cambiar su comportamiento dependiendo del contexto donde este se encuentre.


Un objeto => Persona o alumno o profesor.

Va a cambiar su comportamiento dependiendo del contexto en el cual se adecue. 

El contexto es el parametro de esto

En este caso alumno, profesor.

		var arregloDePersonas = [alumnno, profesor];
		for (var index = 0; index < arregloDePersonas.length; index++) {
		arregloDePersonas[index].saludar();
		}

Piensen las cosas lo mas generico posible. Mientras mas generica sea la solucion , la solucion servira para muchas mas cosas. 



# Abstraccion
Pensar de manera generica.

Partiendo por lo primero. 

Herencia. Nos abstraemos de todo lo que tiene una persona y le agrego x cosas.

Encapsulamiento. Me estoy abstrayendo de lo que hace la funcion. Validacion, Getters And Setters.