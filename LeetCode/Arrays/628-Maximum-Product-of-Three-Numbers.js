/**
 * Problem: 628. Maximum Product of Three Numbers
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Traverse the array once while maintaining:
 * - The three largest numbers.
 * - The two smallest numbers.
 *
 * The answer is the maximum of:
 * 1. Product of the three largest numbers.
 * 2. Product of the largest number and the two smallest numbers.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;

    let min1 = Infinity;
    let min2 = Infinity;

    for (const num of nums) {
        // Update largest three
        if (num > max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max3 = max2;
            max2 = num;
        } else if (num > max3) {
            max3 = num;
        }

        // Update smallest two
        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }

    return Math.max(
        max1 * max2 * max3,
        max1 * min1 * min2
    );
};