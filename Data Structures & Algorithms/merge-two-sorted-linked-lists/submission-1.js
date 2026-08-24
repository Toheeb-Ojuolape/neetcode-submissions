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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
    //     const dummy = {val: 0, next: null}
    //     let result = dummy

    //     while(list1 && list2){
    //         if(list1.val < list2.val){
    //             result.next = list1
    //             list1 = list1.next
    //         } else{
    //             result.next = list2
    //             list2 = list2.next
    //         }

    //         result = result.next
    //     }
       

    //      if(list1){
    //     result.next = list1
    // } else {
    //     result.next = list2
    // }

    let nodes = new Array()
    let cur1 = list1
    let cur2 = list2
    while(cur1){
        nodes.push(cur1.val)
        cur1 = cur1.next
    }

    while(cur2){
        nodes.push(cur2.val)
        cur2 = cur2.next
    }

    let sortedArr = nodes.sort((a,b)=>a-b)
    let result = new ListNode(null)
    let cur = result
    for(let num of sortedArr){
        cur.next = new ListNode(num)
        cur = cur.next
    }

    return result.next

    // return dummy.next
    }

}
