class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = {}
        for (const word of strs){
            let count = Array(26).fill(0)
            for(const letter of word){
                count[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }
            let key = count.join('.')
            if(!result[key]){
                result[key] = []
            }
            result[key].push(word)
        }
        return Object.values(result)
    }
}