// Given the head of a linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

const findMid = (list) => {};

function findMiddleNode(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
