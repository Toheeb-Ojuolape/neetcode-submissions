class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}
        for (const num of nums){
           count[num] = (count[num] || 0) + 1
        }
        let bucket = Array(nums.length + 1).fill(null).map(() => []);
        for(const [num, freq] of Object.entries(count)){
            bucket[freq].push(parseInt(num))
        }

        return bucket.flat().slice(-k)
    }
}
