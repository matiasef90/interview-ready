// 5. *Validate BST*:

// Implement a function to check if a binary tree is a binary search tree.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export default function validateBST<T>(
  node: TreeNode<T> | undefined,
): boolean {
  if (!node) return true
  const leftVal = node.left ? getValues(node.left, []) : []
  const rightVal = node.right ? getValues(node.right, []) : []
  return leftVal.every(val => val < node.value)
  && rightVal.every(val => val > node.value)
  && validateBST(node.left)
  && validateBST(node.right)
}

function getValues<T>(node: TreeNode<T> | undefined, arr: T[] = []): T[] {
  if (!node) {return arr }
  arr.push(node.value)
  if (node.left) { getValues(node.left, arr)}
  if (node.right) { getValues(node.right, arr)}
  return arr
}