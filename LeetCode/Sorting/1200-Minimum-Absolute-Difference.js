/**
 * Problem: 1200. Minimum Absolute Difference
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * 1. Sort the array.
 * 2. Find the minimum adjacent difference.
 * 3. Collect all adjacent pairs with that difference.
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) (excluding output)
 */

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);

    let minDiff = Infinity;

    for (let i = 1; i < arr.length; i++) {
        minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
    }

    const ans = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] === minDiff) {
            ans.push([arr[i - 1], arr[i]]);
        }
    }

    return ans;
};