// function depthFirstSearch(root, targetVal) {
//     if (!root) return;
//     if (root.val === targetVal) return root;
//     depthFirstSearch(root.left, targetVal);
//     depthFirstSearch(root.right, targetVal);
// }

function depthFirstSearch(root, targetVal) {
    let stack = [root];
    while (stack.length) {
        let node = stack.pop();
        if (node.val === targetVal) return node;
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return null;
}


module.exports = {
    depthFirstSearch
};