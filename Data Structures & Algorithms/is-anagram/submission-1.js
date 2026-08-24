class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sortedS = s.split('').sort()
        let sortedT = t.split('').sort()
        return sortedS.join('') === sortedT.join('')
    }
}
