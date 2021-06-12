// 给定一个二叉树，判断它是否是高度平衡的二叉树。

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
 * @return {boolean}
 */
var isBalanced = function(root) {


  // 递归自底向上运行的
  function dfs(node){
    if(node == null) return 0
    
    let left = dfs(node.left)
    if(left == -1) return -1     // 用-1 代表不满的情况
    let right = dfs(node.right)
    if(right == -1) return -1    // 只要有不满足情况的，结束递归
    return Math.abs(left - right) <= 1 ? Math.max(left,  right)+1 : -1
  }
  
  return dfs(root) != -1


  
};