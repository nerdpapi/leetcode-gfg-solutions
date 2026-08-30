/**
 * Problem: 1. Two Sum
 * Approach: Two Pointers
 *
 * Approach:
 * 1. Store each number with its original index.
 * 2. Sort by value.
 * 3. Use left and right pointers.
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const arr = nums.map((num, index) => [num, index]);

    arr.sort((a, b) => a[0] - b[0]);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const total = arr[left][0] + arr[right][0];

        if (total === target) {
            return [arr[left][1], arr[right][1]];
        }

        if (total < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
};