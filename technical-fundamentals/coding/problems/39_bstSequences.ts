// 9. *BST Sequences*: A binary search tree was created by traversing through an array from left to right and inserting each element.
// Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

// ```
// EXAMPLE Input:
/*
            2
           / \
          1   3
*/
// Output: [[2, 1, 3], [2, 3, 1]]
// ```

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export default function bstSequences<T>(root: TreeNode<T> | undefined): T[][] {
  if (!root) return [[]]
  const result: T[][] = []
  const left = bstSequences(root.left)
  const right = bstSequences(root.right)
  for (let l of left) {
    for (let r of right) {
      weaver(l, r, [root.value], result)
    }
  }

  return result
}


function weaver<T>(left: T[], right: T[], prefix: T[], sequences: T[][]) {
  if (left.length === 0 || right.length === 0) {
    sequences.push(prefix.concat(left, right))
    return
  }
  const [firstLeft, ...restLeft] = left
  weaver(restLeft, right, [...prefix, firstLeft], sequences)
  
  const [firstRight, ...restRight] = right
  weaver(left, restRight, [...prefix, firstRight], sequences)
}
