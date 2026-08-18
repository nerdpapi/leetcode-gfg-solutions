"""
Problem: 976. Largest Perimeter Triangle
Platform: LeetCode
Difficulty: Easy

Approach:
1. Sort the array.
2. Traverse from the largest side towards the smallest.
3. If the sum of the two smaller sides is greater than the largest side,
   a valid triangle can be formed.
4. Return its perimeter immediately since we're checking from largest
   to smallest.

Time Complexity: O(n log n)
Space Complexity: O(1)
"""

from typing import List

class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        nums.sort()

        for i in range(len(nums) - 3, -1, -1):
            if nums[i] + nums[i + 1] > nums[i + 2]:
                return nums[i] + nums[i + 1] + nums[i + 2]

        return 0