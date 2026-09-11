/**
 * Problem: 3483. Unique 3-Digit Even Numbers
 * Approach: Brute Force + Set
 *
 * Try every choice of hundreds, tens, and units digits.
 * The hundreds digit cannot be 0, and the units digit must be even.
 *
 * Use a Set to avoid duplicate numbers when digits contain duplicates.
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} digits
 * @return {number}
 */

var totalNumbers = function(digits) {
    const n = digits.length;
    const numbers = new Set();

    for (let i = 0; i < n; i++) {
        if (digits[i] === 0) {
            continue;
        }

        for (let j = 0; j < n; j++) {
            if (j === i) {
                continue;
            }

            for (let k = 0; k < n; k++) {
                if (k === i || k === j) {
                    continue;
                }

                if (digits[k] % 2 !== 0) {
                    continue;
                }

                const number =
                    digits[i] * 100 +
                    digits[j] * 10 +
                    digits[k];

                numbers.add(number);
            }
        }
    }

    return numbers.size;
};