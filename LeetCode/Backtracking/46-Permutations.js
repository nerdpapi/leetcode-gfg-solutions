/**
 * Problem: 46. Permutations
 * Platform: LeetCode
 * Difficulty: Medium
 *
 * Approach:
 * Use recursion and backtracking.
 *
 * At each step:
 * 1. Choose an unused number.
 * 2. Add it to the current path.
 * 3. Recursively build the remaining positions.
 * 4. Remove the number and mark it unused.
 *
 * Time Complexity: O(n × n!)
 * Space Complexity: O(n) excluding the output
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [];
    const path = [];
    const used = new Array(nums.length).fill(false);

    function backtrack() {
        // A complete permutation is formed
        if (path.length === nums.length) {
            ans.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }

            // Choose
            used[i] = true;
            path.push(nums[i]);

            // Recurse
            backtrack();

            // Backtrack
            path.pop();
            used[i] = false;
        }
    }

    backtrack();

    return ans;
};