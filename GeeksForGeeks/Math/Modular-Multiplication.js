/**
 * Problem: Modular Multiplication
 * Platform: GeeksForGeeks
 * Difficulty: Easy
 *
 * Approach:
 * Binary Multiplication (Russian Peasant Multiplication)
 *
 * Time Complexity: O(log b)
 * Space Complexity: O(1)
 */

class Solution {
    modmul(a, b, M) {
        let ans = 0;

        a %= M;

        while (b > 0) {
            if (b % 2 === 1) {
                ans = (ans + a) % M;
            }

            a = (a * 2) % M;
            b = Math.floor(b / 2);
        }

        return ans;
    }
}