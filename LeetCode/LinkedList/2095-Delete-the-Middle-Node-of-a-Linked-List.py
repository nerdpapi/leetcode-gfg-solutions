"""
Problem: 2095. Delete the Middle Node of a Linked List
Platform: LeetCode
Difficulty: Medium

Approach:
1. Use slow and fast pointers to find the middle node.
2. Keep track of the node before the middle.
3. Remove the middle node by skipping it.

Time Complexity: O(n)
Space Complexity: O(1)
"""

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def deleteMiddle(self, head):
        if not head.next:
            return None

        slow = head
        fast = head
        prev = None

        while fast and fast.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next

        prev.next = slow.next

        return head