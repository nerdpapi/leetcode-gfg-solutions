/**
 * Problem: 3731. Find Missing Elements
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * 1. Find the minimum and maximum values.
 * 2. Store all numbers in a Set.
 * 3. Traverse from min to max.
 * 4. Add missing numbers to the answer.
 *
 * Time Complexity: O(n + range)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    const minVal = Math.min(...nums);
    const maxVal = Math.max(...nums);

    const seen = new Set(nums);
    const ans = [];

    let num = minVal;

    while (num <= maxVal) {
        if (!seen.has(num)) {
            ans.push(num);
        }
        num++;
    }

    return ans;
};