// Queues are linear collections of objects that can be inserted and removed in a FIFO (first in, first out) manner.

// An example of a queue in real life and not strictly computing would simply be the dreaded waiting line, i.e.the first person in line is also the first one who gets out.

// Waiting Lines

// In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.

// The enqueue method takes in the item as a parameter, while the dequeue method does not.
// The size method simply returns the number of items in the queue.

// Wait, what?
// To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
// To dequeue an item means means to remove the item at the front, or head, of the queue.
// In a queue, we remove the item the least recently added.
// JavaScript Methodology
// Queues can be implemented in JavaScript using arrays.

// You can use the built in push or unshift functions in order to add items to the queue array as well as the shift or pop to remove them.

class Queue {
  constructor() {
    this.list = [];
  }

  size() {
    return this.list.length;
  }

  enqueue(item) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

var Queue1 = function () {
  this._queue = [];
};

Queue1.prototype.enqueue = function (item) {
  this._queue.push(item);
};

Queue1.prototype.dequeue = function () {
  return this._queue.shift();
};

Queue1.prototype.size = function () {
  return this._queue.length;
};

describe("queue", function () {
  var queue;

  before(function () {
    queue = new Queue();
  });

  it("The queue has 'enqueue', 'dequeue', and 'size' method functions.", function () {
    Test.expect(queue.size, "'size' is not defined.");
    Test.expect(queue.enqueue, "'enqueue' is not defined.");
    Test.expect(queue.dequeue, "'dequeue' is not defined.");
  });

  it("The queue has an initial size of 0.", function () {
    Test.assertEquals(queue.size(), 0);
  });

  it("Calling 'enqueue' on the queue increases the size by 1.", function () {
    queue.enqueue("I'm number one!");
    Test.assertEquals(queue.size(), 1);
  });
});
