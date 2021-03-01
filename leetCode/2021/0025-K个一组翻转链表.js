/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let arr = []                    // 作为栈来记录每一次要翻转的k个节点
  let newHead = new ListNode()    // 创建一个（空的）头结点， 用于返回。注意，最后返回的应该是newHead.next，要把第一个空元素去掉
  let node = head                 // 获取当前节点，用于遍历节点
  let pre = newHead               // 记录每组翻转后最后一个节点，因为要对每一组翻转进行衔接
  while(node){
    // 将k个节点入栈
    if(arr.length < k){
      arr.push(node)
      node = node.next
    }else{
      // 当栈内元素恰好为k个时，可以翻转了
      pre.next = arr[k-1]
      while(arr.length){
        arr.pop().next = arr[arr.length - 1]
        pre = pre.next
      }
      
    }
  }

  if(arr === 0) return newHead.next
  // 临界情况，链表的长度 = k时，此时链表遍历结束，无法进行翻转操作。对这种情况进行单独翻转，和上面的翻转方法一样
  else if(arr.length === k){
    pre.next = arr[k-1]
      while(arr.length){
        arr.pop().next = arr[arr.length - 1]
        pre = pre.next
      }
      pre.next = null
  }
  else{
    while(arr.length){
      pre.next = arr.shift()
      pre = pre.next
    }
    pre.next = null
  }
  return newHead.next
};

 function ListNode(val, next) {
       this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
   }
let a = [new ListNode(1),new ListNode(2), new ListNode(3)]
let b = a[a.length-1]
a.pop().next = a[a.length-1]

let c = [1,2]
console.log(c.shift());