"""
Problem: 119. Pascal's Triangle II
Approach: Generate Row Using Binomial Coefficient

Generate the required row directly instead of generating
the complete Pascal's Triangle.

Time Complexity: O(rowIndex)
Space Complexity: O(rowIndex) for the output
"""


class Solution:
    def getRow(self, rowIndex: int) -> list[int]:
        row = [1]
        result = 1
        n = rowIndex + 1

        for i in range(1, n):
            result = result * (n - i) // i
            row.append(result)

        return row