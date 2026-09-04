"""
Problem: 118. Pascal's Triangle
Approach: Generate Each Row Using Binomial Coefficient

Generate each row directly using the previous element
instead of calculating every element from scratch.

Time Complexity: O(numRows^2)
Space Complexity: O(numRows^2) for the output
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

    def generate(self, numRows: int) -> list[list[int]]:
        ans = []

        for i in range(numRows):
            ans.append(self.getRow(i))

        return ans