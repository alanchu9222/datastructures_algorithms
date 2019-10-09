function levelOrder(root) {
  let result = [];

  getResult = (node, depth) => {
    if (!node) {
      return;
    }
    if (!result[depth]) {
      result[depth] = [];
    }
    result[depth].push(node.val);
    getResult(node.left, depth + 1);
    getResult(node.right, depth + 1);
  };

  getResult(root, 0);
  return result;
}
module.exports = levelOrder;
