/**
 * Problem: 35. Search Insert Position
 * Approach: Binary Search
 *
 * If target is found, return its index.
 * Otherwise, l will point to the first position where
 * target can be inserted while keeping the array sorted.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    let l = 0;
    let h = nums.length - 1;

    while (l <= h) {
        const mid = Math.floor((l + h) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            h = mid - 1;
        }
    }

    return l;
};