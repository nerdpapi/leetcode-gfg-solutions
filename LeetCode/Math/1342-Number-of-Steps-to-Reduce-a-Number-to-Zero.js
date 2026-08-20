/**
 * Problem: 1342. Number of Steps to Reduce a Number to Zero
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * While the number is greater than zero:
 * 1. If it is even, divide it by 2.
 * 2. Otherwise, subtract 1.
 * 3. Count the operations.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0;

    while (num > 0) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num--;
        }

        steps++;
    }

    return steps;
};