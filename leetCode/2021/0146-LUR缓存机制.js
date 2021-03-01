/**
 * 思路：map里面套一个链表节点
 * get：通过map时间复杂度O(1)得到节点，然后将该节点移到链表的末尾
 * 
 * put操作比较复杂：一、如果要put的key存在，则覆盖原来的value，然后将这个节点移到链表末尾，二、如果key不存在，则在capacity > 0时往链表后面插入
 * 
 * 
*/
function Node(key, value){
  this.key = key
  this.value = value
  this.pre = null
  this.next = null
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.head =  new Node()
  this.preNode = this.head // 链表的最后一个节点（辅助添加节点）
  this.capacity = capacity
  this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  // return this.map.get(key)['value']
  if(this.map.has(key)){
    let val = this.map.get(key)
    if(val.key !== this.preNode.key){
      val.pre.next = val.next
      val.next.pre = val.pre
      val.pre = this.preNode
      this.preNode.next = val
      this.preNode = this.preNode.next
      this.preNode.next = null
    }

    return val.value
  }else{
    return -1
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let node = new Node(key, value)
  
  if(this.map.has(key)){
    let val = this.map.get(key)
    val.value = value
    if(val.key !== this.preNode.key){
      val.pre.next = val.next
      val.next.pre = val.pre
      val.pre = this.preNode
      this.preNode.next = val
      this.preNode = this.preNode.next
      this.preNode.next = null
    }
  }else{
    node.pre = this.preNode
    this.map.set(key,node)
    this.preNode.next = node
    this.preNode = this.preNode.next 
    if(this.capacity > 0) this.capacity--
    else{
      this.head.next.next.pre = this.head
      this.map.delete(this.head.next.key)
      this.head.next = this.head.next.next
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var obj = new LRUCache(2)

 obj.put(1,1)
 obj.put(2,1)
 obj.put(2,2)
 console.log(obj);
