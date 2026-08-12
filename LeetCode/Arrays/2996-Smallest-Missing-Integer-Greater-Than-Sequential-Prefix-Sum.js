/**
 * Problem: 2996. Smallest Missing Integer Greater Than Sequential Prefix Sum
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * 1. Find the longest sequential prefix.
 * 2. Compute its sum.
 * 3. Store all numbers in a Set.
 * 4. Starting from the prefix sum, find the first missing integer.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let prefixSum = nums[0];

    let i = 1;
    while (i < nums.length && nums[i] === nums[i - 1] + 1) {
        prefixSum += nums[i];
        i++;
    }

    const present = new Set(nums);

    while (present.has(prefixSum)) {
        prefixSum++;
    }

    return prefixSum;
};