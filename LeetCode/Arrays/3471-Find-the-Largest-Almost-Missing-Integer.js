/**
 * Problem: 3471. Find the Largest Almost Missing Integer
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Three cases:
 *
 * 1. k == n:
 *    Return the maximum element.
 *
 * 2. k == 1:
 *    Return the largest unique element.
 *
 * 3. Otherwise:
 *    Only the first and last elements can be almost missing.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    const n = nums.length;

    if (k === n) {
        return Math.max(...nums);
    }

    const count = new Map();

    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    if (k === 1) {
        let ans = -1;

        for (const num of nums) {
            if (count.get(num) === 1) {
                ans = Math.max(ans, num);
            }
        }

        return ans;
    }

    let ans = -1;

    if (count.get(nums[0]) === 1) {
        ans = nums[0];
    }

    if (count.get(nums[n - 1]) === 1) {
        ans = Math.max(ans, nums[n - 1]);
    }

    return ans;
};