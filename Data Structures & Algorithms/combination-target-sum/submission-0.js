class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    backtrack(nums, target, ans, cur, index){
        if(target === 0){
            ans.push([...cur])
        } else if(index>=nums.length || target < 0){
            return
        } else{
            cur.push(nums[index])
            this.backtrack(nums, target - nums[index], ans, cur, index)
            cur.pop()
            this.backtrack(nums, target, ans, cur, index+1)
        }
    }
    combinationSum(nums, target) {
        let ans = []
        let cur = []
        this.backtrack(nums, target, ans, cur, 0)
        return ans
    }
}
