package org.example.Search;

import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(203, "Shoes", "Fashion"),
                new Product(150, "Phone", "Electronics"),
                new Product(99, "T-shirt", "Fashion")
        };

        // Linear Search (unsorted)
        Product found1 = SearchUtility.linearSearch(products, 150);
        System.out.println(found1 != null ? "Using Linear Search Found: " + found1.getProductName() : "Product not found");

        // Sort for Binary Search
        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));

        // Binary Search
        Product found2 = SearchUtility.binarySearch(products, 150);
        System.out.println(found2 != null ? "Using Binary Search Found: " + found2.getProductName() : "Product not found");
    }
}

