/**
 * Problem: 1. Two Sum
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Use a Map to store each number and its index.
 *
 * For every number:
 *     complement = target - num
 *
 * If the complement already exists in the Map,
 * we have found the answer.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }

        seen.set(nums[i], i);
    }

    return [];
};