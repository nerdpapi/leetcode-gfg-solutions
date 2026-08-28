"""
Problem: 47. Permutations II
Platform: LeetCode
Difficulty: Medium

Approach:
Sort the array so duplicate elements become adjacent.

Use backtracking with a used array.

Skip duplicates using:
if i > 0 and nums[i] == nums[i - 1] and not used[i - 1]:
    continue

This ensures only the first unused duplicate is chosen at
each recursion level.

Time Complexity: O(n × n!)
Space Complexity: O(n) excluding the output
"""

from typing import List


class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        nums.sort()

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

                if i > 0 and nums[i] == nums[i - 1] and not used[i - 1]:
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
