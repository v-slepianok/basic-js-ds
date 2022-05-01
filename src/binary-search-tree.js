const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  root() {
    return this.root;
  }

  add(data) {
    this.root = add(this.root, data);

    function add(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (data === node.data) {
        return node;
      }
      if (data < node.data) {
        node.left = add(node.left, data)
      } else {
        node.right = add(node.right, data)
      }
      return node;
    }
  }

  has( data) {
    return search(this.root, data);

    function search(node, data) {
      if (!node) {
        return false;
      }
      if (data === node.data) {
        return true;
      }

      return data < node.data ? search(node.left, data) : search(node.right, data);
    }
  }

  find( data) {
    return find(this.root, data);

    function find(node, data) {
      if (!node) {
        return null;
      }
      if (data === node.data) {
        return node;
      }
      return data < node.data ? find(node.left, data) : find(node.right, data);
    }
  }

  remove( data ) {
    this.root = remove(this.root, data);

    function remove(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = remove(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = remove(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = remove(node.right, minRight.data);

        return node;
      }
    }
  }
  min() {
    if (!this.root) {
      return;
    }

    let node  = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node  = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};