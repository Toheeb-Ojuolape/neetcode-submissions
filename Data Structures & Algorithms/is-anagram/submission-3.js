class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let count = Array(26).fill(0)
        let secondCount = Array(26).fill(0)
        for (const letter of s){
            count[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        for (const letter of t){
            secondCount[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        
        return count.join('') === secondCount.join('')
    }
}
