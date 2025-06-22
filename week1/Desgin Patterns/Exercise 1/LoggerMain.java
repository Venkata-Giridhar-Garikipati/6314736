package org.example.SingletonDesignPattern;

public class LoggerMain {
    public static void main(String[] args) {
//        System.out.println("Hello, World!");
        Logger logger1 = Logger.getInstance();
        logger1.log("First log message");

        Logger logger2 = Logger.getInstance();
        logger2.log("Second log message");

        // Check if both logger1 and logger2 refer to the same instance
        if (logger1 == logger2) {
            System.out.println("Both logger1 and logger2 are the same instance.");
        } else {
            System.out.println("Different logger instances exist.");
        }
    }
}
