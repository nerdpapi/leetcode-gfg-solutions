/**
 * Problem: 2095. Delete the Middle Node of a Linked List
 * Platform: LeetCode
 * Difficulty: Medium
 *
 * Approach:
 * 1. Use slow and fast pointers to find the middle node.
 * 2. Track the previous node of slow.
 * 3. Delete the middle node.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if (!head.next) return null;

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = slow.next;

    return head;
};