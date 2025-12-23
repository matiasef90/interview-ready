// 3. *List of Depths*:

// Given a binary tree, design an algorithm which creates a linked list
// of all the nodes at each depth (e.g., if you have a tree with depth D,
// you'll have D linked lists).

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export type ListNode<T> = {
  value: T;
  next?: ListNode<T>;
};

export default function listOfDepths<T>(
  root: TreeNode<T> | null,
): ListNode<T>[] {
  const lists: ListNode<T>[] = []
  if (!root) { return lists }
  function createLists(root: TreeNode<T>, floor: number = 0) {
    if (!root) { return }
    if (!lists[floor]) {
      lists[floor] = {value: root.value }
    } else {
      let p = lists[floor]
      while(p) {
        if (!p.next) {
          p.next = {value: root.value}
          break
        }
        p = p.next
      }
    }
    if (root.left) { createLists(root.left, floor + 1)}
    if (root.right) { createLists(root.right, floor + 1)}
  }
  
  createLists(root, 0)

  return lists
}
