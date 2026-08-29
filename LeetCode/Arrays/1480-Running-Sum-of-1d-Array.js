/**
 * Problem: 1480. Running Sum of 1d Array
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Keep a running total and add each element to it.
 * Store the running total in the answer array.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) for the output array
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const ans = [];
    let total = 0;

    for (const num of nums) {
        total += num;
        ans.push(total);
    }

    return ans;
};
