"""
Problem: Construct a Full Binary Tree
Platform: GeeksForGeeks
Difficulty: Medium

Approach:
Given the preorder traversal of a full binary tree and the preorder
traversal of its mirror, reconstruct the original tree.

1. Store the indices of nodes in the mirror preorder.
2. The first element of preorder is always the root.
3. The next preorder element is the left child.
4. Locate this left child in the mirror preorder to determine the sizes
   of the left and right subtrees.
5. Recursively construct the left and right subtrees.

Time Complexity: O(n)
Space Complexity: O(n)
"""
class Node:
    def __init__(self, val):
        self.data = val
        self.left = None
        self.right = None
        
class Solution:
    def constructBinaryTree(self, pre, preMirror):
        pos = {}

        for i, val in enumerate(preMirror):
            pos[val] = i

        def build(pl, pr, ml, mr):
            if pl > pr:
                return None

            root = Node(pre[pl])

            if pl == pr:
                return root

            left_child = pre[pl + 1]
            idx = pos[left_child]

            right_size = idx - (ml + 1)
            left_size = (pr - pl) - right_size

            root.left = build(
                pl + 1,
                pl + left_size,
                idx,
                mr
            )

            root.right = build(
                pl + left_size + 1,
                pr,
                ml + 1,
                idx - 1
            )

            return root

        return build(
            0,
            len(pre) - 1,
            0,
            len(preMirror) - 1
        )