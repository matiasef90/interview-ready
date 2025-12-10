// 6.  Suppose the digits are stored in forward order. Repeat the above problem.

// ```
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295
// Output:9 -> 1 -> 2,Thatis,912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumListsForwardOrder(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
  if (!list1 && !list2) { return }
  
  const one = new LinkedList(list1)
  let power = Math.pow(10, one.length() - 1) 
  let numberOne = 0
  one.visit(node => {
    numberOne += node.value * power
    power /= 10
  })

  const two = new LinkedList(list2)
  let numberTwo = 0
  power = Math.pow(10, two.length() - 1)
  two.visit(node => {
    numberTwo += node.value * power
    power /= 10
  })

  let sum = numberOne + numberTwo
  const result: LinkedList<number> = new LinkedList()
  String(sum).split('').forEach(n => result.push(Number(n)))
  return result.head
}
