package com.amigoscode;

    /*
        - Access Modifier
        - Optional Static
        - Return Type
        - Name
        - Optional Parameters
        - Method Body
        - Optional Return Value
    */


public class Foo {
    public static void main(String[] args) {
        // Main
        int result = add(2,4);
        int result2 = add(2,3);

        int result3 = Foo.add(10, 100);

        // result = 2 + 4
        System.out.println("The result is: " + result);
        // result = 2 + 3
        System.out.println("The result2 is: " + result2);
        System.out.println("The resuilt3 is: " +result3);


    }


    private static int add (int numberOne, int  numberTwo) {
        int result = numberOne + numberTwo;
        return result;
    }
}
