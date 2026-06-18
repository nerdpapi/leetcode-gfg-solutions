/**
 * Problem: 3614. Process String with Special Operations II
 * Platform: LeetCode
 * Difficulty: Medium
 *
 * Approach:
 * 1. Compute the final length without constructing the string.
 * 2. Traverse the operations in reverse.
 * 3. Map k back through each operation until the original character is found.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var processStr = function(s, k) {
    let length = 0;

    // Calculate final length
    for (const ch of s) {
        if (ch >= 'a' && ch <= 'z') {
            length++;
        } else if (ch === '*') {
            if (length > 0) {
                length--;
            }
        } else if (ch === '#') {
            length *= 2;
        }
    }

    if (k >= length) {
        return ".";
    }

    // Reverse simulation
    for (let i = s.length - 1; i >= 0; i--) {
        const ch = s[i];

        if (ch === '*') {
            length++;

        } else if (ch === '%') {
            k = length - 1 - k;

        } else if (ch === '#') {
            length = Math.floor(length / 2);

            if (k >= length) {
                k -= length;
            }

        } else {
            length--;

            if (length === k) {
                return ch;
            }
        }
    }

    return ".";
};