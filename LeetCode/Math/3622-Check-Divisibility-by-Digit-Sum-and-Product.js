/**
 * Problem: 3622. Check Divisibility by Digit Sum and Product
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * 1. Extract every digit.
 * 2. Calculate the sum of digits.
 * 3. Calculate the product of digits.
 * 4. Check whether n is divisible by both.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let num = n;
    let digitSum = 0;
    let digitProduct = 1;

    while (num > 0) {
        const digit = num % 10;

        digitSum += digit;
        digitProduct *= digit;

        num = Math.floor(num / 10);
    }

    return n % digitSum === 0 && n % digitProduct === 0;
};