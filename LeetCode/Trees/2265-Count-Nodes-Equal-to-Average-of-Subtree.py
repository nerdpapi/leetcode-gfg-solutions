"""
Problem: 2265. Count Nodes Equal to Average of Subtree
Approach: DFS / Postorder Traversal

For every node, calculate the sum and count of its subtree.
If node.val equals the integer average of the subtree,
increment the answer.

Time Complexity: O(n)
Space Complexity: O(h), where h is the height of the tree
"""


class Solution:
    def averageOfSubtree(self, root) -> int:
        ans = 0

        def dfs(node):
            nonlocal ans

            if not node:
                return 0, 0

            leftSum, leftCount = dfs(node.left)
            rightSum, rightCount = dfs(node.right)

            totalSum = leftSum + rightSum + node.val
            totalCount = leftCount + rightCount + 1

            if node.val == totalSum // totalCount:
                ans += 1

            return totalSum, totalCount

        dfs(root)

        return ans