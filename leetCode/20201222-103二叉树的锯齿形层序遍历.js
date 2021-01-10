let BiTree = function (ele) {
  this.val = ele;
  this.lChild = null;
  this.rChild = null;
}

createTree = function () {
  let biTree = new BiTree('A');
  biTree.lChild = new BiTree('B');
  biTree.rChild = new BiTree('C');
  biTree.lChild.lChild = new BiTree('D');
  biTree.lChild.lChild.lChild = new BiTree('G');
  biTree.lChild.lChild.rChild = new BiTree('H');
  biTree.rChild.lChild = new BiTree('E');
  biTree.rChild.rChild = new BiTree('F');
  biTree.rChild.lChild.rChild = new BiTree('I');
  return biTree;
}
console.log(createTree())

var zigzagLevelOrder = function(root) {
  if (!root) {
      return [];
  }

  const ans = [];
  const nodeQueue = [root];

  let isOrderLeft = true;

  while (nodeQueue.length) {
      let levelList = [];
      const size = nodeQueue.length;
      for (let i = 0; i < size; ++i) {
          const node = nodeQueue.shift();
          if (isOrderLeft) {
              levelList.push(node.val);
          } else {
              levelList.unshift(node.val);
          }
          if (node.left !== null) {
              nodeQueue.push(node.lChild);
          }
          if (node.right !== null) {
              nodeQueue.push(node.rChild);
          }
      }            
      ans.push(levelList);
      isOrderLeft = !isOrderLeft;
  }

  return ans;
};

console.log(zigzagLevelOrder([3,9,20,null,null,15,7]))