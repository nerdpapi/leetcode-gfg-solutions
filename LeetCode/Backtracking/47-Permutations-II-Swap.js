/**
 * Problem: 47. Permutations II
 * Platform: LeetCode
 * Difficulty: Medium
 *
 * Approach:
 * Backtracking using swapping.
 *
 * At every recursion level, use a Set to ensure
 * each distinct value is swapped into the current
 * position only once.
 *
 * Time Complexity: O(n × n!)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const ans = [];

    function backtrack(index) {
        if (index === nums.length) {
            ans.push([...nums]);
            return;
        }

        const used = new Set();

        for (let i = index; i < nums.length; i++) {
            if (used.has(nums[i])) {
                continue;
            }

            used.add(nums[i]);

            // Choose
            [nums[index], nums[i]] = [nums[i], nums[index]];

            // Recurse
            backtrack(index + 1);

            // Backtrack
            [nums[index], nums[i]] = [nums[i], nums[index]];
        }
    }

    backtrack(0);

    return ans;
};
