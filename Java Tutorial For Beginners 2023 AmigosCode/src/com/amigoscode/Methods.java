package com.amigoscode;


public class Methods {
    /*
        - Access Modifier
        - Optional Static
        - Return Type
        - Name
        - Optional Parameters
        - Method Body
        - Optional Return Value
    */

    private static int add(int numberOne, int numberTwo) {
        int result = numberOne + numberTwo;
        System.out.println("The result is: " + result);
        return result;
    };

    public static void main(String[] args) {
        // Un metodo es algo que solo se ejecuta cuando lo invocamos.
        add(1,5);

    }

}
