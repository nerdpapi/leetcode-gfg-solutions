/**
 * Problem: 1281. Subtract the Product and Sum of Digits of an Integer
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Traverse each digit of the number.
 * Maintain the product and sum of digits.
 * Return product - sum.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;

    while (n > 0) {
        const digit = n % 10;
        product *= digit;
        sum += digit;
        n = Math.floor(n / 10);
    }

    return product - sum;
};