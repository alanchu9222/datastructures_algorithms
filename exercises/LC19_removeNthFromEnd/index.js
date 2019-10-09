function removeNthFromEnd(head, n) {
  let slowNode = head;
  let fastNode = head;
  for (let i = 0; i < n; i++) {
    fastNode = fastNode.next;
  }
  if (!slowNode.next) {
    // edge case - if only has one element, then that element must be removed
    return null;
  }

  while (fastNode.next) {
    fastNode = fastNode.next;
    slowNode = slowNode.next;
  }

  slowNode.next = slowNode.next.next;
  return head;
}

module.exports = removeNthFromEnd;
