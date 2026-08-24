/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let nodes = []
        for( let lst of lists){
            while(lst){
                nodes.push(lst.val)
                lst = lst.next
            }
        }
        console.log(nodes)
        let sortedArr = nodes.sort((a,b)=>a-b)
        console.log(sortedArr)
        let result = new ListNode(0)
        let cur = result

        for(let node of nodes){
            cur.next = new ListNode(node)
            cur = cur.next
        }

        return result.next
    }
}
