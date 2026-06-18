/**
 * Problem: Angle between Hour and Minute Hand
 * Platform: GeeksForGeeks
 * Difficulty: Easy
 *
 * Approach:
 * - Hour hand moves 30° per hour and 0.5° per minute.
 * - Minute hand moves 6° per minute.
 * - Return the smaller angle.
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

class Solution {
    getAngle(s) {
        let [hour, minutes] = s.split(":").map(Number);

        let hourDegree = (hour % 12) * 30 + minutes / 2;
        let minuteDegree = minutes * 6;

        let diff = Math.abs(hourDegree - minuteDegree);

        return Math.min(diff, 360 - diff);
    }
}