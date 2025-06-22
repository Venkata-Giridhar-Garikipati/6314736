What is Big O Notation?
Big O notation describes how the runtime of an algorithm increases with input size. It helps estimate scalability and performance.

O(1): Constant time

O(log n): Logarithmic time (e.g., Binary Search)

O(n): Linear time (e.g., Linear Search)

O(n log n): Linearithmic (e.g., Merge Sort)

O(n²): Quadratic (e.g., Nested loops)

Best, Average, and Worst Case in Search
Linear Search:
  Best case:O(1)
  Average Case:O(n)
  Worst Case:O(n)

Binary Search:
  Best case:O(1)
  Average Case:O(log n)
  Worst Case:O(log n)

Linear Search: Checks every element until a match is found.

Binary Search: Works on sorted arrays, repeatedly divides the search space.

where we can use  Binary Search for large, frequently queried data that can be kept sorted, e.g., product catalog.

for Linear Search  use for small datasets or one-time searches when sorting is unnecessary.