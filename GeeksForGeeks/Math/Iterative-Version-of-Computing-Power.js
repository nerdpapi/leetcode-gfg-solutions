/**
 * Problem: Iterative Version of Computing Power
 * Platform: GeeksForGeeks
 * Difficulty: Easy
 *
 * Approach:
 * Binary Exponentiation (Iterative)
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

class Solution {
    power(x, n) {
        let ans = 1;

        while (n > 0) {
            if (n % 2 === 1) {
                ans *= x;
            }

            x *= x;
            n = Math.floor(n / 2);
        }

        return ans;
    }
}