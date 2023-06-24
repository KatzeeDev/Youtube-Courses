package com.amigoscode;

import java.util.Arrays;

public class Loops {


    public static void main(String[] args) {

        System.out.println(" ------------ Loops and Arrays  ------------ ");

        String [] names = {
                "Barbara", // index 0
                "Vicho", // index 1
                "Copito", // index 2
                "Daniel",// index 3
                "Saleh", // index 4
                "Aisha" // index 5
        };

        // Solucion mas optima
        // names.lenght  => 6
        System.out.println("Lenght Names = " + names.length);

        // i => 0    0 <  names.lenght (6) ?
        for (int i = 0; i < names.length; i++) {
            // Si. Entonces incrementa en uno e imprimelo.
            System.out.println(names[i]);
        }

          /*  Tipica Solucion para imprimir cada nombre
        System.out.println(names[0]);
        System.out.println(names[1]);
        System.out.println(names[2]);
        System.out.println(names[3]);
        System.out.println(names[4]);
        */


        System.out.println(" ------------ If Statements  ------------ ");
        if(true) {
            System.out.println("This code Runs when True");
        } else {
            System.out.println("This Code Run when False");
        }

        // This code is out of condition
        System.out.println("Code Outside If");

    }


}
