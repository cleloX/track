/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.map = new Map()
  this.keys = []
  this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(this.keys.indexOf(key) == -1){
    return -1
  }
  this.keys.splice(this.keys.indexOf(key), 1)
  this.keys.push(key)
  return this.map.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(this.keys.indexOf(key) > -1){
    this.keys.splice(this.keys.indexOf(key), 1)
  }
  if(this.keys.length >= this.capacity){
      this.map.delete(this.keys.shift())
  }
  this.keys.push(key)
  this.map.set(key, value)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

