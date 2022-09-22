class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }


    let toVisitStack = [this.root];
    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (val === current.val) return;
      if (val < current.val) {
        current.left && toVisitStack.push(current.left);
        if (!current.left) {
          current.left = new Node(val);
          return;
        }
      }
      if (val > current.val) {
        current.right && toVisitStack.push(current.right);
        if (!current.right) {
          current.right = new Node(val);
          return;
        }
      }
    }
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }

    if (node.val === val) return;

    if (val < node.val) {
      if (!node.left) {
        node.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, node.left);
    } else {
      if (!node.right) {
        node.right = new Node(val);
        return;
      }
      return this.insertRecursively(val, node.right);
    }
  }

  /** find(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return;

    let toVisitStack = [this.root];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current.val === val) return current;
      current.left && toVisitStack.push(current.left);
      current.right && toVisitStack.push(current.right);
    }
    return;
  }

  /** findRecursively(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (!node) return;

    if (node.val === val) return node;
    if (node.val > val) return this.findRecursively(val, node.left);
    if (node.val < val) return this.findRecursively(val, node.right);

    return;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, final = []) {
    if (node) {
      final.push(node.val);
      node.left && this.dfsPreOrder(node.left, final);
      node.right && this.dfsPreOrder(node.right, final);
    }
    return final;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, final = []) {
    if (node) {
      node.left && this.dfsInOrder(node.left, final);
      final.push(node.val);
      node.right && this.dfsInOrder(node.right, final);
    }
    return final;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, final = []) {
    if (node) {
      node.left && this.dfsPostOrder(node.left, final);
      node.right && this.dfsPostOrder(node.right, final);
      final.push(node.val);
    }
    return final;
  }

  /** bfs(): Traverse the array using BFS.
   * non-recursive 
  * Return an array of visited nodes. */

  // bfs() {
  //   if (!this.root) return [];
  //   let toVisit = [this.root];
  //   let final = [];

  //   while (toVisit.length) {
  //     let nextGeneration = [];
  //     for (let n of toVisit) {
  //       final.push(n.val);
  //       n.left && nextGeneration.push(n.left);
  //       n.right && nextGeneration.push(n.right);
  //     }
  //     toVisit = nextGeneration;
  //   }
  //   return final;
  // }

    /** bfs(): Traverse the array using BFS.
   * Recursive 
  * Return an array of visited nodes. */

  bfs(final = [],toVisit=[this.root]) {
    if (!this.root) return [];
    let nextGeneration = [];
    for (let n of toVisit) {
      final.push(n.val);
      n.left && nextGeneration.push(n.left);
      n.right && nextGeneration.push(n.right);
    }
    nextGeneration.length && this.bfs(final,nextGeneration)
    return final;
  }

  /** findSuccessorNode(): Find the node with the next largest value.
   * Return successor node or undefined if not found. */

  findSuccessorNode(node) {
    if (!node.right) return
    let successor = node.right
    while (successor.left) {
      successor = successor.left
    }
    return successor
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}
}

module.exports = {
  BinarySearchTree,
  Node,
};