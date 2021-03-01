/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let len = 0
  let node = head
  while(node){
    len++
    node = node.next
  }
  let index = 0
  node = head
  while(index < len - n){
    node =node.next
  }
  if(n === 1) node.next = null
  else{
    node.next = node.next.next
  }
  return head
};