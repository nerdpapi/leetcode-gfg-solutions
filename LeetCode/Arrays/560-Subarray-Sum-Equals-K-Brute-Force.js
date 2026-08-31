/**
 * Problem: 560. Subarray Sum Equals K
 * Approach: Brute Force
 *
 * Try every possible starting index.
 * For each starting index, keep adding elements
 * and check whether the current sum equals k.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let total = 0;

        for (let j = i; j < nums.length; j++) {
            total += nums[j];

            if (total === k) {
                count++;
            }
        }
    }

    return count;
};