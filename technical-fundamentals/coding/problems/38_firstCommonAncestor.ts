// 8. *First Common Ancestor*:

// Design an algorithm and write code to find the first common ancestor of two nodes
// in a binary tree. Avoid storing additional nodes in a data structure.
// NOTE: This is not necessarily a binary search tree.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export default function firstCommonAncestor<T>(
  root: TreeNode<T> | undefined,
  p: TreeNode<T>,
  q: TreeNode<T>,
): TreeNode<T> | undefined {
  if (!root) return
  const parents : TreeNode<T>[] = []
  const queue: Array<TreeNode<T> | undefined> = [root]
  let node: TreeNode<T> | undefined
  while (node = queue.shift()) {
    if (hasChild(node, q) &&  hasChild(node, p)) {
      parents.push(node)
    }
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  const ancestor = parents.pop()
  return ancestor
}

function hasChild<T>(root: TreeNode<T> | undefined, q: TreeNode<T>): boolean {
  if (!root) return false
  if (root === q) return true
  return hasChild(root.left, q) || hasChild(root.right, q)
}