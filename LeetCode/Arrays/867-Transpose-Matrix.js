/**
 * Problem: 867. Transpose Matrix
 * Approach: Create Transposed Matrix
 *
 * The element at matrix[i][j] moves to answer[j][i].
 *
 * If the original matrix is m x n,
 * the transposed matrix will be n x m.
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

var transpose = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const ans = Array.from(
        { length: n },
        () => Array(m)
    );

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ans[j][i] = matrix[i][j];
        }
    }

    return ans;
};