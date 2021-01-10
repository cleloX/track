function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

 let istNode = new ListNode()
 istNode.val = 22
 console.log(istNode.next,istNode)
 console.log(parseInt(10% 10))