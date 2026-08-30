/**
 * Problem: 15. 3Sum
 * Platform: LeetCode
 * Difficulty: Medium
 *
 * Approach:
 * 1. Sort the array.
 * 2. Fix one number using i.
 * 3. Use two pointers for the remaining two numbers.
 * 4. Skip duplicates.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) excluding the output
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    const ans = [];
    const n = nums.length;

    for (let i = 0; i < n - 2; i++) {

        // Skip duplicate first elements
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const total =
                nums[i] +
                nums[left] +
                nums[right];

            if (total === 0) {
                ans.push([
                    nums[i],
                    nums[left],
                    nums[right]
                ]);

                left++;
                right--;

                // Skip duplicate left values
                while (
                    left < right &&
                    nums[left] === nums[left - 1]
                ) {
                    left++;
                }

                // Skip duplicate right values
                while (
                    left < right &&
                    nums[right] === nums[right + 1]
                ) {
                    right--;
                }

            } else if (total < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return ans;
};