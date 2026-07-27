/**
 * Problem: 1464. Maximum Product of Two Elements in an Array
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Traverse the array once while keeping track of
 * the largest and second-largest elements.
 *
 * Answer = (max1 - 1) * (max2 - 1)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max1 = 0;
    let max2 = 0;

    for (const num of nums) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }

    return (max1 - 1) * (max2 - 1);
};