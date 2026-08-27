/**
 * Problem: All Permutations
 * Platform: GeeksForGeeks
 *
 * Approach:
 * Use recursion and backtracking.
 *
 * At each position:
 * 1. Choose an unused element.
 * 2. Add it to the current path.
 * 3. Recursively build the remaining positions.
 * 4. Remove the element and mark it unused.
 *
 * Time Complexity: O(n × n!)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
class Solution {
    permute(nums) {
        const ans = [];
        const path = [];
        const used = new Array(nums.length).fill(false);

        const backtrack = () => {
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

                // Explore
                backtrack();

                // Unchoose / Backtrack
                path.pop();
                used[i] = false;
            }
        };

        backtrack();

        return ans;
    }
}