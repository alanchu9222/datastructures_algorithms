function isSameTree(p, q) {
  let isSameTree = true;

  checkSameTree = (p, q) => {
    if (p === null && q === null) {
      return;
    } else {
      if (p === null || q === null) {
        isSameTree = false;
        return;
      } else {
        if (p.val !== q.val) {
          isSameTree = false;
          return;
        }
      }
    }

    checkSameTree(p.left, q.left);
    checkSameTree(p.right, q.right);
  };

  checkSameTree(p, q);
  return isSameTree;
}

module.exports = isSameTree;
