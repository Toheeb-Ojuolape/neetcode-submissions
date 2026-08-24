class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let L = 0
        let R = heights.length - 1
        let result = 0

        while(L < R){
            let area = (R-L) * Math.min(heights[L], heights[R])
            result = Math.max(area, result)

            if(heights[L] < heights[R]){
                L++
            } else{
                R--
            }
        }

        return result
    }
}
