"""
Problem: 2958. Length of Longest Subarray With at Most K Frequency
Platform: LeetCode
Difficulty: Medium

Approach:
Use a sliding window with a hash map.

Expand the right pointer and count the current element.
If its frequency exceeds k, shrink the window from the left
until the frequency becomes valid again.

Track the maximum window size.

Time Complexity: O(n)
Space Complexity: O(n)
"""

from typing import List

class Solution:
    def maxSubarrayLength(self, nums: List[int], k: int) -> int:
        count = {}

        left = 0
        ans = 0

        for right in range(len(nums)):
            count[nums[right]] = count.get(nums[right], 0) + 1

            while count[nums[right]] > k:
                count[nums[left]] -= 1
                left += 1

            ans = max(ans, right - left + 1)

        return ans