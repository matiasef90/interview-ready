// 6. *Successor*:

// Write an algorithm to find the "next" node
// (i.e., in-order successor) of a given node in a binary search tree.
// You may assume that each node has a link to its parent.

export type TreeNode<T> = {
    value: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
    parent?: TreeNode<T>; // Link to parent node
};

export default function successor<T>(node: TreeNode<T>): TreeNode<T> | undefined {
    if (!node) return
    let right = node.right
    while(right) {
        if (right.left) {
            right = right.left
            continue
        }
        return right
    }
    let parent = node.parent
    while(parent) {
        if (parent.value > node.value) {
            return parent
        }
        parent = parent.parent
    }
    return
}
