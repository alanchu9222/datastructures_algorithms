/*
 [           6,
       2,          8,
   0,    4,       7   9
       3   5

p=2, q=8 = answer = 6
p=2, q=4 = answer = 2

*/

function lowestCommonAncestorMethod1(root, p, q) {
  // If node.val > p & q then move left
  // If node.val < p & q then move right
  // if (node.val) is between p and q then that is the lowest common ancestor

  helper = (node, p, q) => {
    console.log("TRAVERSING --------------------------");
    console.log(" node:" + node.val + " p:" + p.val + " q:" + q.val);
    if (!node) {
      return -1;
    }
    if (node.val > p.val && node.val > q.val) {
      helper(node.left, p, q);
    }
    if (node.val < p.val && node.val < q.val) {
      helper(node.right, p, q);
    }
    // If above conditions are false, then this is the common ancestor
    return node;
  };

  return helper(root, p, q);
}
// Method 1

function lowestCommonAncestor(root, p, q) {
  const pVal = p.val;
  const qVal = q.val;

  let current = root;

  while (current) {
    if (current.val > pVal && current.val > qVal) {
      current = current.left;
    } else if (current.val < pVal && current.val < qVal) {
      current = current.right;
    } else {
      return current;
    }
  }
}

module.exports = lowestCommonAncestor;
