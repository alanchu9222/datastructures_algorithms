function maxDepth(root) {
  let maxDepth = 0;

  helper = (node, depth) => {
    if (!node) {
      return;
    }
    maxDepth = Math.max(depth + 1, maxDepth);
    helper(node.left, depth + 1);
    helper(node.right, depth + 1);
  };

  helper(root, 0);
  return maxDepth;
}

module.exports = maxDepth;
