"""
Problem: 215. Kth Largest Element in an Array
Approach: Min Heap

Maintain a min heap of size k.
The smallest element in the heap is the kth largest element.

Time Complexity: O(n log k)
Space Complexity: O(k)
"""

import heapq


class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        heap = []

        for num in nums:
            heapq.heappush(heap, num)

            if len(heap) > k:
                heapq.heappop(heap)

        return heap[0]