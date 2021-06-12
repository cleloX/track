/* 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function(l1, l2) {
//   let carry = 0  // 进位
//   let head = new ListNode(0,l1)
//   let pre = head
//   while(l1 || l2){
//     if(l1 == null){
//       l1 = new ListNode(0)
//       pre.next = l1
//     }
//     if(l2 == null) l2 = new ListNode(0)
//     l1.val = (l1.val + l2.val + carry) % 10
//     carry = parseInt((l1.val + l2.val + carry) / 10)
    
//     l1 = l1.next
//     l2 = l2.next
//     pre = pre.next
//   }
//   if(carry){
//     l1 = new ListNode(carry)
//     pre.next = l1
//   }

//   return head.next
// };


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0  // 进位
  let head = new ListNode(0,l1)
  let pre = head
  while(l1 || l2){
    if(l1 == null){
      l1 = new ListNode(0)
      pre.next = l1
    }
    let num = l1.val
    if(l2 == null) l2 = new ListNode(0)

    l1.val = (num + l2.val + carry) % 10
    carry = parseInt((num + l2.val + carry) / 10)
    
    
    l1 = l1.next
    l2 = l2.next
    pre = pre.next
  }
  if(carry){
    l1 = new ListNode(carry)
    pre.next = l1
  }

  return head.next
}