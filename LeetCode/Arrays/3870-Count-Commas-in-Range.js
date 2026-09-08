/**
 * Problem: 3870. Count Commas in Range
 * Approach: Math / Counting
 *
 * Numbers from 1 to 999 contain no commas.
 * Every number from 1000 to n contains exactly one comma.
 *
 * Therefore, the answer is max(0, n - 999).
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @return {number}
 */

var countCommas = function(n) {
    return Math.max(0, n - 999);
};