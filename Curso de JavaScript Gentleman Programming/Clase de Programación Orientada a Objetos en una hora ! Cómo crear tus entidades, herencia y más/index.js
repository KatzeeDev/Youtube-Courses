"use strict";

// Clase de youtube de Programacion Orientada a Objetos.
var profesor = {
  legajo: "123asd",
  nombre: "Matias",
  apellido: "Osorio",
  materia: "Programacion",
};

var alumnno = {
  matricula: "matricula1323",
  nombre: "Diego",
  apellido: "Bollini",
  carrera: "Ingenieria en Sistemas",
  estudiar: function () {
    console.log("Estoy estudiando");
  },
  noHacerNada: function () {
    console.log("Paspando Moscas");
  },
};

// ¿Que es una clase?

class Persona {
  nombre;
  apellido;
  edad;
  sexo;

  constructor(nombre, apellido, edad, sexo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sexo = sexo;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log("Hola soy una persona y te saludo");
  }
}

class Alumno extends Persona {
  matricula;
  carrera;

  constructor(nombre, apellido, edad, sexo, matricula, carrera) {
    super(nombre, apellido, edad, sexo);
    this.matricula = matricula;
    this.carrera = carrera;
  }

  getMatricula() {
    return this.matricula;
  }

  setMatricula(matricula) {
    if (typeof matricula === "string") {
      this.matricula = matricula;
    } else {
      console.log("Ingrese un caracter Valido para la matricula");
    }
  }

  estudiar() {
    console.log("Estoy estudiando");
  }
  noHacerNada() {
    console.log("paspando moscas");
  }

  saludar() {
    console.log("Hola soy un Alumno y te saludo");
  }
}

var alumnno = new Alumno("Barbara", "Solis", 23, "Femenino", "123", "Contador");

alumnno.setMatricula(1234);
// Observamos que no cambio luego de ingresar ese tipo de validacion
console.log(alumnno.getMatricula());

alumnno.getNombre();

console.log(alumnno.getNombre());

// Polimorfismo

class Profesor extends Persona {
  legajo;
  mater;

  constructor(nombre, apellido, edad, sexo, legajo, materia) {
    super(nombre, apellido, edad, sexo);
    this.legajo = legajo;
    this.materia = materia;
  }

  getLegajo() {
    return this.legajo;
  }

  setLegajo(legajo) {
    if (typeof legajo === "string") {
      this.legajo = legajo;
    } else {
      console.log("Ingrese un caracter Valido para la legajo");
    }
  }

  enseñar() {
    console.log("Estoy enseñando");
  }

  saludar() {
    console.log("Hola soy un Profesor y te saludo");
  }
}

var profesor = new Profesor(
  "Alfonso",
  "Osorio",
  23,
  "Femenino",
  "legajo123",
  "Programacion"
);

console.log(profesor.nombre);

// Arreglos Repaso

var arregloDePersonas = [alumnno, profesor];
for (var index = 0; index < arregloDePersonas.length; index++) {
  arregloDePersonas[index].saludar();
}



