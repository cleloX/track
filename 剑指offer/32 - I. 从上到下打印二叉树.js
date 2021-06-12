// 按广度优先遍历二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
  let arr = []
  let res = []
  arr.push(root)
  while(arr.length){
    res.push(arr[0].val)
    if(!arr[0].left)  arr.push(arr[0].left)
    if(!arr[0].right)  arr.push(arr[0].right)
  }


  return res
};




// 前序遍历
// let res = []
  // function dfs(root){
  //   if(root == null) return
  //   res.push(root.val)
  //   dfs(root.left)
  //   dfs(root.right)
  // }

  // return res