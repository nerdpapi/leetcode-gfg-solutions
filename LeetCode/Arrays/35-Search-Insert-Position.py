"""
Problem: 35. Search Insert Position
Approach: Binary Search

If target is found, return its index.
Otherwise, l will point to the first position where
target can be inserted while keeping the array sorted.

Time Complexity: O(log n)
Space Complexity: O(1)
"""


class Solution:
    def searchInsert(self, nums: list[int], target: int) -> int:
        l = 0
        h = len(nums) - 1

        while l <= h:
            mid = (l + h) // 2

            if nums[mid] == target:
                return mid

            elif nums[mid] < target:
                l = mid + 1

            else:
                h = mid - 1

        return l