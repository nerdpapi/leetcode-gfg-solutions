"""
Problem: 15. 3Sum
Platform: LeetCode
Difficulty: Medium

Approach:
1. Sort the array.
2. Fix one number using i.
3. Use two pointers for the remaining two numbers.
4. Skip duplicates to avoid duplicate triplets.

Time Complexity: O(n^2)
Space Complexity: O(1) excluding the output
"""

from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()

        ans = []
        n = len(nums)

        for i in range(n - 2):

            # Skip duplicate first elements
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            left = i + 1
            right = n - 1

            while left < right:
                total = nums[i] + nums[left] + nums[right]

                if total == 0:
                    ans.append([
                        nums[i],
                        nums[left],
                        nums[right]
                    ])

                    left += 1
                    right -= 1

                    # Skip duplicate left values
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1

                    # Skip duplicate right values
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1

                elif total < 0:
                    left += 1

                else:
                    right -= 1

        return ans