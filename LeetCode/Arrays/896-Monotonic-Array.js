/**
 * Problem: 896. Monotonic Array
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Track whether the array can still be:
 * 1. Non-decreasing
 * 2. Non-increasing
 *
 * If nums[i] > nums[i - 1], it cannot be non-increasing.
 * If nums[i] < nums[i - 1], it cannot be non-decreasing.
 *
 * If either condition remains true, the array is monotonic.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            isDecreasing = false;
        }

        if (nums[i] < nums[i - 1]) {
            isIncreasing = false;
        }
    }

    return isIncreasing || isDecreasing;
};