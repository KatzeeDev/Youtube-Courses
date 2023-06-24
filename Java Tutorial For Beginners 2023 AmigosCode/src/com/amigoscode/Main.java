package com.amigoscode;

import java.awt.*;
import java.util.Arrays;

public class Main {

    public static void main (String[] args) {
        // Write your Code Here  SINGLE LINE COMMENT😾
        /* Multi line Comment  😾 */
        System.out.println("Hola Maldito Java 😾");


        // Variables Primitivas

        // Tipo de Dato => Nombre de la variable => Valor

        // Int
        int number1 = 20;
        int number2 = 20;
        int result = number1 + number2;
        // Imprimimos el resultado
        System.out.println(result);

        // Double
        double pi = 3.14;
        System.out.println(pi);

        // Boolean (True or false)
        boolean isAdult = true;

        // Char
        char a = 'A';
        System.out.println(a);

        // Byte -128  127
        byte n = -128;
        byte l = 127;

        // short Number
        short s = 32;


        // Numeric Literals with underscore.
        // Se utiliza el _ para separar los numeros como si fueran puntos para mejorar su lectura
        double amount = 1_008.00;
        System.out.println(amount);


        // Operadores Aritmeticos

        int numberOne = 10;
        int numberTwo = 3;
        System.out.println("-------------------");
        System.out.println(numberOne + numberTwo);
        System.out.println(numberOne - numberTwo);
        System.out.println(numberOne * numberTwo);
        System.out.println(numberOne / numberTwo);
        System.out.println(numberOne % numberTwo);


        System.out.println("-------- BODMAS --------" );
        System.out.println((2+2) * (3) * 2);


        // ++    --


        System.out.println(" -------- INCREMENT AND DECREMENT --------");
        int number = 0;
        int increment = number + 1;
        int decrement = number - 1;

        System.out.println(increment);
        System.out.println(decrement);

        System.out.println("Using ++ and --");
        int numberExample = 0;
        // Increment After Print
        System.out.println(numberExample++);
        System.out.println(numberExample);

        // Increment Before Print
        System.out.println(++numberExample);


        // Comparison Operators
        System.out.println(" -------- Comparison Operators -------- ");
        // < <= > >= == !=
        System.out.println( 10 < 10);
        System.out.println(10 <= 10);
        System.out.println(10 > 10);
        System.out.println(10 >= 10);
        System.out.println(10 == 10);
        System.out.println(10 != 10);

        boolean isAdult1 = 15 >= 16;
        System.out.println(isAdult1);

        // Increment Number in other cifres

        System.out.println("Increment Number in Other Cifres");
        int numberThree = 0;
        int numberFour = 2;
        numberThree += numberFour;
        // = 2
        System.out.println(numberThree);
        numberThree *= numberFour;

        // = 4
        System.out.println(numberThree);
        numberThree -= numberFour;
        // = 2
        System.out.println(numberThree);

        // Naming Variables
        System.out.println(" ----------------- Naming Variables ----------------- ");
        // Use Camelcase  like this =>  usingCamelCase
        int numberOfGoals = 0;
        System.out.println(numberOfGoals);


        System.out.println(" ----------------- Strings ----------------- ");
        String myCats = "My cats";

        String catOne = " Vicho";
        String catTwo = "Copito";

        System.out.println(myCats + " are" + catOne + " and " + catTwo);
        System.out.println(catTwo.toUpperCase());
        System.out.println(catTwo.toLowerCase());

        // Just one part of the String
        String toroMax  = "El Toron";

        System.out.println(toroMax.substring(3));
        System.out.println("".isEmpty());
        System.out.println(" ".isBlank());
        System.out.println(" a ".trim());
        System.out.println(catOne.intern());


        System.out.println(" ----------------- Reference Types / Objects ----------------- ");
        // Recordar esta clase para la creacion de juegos. Como Snake
        Point pointA = new Point(10,10);
        System.out.println("pointA = " + pointA);
        pointA.move(20, 25);
        System.out.println(pointA);


        // Reference Types and Objects Differences
        System.out.println("--------------------");
        int age = 21;
        Point pointB = new Point(50, 50);
        Point pointC = new Point(100, 100);
        String brand = "Vicho";

        System.out.println(" ----------------- Arrays ----------------- ");

        // Arrays

        int [] numbers = new int[3];

        numbers[0] = 1;
        numbers[1] = 1;
        numbers[2] = 1;
        System.out.println(Arrays.toString(numbers));

        String [] friends = new String[4];

        friends[0] = "Vicho";
        friends[1] = "Copito";
        friends[2] = "Barbara" + " Yanira";
        String apellido = " Ortega";
        friends[3] = "Daniel" + apellido;


        System.out.println(
                "My friends are " + Arrays.toString(friends)
        );

        System.out.println(
                Arrays.toString(friends).isEmpty());



        System.out.println(" ------------- Length ------------- ");
        // .length

        int [] numbersTwo = new int[3];

        numbersTwo[0] = 2;
        numbersTwo[1] = 2;
        numbersTwo[2] = 2;

        // [2, 2, 2]
        System.out.println(Arrays.toString(numbersTwo));

        //  Si yo hago esto me da la longitud de [2, 2, 2]  = 9. Porque es el tamaño de ese String
        System.out.println(Arrays.toString(numbersTwo).length());

        // En cambio si yo hago esto, me da la longitud del array => 3
        System.out.println(numbersTwo.length);


        // Si yo quiero declarar un Array con datos y no ingresarlos seria.

        int [] numbers2 = {1, 2, 3, 4};
        System.out.println(Arrays.toString(numbers2));
        System.out.println(numbers2.length);

        System.out.println(" ------------- Reasignar Array ------------- ");

        // SI por ejemplo queremos reasignar el valor del array
        numbers2[0] = 4;
        numbers2[1] = 3;
        numbers2[2] = 2;
        numbers2[3] = 1;

        System.out.println(Arrays.toString(numbers2));


        System.out.println(" ------------- Datos Primitivos Array ------------- ");

        // Datos Primitivos

        int [] numbers3 = new int [3];

        numbers3[0] = 1;
        //  => [1, 0, 0]
        System.out.println(Arrays.toString(numbers3));



        //  Datos de Referencia
        Integer [] numbers4 = new Integer [3];

        numbers4[0] = 1;
        //  => [1, null, null]
        System.out.println(Arrays.toString(numbers4));



        // Recordar que para el indice un programador comienza a contar desde 0
        int [] test = new int [3];

        // 1
        test[0] = 1;
        // 2
        test[1] = 1;
        // 3
        test[2] = 1;
        System.out.println(Arrays.toString(test));


        System.out.println(" -------------   Array primer dato distinto de 0 Arrays.Fill  ------------- ");
        int [] test2 = new int [3];
        // 1
        test2[0] = 1;
        // 2
        test2[1] = 4;
        // 3
        test2[2] = 5;

        System.out.println(Arrays.toString(test2));

        Arrays.fill(test2, 0);
        System.out.println(Arrays.toString(test2));


        // Objects => Objetos. Son todas las clases que no son Primitivos.

        String [] names = new String [2];
        names[0] = "Gwen";
        names[1] = "Miles";
        System.out.println(Arrays.toString(names));

        Arrays.fill(names, "Test");
        System.out.println(Arrays.toString(names));





    }
}
