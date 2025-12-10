// 7. *Palindrome*:

// Implement a function to check if a linked list is a palindrome.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function isPalindrome<T>(head: Node<T> | undefined): boolean {
  let word = ''
  const list = new LinkedList(head)
  list.visit(node => word += node.value)
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false
    }
  }
  return true
}
