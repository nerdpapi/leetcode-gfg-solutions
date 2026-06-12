/**
 * Problem: Count Digits in a Number
 * Platform: GeeksForGeeks
 * Difficulty: Easy
 *
 * Approach:
 * Repeatedly divide the number by 10 and count the iterations.
 *
 * Time Complexity: O(log10(n))
 * Space Complexity: O(1)
 */

class Solution {
    countDigits(n) {
        let count = 0;

        while (n > 0) {
            count++;
            n = Math.floor(n / 10);
        }

        return count;
    }
}