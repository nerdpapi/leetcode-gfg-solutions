/**
 * Problem: 2958. Length of Longest Subarray With at Most K Frequency
 * Platform: LeetCode
 * Difficulty: Medium
 *
 * Approach:
 * Sliding Window + Hash Map
 *
 * Expand the window by moving the right pointer.
 * If the frequency of the current element exceeds k,
 * shrink the window from the left until it becomes valid.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    const count = new Map();

    let left = 0;
    let ans = 0;

    for (let right = 0; right < nums.length; right++) {
        count.set(nums[right], (count.get(nums[right]) || 0) + 1);

        while (count.get(nums[right]) > k) {
            count.set(nums[left], count.get(nums[left]) - 1);
            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};