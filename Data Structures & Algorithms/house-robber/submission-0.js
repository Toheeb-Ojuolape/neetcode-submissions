class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {


    let prev2 = 0; // Two houses back
    let prev1 = 0; // One house back

    for (let num of nums) {
        let temp = prev1; // Store the value of the previous house
        prev1 = Math.max(prev1, prev2 + num); // Max loot till the current house
        prev2 = temp; // Move one house back
    }

    return prev1;
    }
}
