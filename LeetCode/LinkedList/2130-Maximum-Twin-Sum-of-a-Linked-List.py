"""
Problem: 2130. Maximum Twin Sum of a Linked List
Platform: LeetCode
Difficulty: Medium

Approach:
1. Find the middle of the linked list using slow and fast pointers.
2. Reverse the second half.
3. Traverse both halves simultaneously and calculate twin sums.
4. Return the maximum twin sum.

Time Complexity: O(n)
Space Complexity: O(1)
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        slow = fast = head

        while fast:
            slow = slow.next
            fast = fast.next.next

        def reverse(head):
            prev = None
            curr = head

            while curr:
                nxt = curr.next
                curr.next = prev
                prev = curr
                curr = nxt

            return prev

        second_half = reverse(slow)

        max_sum = 0
        first = head
        second = second_half

        while second:
            max_sum = max(max_sum, first.val + second.val)
            first = first.next
            second = second.next

        return max_sum