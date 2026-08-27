"""
Problem: All Permutations
Platform: GeeksForGeeks

Approach:
Use recursion and backtracking.

At each position:
1. Choose an unused element.
2. Add it to the current path.
3. Recursively build the remaining positions.
4. Remove the element and mark it unused.

Time Complexity: O(n × n!)
Space Complexity: O(n)

O(n × n!) because there are n! permutations and
copying each permutation takes O(n).
"""

from typing import List


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        ans = []
        path = []
        used = [False] * len(nums)

        def backtrack():
            if len(path) == len(nums):
                ans.append(path[:])
                return

            for i in range(len(nums)):
                if used[i]:
                    continue

                # Choose
                used[i] = True
                path.append(nums[i])

                # Explore
                backtrack()

                # Unchoose / Backtrack
                path.pop()
                used[i] = False

        backtrack()

        return ans