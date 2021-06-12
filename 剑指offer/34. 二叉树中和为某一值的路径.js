/* 输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {

  let res = []
  function dfs(node, arr1, num){
    let arr = JSON.parse(JSON.stringify(arr1))
    if(node == null) return;
    num += node.val
    arr.push(node.val)
    if(num == sum){
      if(node.left == null && node.right == null){
        res.push(arr)
        return;
      }
        
      // 光找到num == sum还不行，还要到达叶子节点
      else{
        dfs(node.left, arr, num)
        dfs(node.right, arr, num)
      }
    }else{
      dfs(node.left, arr, num)
      dfs(node.right, arr, num)
    }
  }
  
  dfs(root, [], 0)

  return res
};
