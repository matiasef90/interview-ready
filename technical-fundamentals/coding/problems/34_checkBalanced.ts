// 4. *Check Balanced*:

// Implement a function to check if a binary tree is balanced.
// For the purposes of this question, a balanced tree is defined to be a tree
// such that the heights of the two subtrees of any node never differ by more than one.

export type TreeNode<T> = {
    value: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
};

export default function checkBalanced<T>(tree?: TreeNode<T> | null): boolean {
    if (!tree) { return true }
    const left = tree?.left ? countDeep(tree?.left) : 0
    const right = tree?.right ? countDeep(tree?.right) : 0
    return Math.abs(left - right) < 2 && checkBalanced(tree?.left) && checkBalanced(tree?.right)
}

function countDeep<T>(tree: TreeNode<T> | null): number {
    if (!tree) return 0
    const left = tree.left ? 1 + countDeep(tree.left) : 1
    const right = tree.right ? 1 + countDeep(tree.right) : 1
    return left < right ? right : left
}
