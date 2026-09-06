/**
 * Problem: 1768. Merge Strings Alternately
 * Approach: Two Pointers
 *
 * Take characters alternately from word1 and word2.
 * If one string is longer, append its remaining characters.
 *
 * Time Complexity: O(n + m)
 * Space Complexity: O(n + m)
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = ""
    for(let i = 0; i< Math.max(word1.length, word2.length); i++){
        if(i< word1.length){
            merged += word1[i]
        }
        if(i< word2.length){
            merged += word2[i]
        }
    }
    return merged
};