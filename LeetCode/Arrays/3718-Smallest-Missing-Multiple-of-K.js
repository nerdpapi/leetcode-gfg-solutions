/**
 * Problem: 3718. Smallest Missing Multiple of K
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Start from k and keep checking its multiples.
 * Return the first multiple that is not present in nums.
 *
 * Time Complexity: O(n + m)
 * Space Complexity: O(n)
 *
 * m = number of multiples checked
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    const seen = new Set(nums);

    let multiple = k;

    while (seen.has(multiple)) {
        multiple += k;
    }

    return multiple;
};