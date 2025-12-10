// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//
// 1 -> 2 -> 2-> 2 -> 4

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
  const list: LinkedList<T> = new LinkedList(head)
  const set: Set<T> = new Set()
  const filtered = list.filter(node => {
    if (!set.has(node.value)) {
      set.add(node.value)
      return true
    }
    return false
  })
  return filtered.head
}
