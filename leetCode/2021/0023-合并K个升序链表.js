/* 给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if(lists.length === 0) return
  if(lists.length === 1) return lists[0]
  let head = new ListNode(0,lists[0])
  let node1, node2,renode
  for(let i=1;i<lists.length;i++){
    renode = head
    node1 = head.next
    node2 = lists[i]
    while(node2){
      if(node1.val <= node1.val){
        if(!node1.next){
          node1.next = node2
          break
        }
        renode = renode.next
        node1 = node1.next
      }else{
        renode.next = node2
        renode = renode.next
        renode.next = node1
        node2 = node2.next
      }
    }
  }
  return head.next
};


let a = 1
console.log(!a);