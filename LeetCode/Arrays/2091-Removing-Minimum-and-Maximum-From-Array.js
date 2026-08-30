/**
 * Problem: 2091. Removing Minimum and Maximum From Array
 * Platform: LeetCode
 * Difficulty: Medium
 *
 * Approach:
 * 1. Find the indices of the minimum and maximum elements.
 * 2. Let left = smaller index and right = larger index.
 * 3. Consider three possibilities:
 *    - Both from the front.
 *    - Both from the back.
 *    - One from each side.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    const n = nums.length;

    let minIdx = 0;
    let maxIdx = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] < nums[minIdx]) {
            minIdx = i;
        }

        if (nums[i] > nums[maxIdx]) {
            maxIdx = i;
        }
    }

    const left = Math.min(minIdx, maxIdx);
    const right = Math.max(minIdx, maxIdx);

    // Both from the front
    const fromFront = right + 1;

    // Both from the back
    const fromBack = n - left;

    // One from front and one from back
    const fromBoth = left + 1 + n - right;

    return Math.min(fromFront, fromBack, fromBoth);
};