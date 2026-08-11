/**
 * Problem: 28. Find the Index of the First Occurrence in a String
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Brute Force String Matching
 *
 * Check every possible starting index in the haystack.
 * If every character of the needle matches,
 * return the current index.
 *
 * Time Complexity: O((n - m + 1) × m)
 * Space Complexity: O(1)
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const n = haystack.length;
    const m = needle.length;

    for (let i = 0; i <= n - m; i++) {
        let j = 0;

        while (j < m && haystack[i + j] === needle[j]) {
            j++;
        }

        if (j === m) {
            return i;
        }
    }

    return -1;
};