"""
Problem: 560. Subarray Sum Equals K
Platform: LeetCode
Difficulty: Medium

Approach:
Use prefix sum + hash map.

If:
    current_sum - previous_sum = k

then:
    previous_sum = current_sum - k

The hash map stores how many times each prefix sum
has occurred.

Time Complexity: O(n)
Space Complexity: O(n)
"""

from typing import List


class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = {0: 1}

        prefix_sum = 0
        ans = 0

        for num in nums:
            prefix_sum += num

            if prefix_sum - k in count:
                ans += count[prefix_sum - k]

            count[prefix_sum] = count.get(prefix_sum, 0) + 1

        return ans