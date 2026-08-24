class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      const n = nums.length
      const result = new Array(n).fill(1)
      const prefix = new Array(n).fill(1)
      const postfix = new Array(n).fill(1)

      for(let i=1; i< n; i++){
        prefix[i] = nums[i-1] * prefix[i-1]
      }

      for(let i=n-2; i>=0;i--){
        postfix[i] = nums[i+1] * postfix[i+1]
      }

      for(let i=0; i< n; i++){
        result[i] = prefix[i] * postfix[i]
      }

      return result

    }
}
