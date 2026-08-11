/**
 * Problem: 3345. Smallest Divisible Digit Product I
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Starting from n:
 * 1. Compute the product of its digits.
 * 2. If the product is divisible by t, return the number.
 * 3. Otherwise, increment n.
 *
 * Time Complexity: O(k × d)
 * k = numbers checked
 * d = number of digits
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    while (true) {
        let product = 1;
        let num = n;

        while (num > 0) {
            product *= num % 10;
            num = Math.floor(num / 10);
        }

        if (product % t === 0) {
            return n;
        }

        n++;
    }
};