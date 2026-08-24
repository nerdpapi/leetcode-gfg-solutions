/**
 * Problem: 231. Power of Two
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Keep dividing n by 2 while it is divisible by 2.
 * If n eventually becomes 1, it is a power of two.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n ===1) {
        return true;
    }

    if (n<= 1 || n % 2 !== 0) {
        return false;
    }

    return isPowerOfTwo(Math.floor(n/2));
};