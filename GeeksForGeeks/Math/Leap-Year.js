/**
 * Problem: Leap Year
 * Platform: GeeksForGeeks
 * Difficulty: Easy
 *
 * Approach:
 * A year is a leap year if:
 * 1. Divisible by 400, OR
 * 2. Divisible by 4 but not by 100.
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

class Solution {
    isLeap(year) {
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    }
}