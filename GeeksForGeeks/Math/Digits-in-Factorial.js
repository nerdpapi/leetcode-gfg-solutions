/**
 * Problem: Digits in Factorial
 * Platform: GeeksForGeeks
 * Difficulty: Easy
 *
 * Approach:
 * Sum log10(i) from 2 to n.
 * Number of digits = floor(sum) + 1.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class Solution {
    digitsInFactorial(n) {
        if (n <= 1) {
            return 1;
        }

        let digits = 0;

        for (let i = 2; i <= n; i++) {
            digits += Math.log10(i);
        }

        return Math.floor(digits) + 1;
    }
}