class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seenNumbers = []
        for( const num of nums){
            if(seenNumbers.includes(num)){
            return (seenNumbers.includes(num))
            }
          else{
            seenNumbers.push(num)
        }
    }

    return false
}
}
