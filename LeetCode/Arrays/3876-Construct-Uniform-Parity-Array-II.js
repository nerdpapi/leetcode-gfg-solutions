/**
 * Problem: 3876. Construct Uniform Parity Array II
 * Approach: Minimum Odd Number
 *
 * If all numbers have the same parity, the array is already uniform.
 *
 * Otherwise, find the smallest odd number.
 * Every even number must be able to subtract a smaller odd number
 * to become odd.
 *
 * If an even number is smaller than the smallest odd number,
 * it cannot become odd, so return false.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums1
 * @return {boolean}
 */

var uniformArray = function(nums1) {
    let minOdd = Infinity;

    for (const num of nums1) {
        if (num % 2 === 1) {
            minOdd = Math.min(minOdd, num);
        }
    }

    // No odd numbers -> all numbers are even
    if (minOdd === Infinity) {
        return true;
    }

    for (const num of nums1) {
        if (num % 2 === 0 && num < minOdd) {
            return false;
        }
    }

    return true;
};