/* 路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

路径和 是路径中各节点值的总和。

给你一个二叉树的根节点 root ，返回其 最大路径和 。 */

// 思路：递归
// 由题意可知：最大值一定是从数的最左叶子节点到最右
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
var maxPathSum = function(root) {
  let result = 0
  function theMax(node, result){
    if(node == null) return 0
    let left = Math.max(0, theMax(node.left, result))
    let right = Math.max(0, theMax(node.right, result))
    let aMax = node.val + left + right
    let lMax = node.val + left
    let rMax = node.val + right
    result = Math.max(result, lMax, rMax)
    return Math.max(lMax, rMax)
  }

  theMax(root, result)
  return result
};