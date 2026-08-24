/**
 * Problem: 326. Power of Three
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Keep dividing n by 3 while it is divisible by 3.
 * If n eventually becomes 1, it is a power of three.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 1) {
        return true;
    }

    if(n <= 0 || n  % 3 !== 0) {
        return false;
    }

    return isPowerOfThree(Math.floor(n/3));
};