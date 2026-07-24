"""
Problem: Longest Consecutive Path in Binary Tree
Platform: GeeksForGeeks
Difficulty: Medium

Approach:
Perform DFS on the tree.
For each node, check if it continues a consecutive sequence
from its parent. Update the maximum length found.

Time Complexity: O(n)
Space Complexity: O(h)
"""

class Solution:
    def longestConsecutive(self, root):
        self.ans = 0

        def dfs(node, parent_val, length):
            if not node:
                return

            if parent_val is not None and node.data == parent_val + 1:
                length += 1
            else:
                length = 1

            self.ans = max(self.ans, length)

            dfs(node.left, node.data, length)
            dfs(node.right, node.data, length)

        dfs(root, None, 0)
        return self.ans