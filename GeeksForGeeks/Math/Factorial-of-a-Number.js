/**
 * Problem: Factorial of a Number
 * Platform: GeeksForGeeks
 * Difficulty: Easy
 *
 * Approach:
 * Multiply all numbers from 1 to n.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class Solution {
    factorial(n) {
        let fact = 1;

        for (let i = 2; i <= n; i++) {
            fact *= i;
        }

        return fact;
    }
}