package org.example.Financial_Forecasting;

public class FinancialForecaster {

    //optimization
    public static double optimizedForecastIterative(double amount, double rate, int years) {
        for (int i = 0; i < years; i++) {
            amount *= (1 + rate);
        }
        return amount;
    }


    // Recursive method to calculate future value
    public static double forecast(double amount, double rate, int years) {
        // Base case
        if (years == 0) {
            return amount;
        }
        // Recursive case: apply rate for one year, then recurse
        return forecast(amount * (1 + rate), rate, years - 1);
    }

    public static void main(String[] args) {
        double initialAmount = 10000;
        double annualGrowthRate = 0.09;
        int years = 5;

        double futureValue = forecast(initialAmount, annualGrowthRate, years);
        System.out.printf("Recursive Forecasted value after %d years: ₹%.2f\n", years, futureValue);
        double optimizedFutureValue = optimizedForecastIterative(initialAmount, annualGrowthRate, years);
        System.out.printf("Iterative Forecasted value after %d years: ₹%.2f\n", years, optimizedFutureValue);
    }
}
