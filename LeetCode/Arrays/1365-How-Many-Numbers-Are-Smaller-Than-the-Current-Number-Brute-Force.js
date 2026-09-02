/**
 * Problem: 1365. How Many Numbers Are Smaller Than the Current Number
 * Approach: Brute Force
 *
 * For every element, scan the complete array and count
 * how many numbers are smaller than it.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n) for the output
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                count++;
            }
        }

        ans.push(count);
    }

    return ans;
};