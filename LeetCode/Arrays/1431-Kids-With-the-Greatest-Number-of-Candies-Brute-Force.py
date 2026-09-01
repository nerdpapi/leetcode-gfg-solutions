"""
Problem: 1431. Kids With the Greatest Number of Candies
Approach: Brute Force

For every child:
1. Add extraCandies.
2. Find the maximum candies among all children.
3. Check whether the current child reaches that maximum.

Time Complexity: O(n^2)
Space Complexity: O(n) for the output
"""

from typing import List


class Solution:
    def kidsWithCandies(
        self,
        candies: List[int],
        extraCandies: int
    ) -> List[bool]:

        ans = []

        for i in range(len(candies)):
            current = candies[i] + extraCandies

            max_candies = candies[0]

            for j in range(1, len(candies)):
                max_candies = max(max_candies, candies[j])

            ans.append(current >= max_candies)

        return ans