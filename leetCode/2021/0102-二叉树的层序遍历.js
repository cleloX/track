/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
   let arr = [root]
   let map = []
   let result = []
   while(arr.length > 0 || map.length > 0){
     let res = []
     while(arr.length > 0){
       let node = arr.shift()
       map.push(node.left)
       map.push(node.right)
       if(node.val != null) res.push(node.val)
     }
     result.push(res)
     if(map.length) arr = map
     map = []
   }

   return result

};