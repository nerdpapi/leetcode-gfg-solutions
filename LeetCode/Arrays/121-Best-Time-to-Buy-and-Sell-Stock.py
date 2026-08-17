"""
Problem: 121. Best Time to Buy and Sell Stock
Platform: LeetCode
Difficulty: Easy

Approach:
Traverse the prices while maintaining the minimum price seen so far.
For each day, calculate the profit by selling on that day and update
the maximum profit.

Time Complexity: O(n)
Space Complexity: O(1)
"""

from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = float("inf")
        max_profit = 0

        for price in prices:
            min_price = min(min_price, price)
            max_profit = max(max_profit, price - min_price)

        return max_profit