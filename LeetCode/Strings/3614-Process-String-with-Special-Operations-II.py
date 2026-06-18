"""
Problem: 3614. Process String with Special Operations II
Platform: LeetCode
Difficulty: Medium

Approach:
Simulate the operations using a string builder.

Operations:
- lowercase letter: append
- '*': remove last character
- '#': duplicate current string
- '%': reverse current string

Time Complexity: O(n²) worst case
Space Complexity: O(n)
"""

class Solution:
    def processStr(self, s: str, k: int) -> str:
        length = 0
        for ch in s: 
            if ch>= "a" and ch <= "z":
                length+=1
            elif ch == "*":
                if length > 0:
                    length -=1
            elif ch == "#":
                length *= 2
        if k >= length:
            return "."
        for i in range(len(s)-1, -1, -1):
            ch = s[i]
            if ch == "*":
                length += 1
            elif ch == "%" :
                k = length-1-k
            elif ch == "#":
                length /=2
                if(k>= length):
                    k = k-length
            else:
                length-=1
                if length == k:
                    return ch
        return "."