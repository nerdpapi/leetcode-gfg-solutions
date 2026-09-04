/**
 * Problem: 69. Sqrt(x)
 * Approach: Binary Search
 *
 * Find the largest integer whose square is <= x.
 *
 * Time Complexity: O(log x)
 * Space Complexity: O(1)
 */

/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function(x) {
    let l = 1;
    let r = x;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const midSquared = mid * mid;

        if (midSquared === x) {
            return mid;
        } else if (midSquared < x) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return r;
};