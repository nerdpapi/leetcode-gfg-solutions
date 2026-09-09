"""
Problem: 867. Transpose Matrix
Approach: Create Transposed Matrix

The element at matrix[i][j] moves to answer[j][i].

If the original matrix is m x n,
the transposed matrix will be n x m.

Time Complexity: O(m * n)
Space Complexity: O(m * n)
"""


class Solution:
    def transpose(self, matrix: list[list[int]]) -> list[list[int]]:
        m = len(matrix)
        n = len(matrix[0])

        ans = [[0] * m for _ in range(n)]

        for i in range(m):
            for j in range(n):
                ans[j][i] = matrix[i][j]

        return ans