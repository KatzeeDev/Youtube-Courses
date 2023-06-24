package com.amigoscode;

public class First {
    public static void main(String[] args) {
        // Classes

        // Type => new Cat
        Cat cat = new Cat();
        cat.meow();


    }

    static class Cat {
       String name;
       void meow () {
           System.out.println("Meeoww..... 😾");
       }
    }

}
