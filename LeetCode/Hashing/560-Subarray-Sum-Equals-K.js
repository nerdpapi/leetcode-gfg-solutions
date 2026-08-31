/**
 * Problem: 560. Subarray Sum Equals K
 * Platform: LeetCode
 * Difficulty: Medium
 *
 * Approach:
 * Prefix Sum + Hashing
 *
 * If:
 *     currentSum - previousSum = k
 *
 * then:
 *     previousSum = currentSum - k
 *
 * Store the frequency of every prefix sum in a Map.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const count = new Map();
    count.set(0, 1);

    let prefixSum = 0;
    let ans = 0;

    for (const num of nums) {
        prefixSum += num;

        const required = prefixSum - k;

        if (count.has(required)) {
            ans += count.get(required);
        }

        count.set(
            prefixSum,
            (count.get(prefixSum) || 0) + 1
        );
    }

    return ans;
};