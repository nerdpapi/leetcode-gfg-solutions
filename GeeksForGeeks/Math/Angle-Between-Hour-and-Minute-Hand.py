"""
Problem: Angle between Hour and Minute Hand
Platform: GeeksForGeeks
Difficulty: Easy

Approach:
- Hour hand moves 30° per hour and 0.5° per minute.
- Minute hand moves 6° per minute.
- Find the absolute difference and return the smaller angle.

Time Complexity: O(1)
Space Complexity: O(1)
"""

class Solution:
    def getAngle(self, s):
        hour, minutes = map(int, s.split(":"))

        hour_degree = (hour % 12) * 30 + minutes * 0.5
        minute_degree = minutes * 6

        diff = abs(hour_degree - minute_degree)

        return min(diff, 360 - diff)