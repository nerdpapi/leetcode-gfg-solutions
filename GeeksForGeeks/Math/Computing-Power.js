/**
 * Problem: Computing Power
 * Platform: GeeksForGeeks
 * Difficulty: Easy
 *
 * Approach:
 * Binary Exponentiation (Divide & Conquer)
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(log n)
 */

class Solution {
    power(x, n) {
        if (n === 0) {
            return 1;
        }

        const half = this.power(x, Math.floor(n / 2));

        if (n % 2 === 0) {
            return half * half;
        }

        return x * half * half;
    }
}