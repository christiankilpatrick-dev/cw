// Given the head of a singly linked list, reverse the list, and return the reversed list.

function reverseLinkedList(head) {
  let prevNode = null;
  let currentNode = head;

  while (currentNode) {
    // Save the next node
    const nextNode = currentNode.next;

    // Reverse the link
    currentNode.next = prevNode;

    // Move to the next node
    prevNode = currentNode;
    currentNode = nextNode;
  }

  // When the loop ends, prevNode is the new head of the list
  return prevNode;
}
