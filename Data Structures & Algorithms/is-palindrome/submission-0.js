class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newString = s.replaceAll(/[^a-zA-Z0-9]/g,'').toLowerCase()
        let reverseString = newString.split('').reverse().join('')
        console.log(reverseString)
        return newString === reverseString
        
    }
}
