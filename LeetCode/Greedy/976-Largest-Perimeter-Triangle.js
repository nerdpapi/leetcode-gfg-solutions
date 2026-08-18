/**
 * Problem: 976. Largest Perimeter Triangle
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * 1. Sort the array.
 * 2. Traverse from the largest side towards the smallest.
 * 3. If the triangle inequality holds,
 *    return the perimeter.
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i = nums.length - 3; i >= 0; i--) {
        if (nums[i] + nums[i + 1] > nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2];
        }
    }

    return 0;
};