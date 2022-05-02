const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.origin = null;
  }

  root() {
    return this.origin ? this.origin : null;
  }

  add(data) {
    this.origin = addNode(this.origin, data);

    function addNode(node, data) {
      if (!node) return new Node(data);
      if (node.data == data) return node;
      if (data < node.data) node.left = addNode(node.left, data)
      else node.right = addNode(node.right, data);
      return node;
    }
  }

  has(data) {
    return finder(this.origin, data);

    function finder(node, data) {
      if (!node) return false;
      if (node.data == data) return true;
      if (data < node.data) {
        return finder(node.left, data);
      } else {
        return finder(node.right, data);
      }
    }
  }

  find(data) {
    return finder(this.origin, data);

    function finder(node, data) {
      if (!node) return null;
      if (node.data == data) return node;
      if (data < node.data) {
        return finder(node.left, data);
      } else {
        return finder(node.right, data);
      }
    }
  }

  remove(data) {
    this.origin = removeNode(this.origin, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) node.left = removeNode(node.left, data)
      else if (data > node.data) node.right = removeNode(node.right, data);

      if (node.data == data) {
        if (!node.left && !node.right) return null
        else if (!node.left || !node.right) return node.left || node.right
        else if (node.left && node.right) {
          let maxValueLeftNodes = 0;
          let findNode = node.left;

          while (findNode.right) {
            findNode = findNode.right;
            maxValueLeftNodes = findNode.data;
          }
          node = removeNode(node, maxValueLeftNodes);
          node.data = maxValueLeftNodes;
        }
      }
      return node;
    }
  }

  min() {
    return finderMin(this.origin);

    function finderMin(node) {
      let minValue = node.data;;
      while (node.left) {
        node = node.left;
        minValue = node.data;
      }
      return minValue;
    }
  }

  max() {
    return finderMax(this.origin);

    function finderMax(node) {
      let maxValue = node.data;
      while (node.right) {
        node = node.right;
        maxValue = node.data;
      }
      return maxValue;
    }
  }
}

module.exports = {
  BinarySearchTree
};