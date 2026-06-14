/**
 * Problem: 2130. Maximum Twin Sum of a Linked List
 * Platform: LeetCode
 * Difficulty: Medium
 *
 * Approach:
 * 1. Find the middle using slow and fast pointers.
 * 2. Reverse the second half.
 * 3. Traverse both halves together.
 * 4. Compute the maximum twin sum.
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
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head;
    let fast = head;

    while (fast) {
        slow = slow.next;
        fast = fast.next.next;
    }

    const reverse = (head) => {
        let prev = null;
        let curr = head;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    };

    let secondHalf = reverse(slow);

    let first = head;
    let second = secondHalf;
    let maxSum = 0;

    while (second) {
        maxSum = Math.max(maxSum, first.val + second.val);
        first = first.next;
        second = second.next;
    }

    return maxSum;
};