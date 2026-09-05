/**
 * Problem: 3904. Smallest Stable Index II
 * Approach: Suffix Minimum + Prefix Maximum
 *
 * For every index i:
 *     instability = max(nums[0..i]) - min(nums[i..n-1])
 *
 * Precompute the minimum from each index to the right.
 * Then maintain the maximum from the left while traversing.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var firstStableIndex = function(nums, k) {
    const n = nums.length;

    // right[i] = minimum value from i to n - 1
    const right = new Array(n);

    right[n - 1] = nums[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        right[i] = Math.min(right[i + 1], nums[i]);
    }

    // left = maximum value from 0 to i
    let left = 0;

    for (let i = 0; i < n; i++) {
        left = Math.max(left, nums[i]);

        if (left - right[i] <= k) {
            return i;
        }
    }

    return -1;
};