/**
 * Problem: Count Digits That Divide a Number
 * Platform: GeeksForGeeks
 * Difficulty: Easy
 *
 * Approach:
 * Traverse each digit of the number.
 * Count digits that are non-zero and divide n.
 *
 * Time Complexity: O(log10(n))
 * Space Complexity: O(1)
 */

class Solution {
    evenlyDivides(n) {
        let temp = n;
        let count = 0;

        while (temp > 0) {
            const digit = temp % 10;

            if (digit !== 0 && n % digit === 0) {
                count++;
            }

            temp = Math.floor(temp / 10);
        }

        return count;
    }
}