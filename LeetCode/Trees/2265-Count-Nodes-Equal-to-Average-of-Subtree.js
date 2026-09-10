/**
 * Problem: 2265. Count Nodes Equal to Average of Subtree
 * Approach: DFS / Postorder Traversal
 *
 * For every node, calculate the sum and count of its subtree.
 * If node.val equals the integer average of the subtree,
 * increment the answer.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(h), where h is the height of the tree
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

var averageOfSubtree = function(root) {
    let ans = 0;

    function dfs(node) {
        if (node === null) {
            return [0, 0];
        }

        const [leftSum, leftCount] = dfs(node.left);
        const [rightSum, rightCount] = dfs(node.right);

        const totalSum = leftSum + rightSum + node.val;
        const totalCount = leftCount + rightCount + 1;

        if (node.val === Math.floor(totalSum / totalCount)) {
            ans++;
        }

        return [totalSum, totalCount];
    }

    dfs(root);

    return ans;
};