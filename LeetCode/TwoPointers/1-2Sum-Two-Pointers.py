"""
Problem: 1. Two Sum
Approach: Two Pointers

Approach:
1. Store each number with its original index.
2. Sort by value.
3. Use left and right pointers.
4. If sum is too small, move left.
5. If sum is too large, move right.
6. If sum equals target, return original indices.

Time Complexity: O(n log n)
Space Complexity: O(n)
"""

from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        arr = [(nums[i], i) for i in range(len(nums))]
        arr.sort()

        left = 0
        right = len(arr) - 1

        while left < right:
            total = arr[left][0] + arr[right][0]

            if total == target:
                return [arr[left][1], arr[right][1]]

            elif total < target:
                left += 1

            else:
                right -= 1

        return []