/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        let res = []
        if(!root) return res
        let q = new Queue()
        q.push(root)

        while(!q.isEmpty()){
            let rightSide = null
            let qLen = q.size()

            for(let i =0; i<qLen; i++){
                let cur = q.pop()
                if(cur){
                    rightSide = cur
                    q.push(cur.left)
                    q.push(cur.right)
                }
            }
            if(rightSide){
                res.push(rightSide.val)
            }
        }
        return res
    }
}
