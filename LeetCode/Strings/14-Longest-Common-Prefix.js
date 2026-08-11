/**
 * Problem: 14. Longest Common Prefix
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * Vertical Scanning
 *
 * Compare characters column by column.
 * If any string ends or a mismatch occurs,
 * return the prefix found so far.
 *
 * Time Complexity: O(n × m)
 * n = number of strings
 * m = length of the shortest string
 *
 * Space Complexity: O(1)
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    for (let i = 0; i < strs[0].length; i++) {
        const ch = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== ch) {
                return strs[0].substring(0, i);
            }
        }
    }

    return strs[0];
};