// 5. *Sum Lists*: You have two numbers represented by a linked list,
// where each node contains a single digit. The digits are stored in reverse order,
// such that the Vs digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.

// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumLists(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
  let power = 1
  const one = new LinkedList(list1)
  let numberOne = 0
  one.visit(node => {
    numberOne += node.value * power
    power *= 10
  })
  const two = new LinkedList(list2)
  let numberTwo = 0
  power = 1
  two.visit(node => {
    numberTwo += node.value * power
    power *= 10
  })
  let sum = numberOne + numberTwo
  const result: LinkedList<number> = new LinkedList()
  String(sum).split('').reverse().forEach(n => result.push(Number(n)))
  return result.head
}
