function mergeTwoLists(l1, l2) {
  // Create dummy head
  const dummyHead = { next: null };
  let tail = dummyHead;
  // Keeps running while both have not been exhausted
  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      tail = tail.next;
      l1 = l1.next;
    } else {
      tail.next = l2;
      tail = tail.next;
      l2 = l2.next;
    }
  }
  // One of the lists have been exhausted
  tail.next = l1 || l2;
  return dummyHead.next;
}

module.exports = mergeTwoLists;
