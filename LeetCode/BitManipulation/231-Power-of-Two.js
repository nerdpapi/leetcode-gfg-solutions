/**
 * Problem: 231. Power of Two
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * A power of two has exactly one set bit.
 * If n > 0 and (n & (n - 1)) == 0,
 * then n is a power of two.
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;
};