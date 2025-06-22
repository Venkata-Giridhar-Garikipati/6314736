Step 1:
Understand Recursive Algorithms

What is Recursion?
Recursion is a technique where a function calls itself to solve a smaller subproblem. It usually involves:

Base case: Terminates recursion.

Recursive case: Breaks down the problem into smaller calls.

Why use recursion?

Simplifies problems like tree traversal, Fibonacci, and repetitive calculations like compound interest.

Step 2:
Setup – Recursive Forecasting Method
We’ll calculate future value based on:

initialAmount

growthRate (percentage)

years (number of periods)

Formula : futureValue = initialAmount * (1 + growthRate)^years


Step 4: Analysis
Time Complexity
Recursive Calls: One call per year -> O(n)

Space Complexity: Due to call stack -> O(n)

 How to Optimize It?
 Option 1: Memoization
If the function is called with repeated inputs, store results in a map to avoid recalculating.

 Option 2: Convert to Iterative
An iterative version avoids recursion and is more memory-efficient:
code:
public static double forecastIterative(double amount, double rate, int years) {
    for (int i = 0; i < years; i++) {
        amount *= (1 + rate);
    }
    return amount;
}

Time Complexity: O(n)

Space Complexity: O(1)