"""
Problem: 1431. Kids With the Greatest Number of Candies
Approach: Find Maximum Once

1. Find the maximum number of candies.
2. Check every child against that maximum.

Time Complexity: O(n)
Space Complexity: O(n) for the output
"""

from typing import List


class Solution:
    def kidsWithCandies(
        self,
        candies: List[int],
        extraCandies: int
    ) -> List[bool]:

        max_candies = max(candies)

        ans = []

        for candy in candies:
            ans.append(candy + extraCandies >= max_candies)

        return ans