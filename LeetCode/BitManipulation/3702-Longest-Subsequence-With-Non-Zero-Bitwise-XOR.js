/**
 * Problem: 3702. Longest Subsequence With Non-Zero Bitwise XOR
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Compute the XOR of all elements.
 *
 * If the total XOR is non-zero, the entire array is the answer.
 *
 * Otherwise:
 * - If there exists a non-zero element, removing one element
 *   makes the XOR non-zero.
 * - If all elements are zero, no valid subsequence exists.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    let totalXor = 0;

    for (const num of nums) {
        totalXor ^= num;
    }

    if (totalXor !== 0) {
        return nums.length;
    }

    for (const num of nums) {
        if (num !== 0) {
            return nums.length - 1;
        }
    }

    return 0;
};