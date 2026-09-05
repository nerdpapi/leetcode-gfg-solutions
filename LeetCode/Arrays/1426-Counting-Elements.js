/**
 * Problem: 1426. Counting Elements
 *
 * Approach: Hash Set
 *
 * Store all elements in a Set.
 * For every number x, check whether x + 1 exists.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} arr
 * @return {number}
 */

var countElements = function(arr) {
    const nums = new Set(arr);
    let count = 0;

    for (const num of arr) {
        if (nums.has(num + 1)) {
            count++;
        }
    }

    return count;
};