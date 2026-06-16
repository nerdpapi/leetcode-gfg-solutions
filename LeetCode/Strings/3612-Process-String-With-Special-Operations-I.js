/**
 * Problem: 3612. Process String with Special Operations I
 * Platform: LeetCode
 * Difficulty: Easy
 *
 * Approach:
 * - Lowercase letter: append to result.
 * - '*': remove last character if present.
 * - '#': duplicate the current result.
 * - Otherwise ('%'): reverse the current result.
 *
 * Time Complexity: O(n²) in the worst case
 * Space Complexity: O(n)
 */

/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {
    const result = [];

    for (const ch of s) {
        if (/[a-z]/.test(ch)) {
            result.push(ch);

        } else if (ch === "*") {
            if (result.length > 0) {
                result.pop();
            }

        } else if (ch === "#") {
            result.push(...result);

        } else {
            result.reverse();
        }
    }

    return result.join("");
};