package org.example.SingletonDesignPattern;

public class Logger {
    // Private static instance of the same class
    private static Logger instance;

    // Private constructor to restrict instantiation
    private Logger() {
        System.out.println("Logger Initialized Successfully");
    }

    // Public method to provide access to the instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();  // Lazy initialization
        }
        return instance;
    }

    // Logging method
    public void log(String message) {
        System.out.println("[LOG]: " + message);
    }
}

