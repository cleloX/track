/**
 * 实现动态数组的难点在于我们不知道我们的动态数组究竟需要多少空间。既然如此，我们可以先暂时申请一小段空间，例如 10，我们假定我们这个数组初始有 10 的空间。
申请好了以后，我们不断地往数组里插入数。那么 10 的空间都用完以后，我们现在插入的空间不够了，会面临两种选择：
A:申请一个长度为（10+1）也就是 11 的数组，将之前的数组内容拷贝到新数组中，最后将新元素插入到新数组尾部
B:申请一个长度为（10*2，也就是 20）的数组，然后同样拷贝插入

A:如果按第一种策略，每次插入一个元素都要重新申请一个长度为 n 的数组，这样我们插入 n 个元素时间复杂度是 1+2+3+。。。+n，也就是 O(n^2)的级别。
1+2+...+n=(n+1)∗n/2
B:如果每次我们将数组容量开大一倍的话，假定我们最后的数组容量为 n，那么我们最后申请的是长度为 n 的数组，上一次申请的是长度为 n/2 的数组，再上一次是 n/4，最终时间复杂度为 O(n)。
n+n/2+n/4+...≤2n
 */

var LCArray = function() {
  this.arr = [...arguments][0] || []
};

/** 
 * @param {number} n
 * @return {void}
 */
LCArray.prototype.push_back = function(n) {
  if(this.arr.length){
    let newArr = new Array(this.arr.length * 2)
    this.arr.forEach((val, index) => {
      newArr[index] = val
    })
    newArr[this.arr.length] = n
    this.arr = newArr
    while(this.arr[this.arr.length-1] == null) this.arr.pop()
  }else{
    this.arr = [n]
  }
  return null
};

/**
 * @return {void}
 */
LCArray.prototype.pop_back = function() {
  return this.arr.pop()
};

/**
 * @return {number}
 */
LCArray.prototype.size = function() {
  return this.arr.length
};

/** 
 * @param {number} idx
 * @return {number}
 */
LCArray.prototype.index = function(idx) {
  return this.arr[idx]
};
let obj = new LCArray([2,3])
console.log(obj);
console.log(obj.push_back(1));
console.log(obj.pop_back());
console.log(obj.push_back(3));
console.log(obj.index(3));
/**
 * Your LCArray object will be instantiated and called as such:
 * var obj = new LCArray()
 * obj.push_back(n)
 * obj.pop_back()
 * var param_3 = obj.size()
 * var param_4 = obj.index(idx)
 */