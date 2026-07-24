/**
 * Problem: Longest Consecutive Path in Binary Tree
 * Platform: GeeksForGeeks
 * Difficulty: Medium
 *
 * Approach:
 * Perform DFS while tracking the parent value and current
 * consecutive path length.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(h)
 */

class Solution {
    longestConsecutive(root) {
        let ans = 0;

        const dfs = (node, parentVal, length) => {
            if (!node) return;

            if (parentVal !== null && node.data === parentVal + 1) {
                length++;
            } else {
                length = 1;
            }

            ans = Math.max(ans, length);

            dfs(node.left, node.data, length);
            dfs(node.right, node.data, length);
        };

        dfs(root, null, 0);

        return ans;
    }
}