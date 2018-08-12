// consider the two cases,
  // if node.right child exists
    // use helper findLowest on node.right
  // if node.right child doesnt
    // must find a node parent that has node current as left child
    // while loops are powerful


const BSTp = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
}

function inorderSuccessor(node) {
  if (node.right) {
    return findLowest(node.right);
  }

  let currentNode = node;
  let parentNode = node.parent;

  while (parentNode && parentNode.right === currentNode) {
    currentNode = parentNode;
    parentNode = currentNode.parent;
  }
  return currentNode;
}



function findLowest(node) {
  let current = node;
  while (current.left) {
    current = current.left;
  }
  return current;
}
