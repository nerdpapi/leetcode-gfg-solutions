/**
 * Problem: 1365. How Many Numbers Are Smaller Than the Current Number
 * Approach: Frequency Array + Prefix Sum
 *
 * nums[i] is between 0 and 100, so we can use a
 * fixed-size frequency array.
 *
 * Time Complexity: O(n + 101) = O(n)
 * Space Complexity: O(101) = O(1)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const count = new Array(101).fill(0);

    // Frequency
    for (const num of nums) {
        count[num]++;
    }

    // Prefix sum
    for (let i = 1; i <= 100; i++) {
        count[i] += count[i - 1];
    }

    const ans = [];

    for (const num of nums) {
        if (num === 0) {
            ans.push(0);
        } else {
            ans.push(count[num - 1]);
        }
    }

    return ans;
};