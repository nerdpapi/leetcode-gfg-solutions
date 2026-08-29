/**
 * Problem: 1929. Concatenation of Array
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Concatenate nums with itself.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) for the output array
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return [...nums, ...nums];
};
