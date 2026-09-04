/**
 * Problem: 3903. Smallest Stable Index I
 * Approach: Brute Force
 *
 * For every index i:
 * - Find the maximum value in nums[0..i].
 * - Find the minimum value in nums[i+1..n-1].
 * - If maxVal - minVal <= k, return i.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var firstStableIndex = function(nums, k) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        let maxVal = nums[i];
        let minVal = nums[i];

        // Find maximum on the left including nums[i]
        for (let j = 0; j < i; j++) {
            maxVal = Math.max(maxVal, nums[j]);
        }

        // Find minimum on the right
        for (let j = i + 1; j < n; j++) {
            minVal = Math.min(minVal, nums[j]);
        }

        if (maxVal - minVal <= k) {
            return i;
        }
    }

    return -1;
};