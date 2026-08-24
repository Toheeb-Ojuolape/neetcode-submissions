class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
     const n = nums.length
     const result = Array.from({length: n}).fill(1)
     const prefix = Array.from({length: n}).fill(1)
     const suffix = Array.from({length: n}).fill(1)

     for(let i=1; i<n; i++){
        prefix[i] = prefix[i-1] * nums[i-1]
     }

     for (let i=n-2; i>=0; i--){
        suffix[i] = suffix[i+1] * nums[i+1]
     }

     for(let i=0;i<n;i++){
        result[i] = prefix[i] * suffix[i]
     }

     return result

    }
}
