"""
Problem: 46. Permutations
Platform: LeetCode
Difficulty: Medium

Approach:
Use recursion and backtracking.

At each step:
1. Choose an unused number.
2. Add it to the current path.
3. Recursively build the remaining positions.
4. Remove the number and mark it unused.

Time Complexity: O(n × n!)
Space Complexity: O(n) excluding the output
"""

from typing import List


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        ans = []
        path = []
        used = [False] * len(nums)

        def backtrack():
            # A complete permutation is formed
            if len(path) == len(nums):
                ans.append(path[:])
                return

            for i in range(len(nums)):
                if used[i]:
                    continue

                # Choose
                used[i] = True
                path.append(nums[i])

                # Recurse
                backtrack()

                # Backtrack
                path.pop()
                used[i] = False

        backtrack()

        return ans