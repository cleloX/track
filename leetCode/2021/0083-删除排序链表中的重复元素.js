
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let node = head.next
  let pre = head
  let arr  = []
  arr.push(pre.val)
  while(node){
    if(arr.indexOf(node.val) === -1){
      arr.push(node.val)
      pre.next = node
      pre = pre.next
      node = node.next
    }else{
      node = node.next
    }
  }
  return head
};