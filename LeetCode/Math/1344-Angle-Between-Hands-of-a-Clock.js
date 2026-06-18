/**
 * Problem: 1344. Angle Between Hands of a Clock
 * Platform: LeetCode
 * Difficulty: Medium
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    const hourAngle = (hour % 12) * 30 + minutes * 0.5;
    const minuteAngle = minutes * 6;

    const diff = Math.abs(hourAngle - minuteAngle);

    return Math.min(diff, 360 - diff);
};