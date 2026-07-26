"""
Problem: Complete Binary Tree Traversal with Array Input
Platform: GeeksForGeeks
Difficulty: Easy

Approach:
The array represents a complete binary tree in level order.
Traverse the array level by level:
- Level 0 contains 1 node.
- Level 1 contains 2 nodes.
- Level 2 contains 4 nodes.
- ...

For each level:
1. Collect its elements.
2. Sort them.
3. Append to the answer.

Time Complexity: O(n log n)
Space Complexity: O(n)
"""

class Solution:
    def levelSort(self, arr):
        ans = []
        i = 0
        level_size = 1

        while i < len(arr):
            level = []

            for _ in range(level_size):
                if i >= len(arr):
                    break

                level.append(arr[i])
                i += 1

            level.sort()
            ans.append(level)

            level_size *= 2

        return ans