function hasCycle(head) {
  let fast = head;
  let slow = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow.val === fast.val) {
      return true;
    }
  }
  return false;
}

module.exports = hasCycle;
