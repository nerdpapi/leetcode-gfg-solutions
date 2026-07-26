/**
 * Problem: Complete Binary Tree Traversal with Array Input
 * Platform: GeeksForGeeks
 * Difficulty: Easy
 *
 * Approach:
 * Since the array stores a complete binary tree in level order,
 * process the array level by level.
 *
 * For each level:
 * 1. Collect all nodes.
 * 2. Sort them.
 * 3. Store the sorted level.
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

class Solution {
    levelSort(arr) {
        const ans = [];
        let i = 0;
        let levelSize = 1;

        while (i < arr.length) {
            const level = [];

            for (let j = 0; j < levelSize && i < arr.length; j++) {
                level.push(arr[i++]);
            }

            level.sort((a, b) => a - b);
            ans.push(level);

            levelSize *= 2;
        }

        return ans;
    }
}