/* 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。 */

/**
 * @param {number[]} postorder
 * @return {boolean}
 */

//  思路：后序遍历的特点：每一颗树上，根节点总在最后一个元素上  +  二叉搜索树的特点
var verifyPostorder = function(postorder) {
  function dfs(left, right){
    if(left >= right) return false
    let index = left
    while(postorder[index] < postorder[right]) index++
    let lChild = index - 1
    while(postorder[index] > postorder[right]) index++

    return index == right && dfs(left, lChild) && dfs(lChild, right-1)
  }

  return dfs(0, postorder.length-1)
};