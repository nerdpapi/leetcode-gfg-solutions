/**
 * Problem: Trailing Zeroes in Factorial
 * Platform: GeeksForGeeks
 * Difficulty: Easy
 *
 * Approach:
 * Count the number of factors of 5 in n!.
 *
 * Count:
 * n/5 + n/25 + n/125 + ...
 *
 * Time Complexity: O(log₅(n))
 * Space Complexity: O(1)
 */

class Solution {
    trailingZeroes(n) {
        let count = 0;

        while (n > 0) {
            n = Math.floor(n / 5);
            count += n;
        }

        return count;
    }
}