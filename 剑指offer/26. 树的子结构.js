/* 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  if(!A || !B) return false
  let res = false
  if(A.val === B.val) res = isChild(A, B)
  if(res) return res

  res = isSubStructure(A.left, B) 
  if(res) return res

  res = isSubStructure(A.right, B)

  return res

  function isChild(A, B){
    if(B == null) return true
    if(A == null || A.val != B.val) return false;
    return isChild(A.left, B.left) && isChild(A.right, B.right)

  }
  
};