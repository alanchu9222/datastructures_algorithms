/*
BST is made of nodes
Each node = {val, left, right}
Value = number: Left, Right = node
When Left or RIght === null, thats the termination of that branch in the tree

*/

function isValidBST(root) {
  let valid = true;

  checkValid = (node, min, max) => {
    if (!node) {
      return;
    }
    console.log("node " + node.val + " min " + min + " max " + max);

    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      valid = false;
      return;
    }
    // The current value  = max for the left node
    // The current value  = min for the right node
    // Recursively check that this rule is followed
    checkValid(node.left, min, node.val);
    checkValid(node.right, node.val, max);
  };
  checkValid(root, null, null);
  return valid;
}
module.exports = isValidBST;
