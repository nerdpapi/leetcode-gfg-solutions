/**
 * Problem: Construct a Full Binary Tree
 * Platform: GeeksForGeeks
 * Difficulty: Medium
 *
 * Approach:
 * Given the preorder traversal of a full binary tree and the preorder
 * traversal of its mirror, reconstruct the original tree.
 *
 * 1. Store the indices of nodes in the mirror preorder.
 * 2. The first preorder element is the root.
 * 3. The next preorder element is the left child.
 * 4. Find this child in the mirror preorder to determine the sizes of
 *    the left and right subtrees.
 * 5. Recursively build both subtrees.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
class Node
{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
class Solution {
    constructBinaryTree(pre, preMirror) {
        const pos = new Map();

        for (let i = 0; i < preMirror.length; i++) {
            pos.set(preMirror[i], i);
        }

        const build = (pl, pr, ml, mr) => {
            if (pl > pr) return null;

            const root = new Node(pre[pl]);

            if (pl === pr) return root;

            const leftChild = pre[pl + 1];
            const idx = pos.get(leftChild);

            const rightSize = idx - (ml + 1);
            const leftSize = (pr - pl) - rightSize;

            root.left = build(
                pl + 1,
                pl + leftSize,
                idx,
                mr
            );

            root.right = build(
                pl + leftSize + 1,
                pr,
                ml + 1,
                idx - 1
            );

            return root;
        };

        return build(
            0,
            pre.length - 1,
            0,
            preMirror.length - 1
        );
    }
}