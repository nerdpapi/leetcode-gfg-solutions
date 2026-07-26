/**
 * Problem: 3536. Maximum Product of Two Digits
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Keep track of the largest and second-largest digits
 * while traversing the number.
 *
 * Time Complexity: O(log10(n))
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let first = 0;
    let second = 0;

    while (n > 0) {
        const digit = n % 10;

        if (digit >= first) {
            second = first;
            first = digit;
        } else if (digit > second) {
            second = digit;
        }

        n = Math.floor(n / 10);
    }

    return first * second;
};