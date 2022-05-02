const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.UnderlyingList = null;
  }

  getUnderlyingList() {
    return this.UnderlyingList;
  }

  enqueue(value) {
    if (!this.UnderlyingList) {
      this.UnderlyingList = new ListNode(value);
    } else this.UnderlyingList = addValue(this.UnderlyingList, value);

    function addValue(node, value) {
      if (!node.next) {
        node.next = {
          value: value,
          next: null,
        };
      } else addValue(node.next, value)
      return node;
    }
  }

  dequeue() {
    let value = this.UnderlyingList.value;
    this.UnderlyingList = removeValue(this.UnderlyingList);

    function removeValue(node) {
      node.value = node.next.value;
      node.next = node.next.next;
      return node;
    }
    return value;
  }
}

module.exports = {
  Queue
};
