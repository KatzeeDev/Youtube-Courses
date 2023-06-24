package com.amigoscode;

public class Rent {
    public static void main(String[] args) {
        double result = rental(1300, 250000);
        System.out.printf("%.2f%n", result);
    }

    private static double rental(int monthlyRental, int propertyValue) {

        int annualRentalIncome = monthlyRental * 12;

        // Double porque debe retornar porcentaje en este caso 6.2399
        double rentalYield = ((double) annualRentalIncome / propertyValue) * 100;

        return rentalYield;




    }

}
