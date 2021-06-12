/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // let a = new ListNode(headA.val, headA.next), b = new ListNode(headB.val, headB.next)

  // while(a != b){
  //   if(a.next == null) a.next = headB
  //   if(b.next == null) b.next = headA
  //   a = a.next
  //   b = b.next
  // }
  let map = new Map()
  while(headB){
    map.set(headB, headB.val)
    headB = headB.next
  }

  while(headA){
    if(map.has(headA)) return headA
    headA = headA.next
  }



};