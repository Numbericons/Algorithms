// find the parent of the node
// check left/right side

// helper, to determine parent
// at a given node, make sure left value is less than current value ... right is greater than current value
function is_bst(parent_node, min = null, max = null){
  // if (parent_node.right === null && parent_node.left === null) return true;
  if (parent_node === null) return true;

  if (parent_node.right) {
    if (parent_node.right.val <= parent_node.val) return false;
  }
  if (parent_node.left) {
    if (parent_node.left.val >= parent_node.val) return false;
  }

  return (is_bst(parent_node.left, min = null, node.value) && is_bst(parent_node.right, node.value, max = null))
}

// min is equal to going left until node.left === null
// max is equal to going right until node.right === null


// relative to parent, on right side || left side, if find one of the nodes on either side, the other node won't be a 'cousin/niece etc.'
// have to children or child + grandchild etc.
//
// traversing down the tree until we hit one of nodeA or nodeB
function findCommonAncestors(currNode, nodeA, nodeB) {
  let currNode = root;
  while (currNode !== nodeA || currNode !== nodeB) {

  }
}

// O(log(n))
// function findCommonAncestor(root, nodeA, nodeB) {
//   var currentNode = root;
//   while true {
//     if (currentNode == nodeA || currentNode == nodeB) {
//       // one is the descendent of the other.
//       return currentNode;
//     }

//     // is one of the nodes on the left, and the other on the right?
//     var bothOnRight = ((currentNode.value < nodeA.value) &&
//       (currentNode.value < nodeB.value));
//     var bothOnLeft = ((currentNode.value > nodeA.value) &&
//       (currentNode.value > nodeB.value));
//     var onSameSide = bothOnRight || bothOnLeft;

//     if (!onSameSide) {
//       // the two nodes are on different sides.
//       return currentNode;
//     }

//     currentNode = bothOnRight ? currentNode.right : currentNode.left;
//   }
// }