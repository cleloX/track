/* 给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。 */
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
 * @return {number}
 */
var maxDepth = function(root) {
  // let maxs = []
  let max = -Infinity
  function dfs(node, num){
    if(!node){
      // maxs.push(num)
      if(num > max) max = num
      return
    }
    dfs(node.left, num+1)
    dfs(node.right, num+1)

  }
  dfs(root,0)

  // return Math.max(...maxs)
  return max
};