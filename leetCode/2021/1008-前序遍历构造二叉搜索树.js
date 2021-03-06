/**
 * 返回与给定前序遍历 preorder 相匹配的二叉搜索树（binary search tree）的根结点。

(回想一下，二叉搜索树是二叉树的一种，其每个节点都满足以下规则，对于 node.left 的任何后代，值总 < node.val，而 node.right 的任何后代，值总 > node.val。此外，前序遍历首先显示节点 node 的值，然后遍历 node.left，接着遍历 node.right。）

题目保证，对于给定的测试用例，总能找到满足要求的二叉搜索树。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
var bstFromPreorder = function(preorder) {
  if(!preorder || preorder.length === 0) return null

  if(preorder.length){
    let node = new TreeNode(preorder.shift())
    let left = []
    let right =  null
    for(let i=0;i<preorder.length;i++){
      if(preorder[i] <= node.val) left.push(preorder[i])
      else{
        right = preorder.slice(i, preorder.length)
        break
      }
    }
    node.left = bstFromPreorder(left)
    console.log('right',right);
    node.right = bstFromPreorder(right)
    return node
  }
  
};

console.log(bstFromPreorder([8,5,1,7,10,12]));