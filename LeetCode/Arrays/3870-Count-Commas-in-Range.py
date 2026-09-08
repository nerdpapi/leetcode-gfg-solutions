"""
Problem: 3870. Count Commas in Range
Approach: Math / Counting

Numbers from 1 to 999 contain no commas.
Every number from 1000 to n contains exactly one comma.

Therefore, the answer is max(0, n - 999).

Time Complexity: O(1)
Space Complexity: O(1)
"""


class Solution:
    def countCommas(self, n: int) -> int:
        return max(0, n - 999)