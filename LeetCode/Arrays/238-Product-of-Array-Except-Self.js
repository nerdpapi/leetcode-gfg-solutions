/**
 * Problem: 238. Product of Array Except Self
 * Platform: LeetCode
 * Difficulty: Medium
 *
 * Approach:
 * 1. Store prefix products in the answer array.
 * 2. Traverse from right to left while maintaining a suffix product.
 * 3. Multiply prefix and suffix products.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) (excluding the output array)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const ans = new Array(n).fill(1);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        ans[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        ans[i] *= suffix;
        suffix *= nums[i];
    }

    return ans;
};