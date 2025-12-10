// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;

  constructor(head?: Node<T>) {
    this.head = head
    this.tail = undefined
  }

  setTail() {
    if (!this.tail) { return }
    let p = this.head
    while (p) {
      if (!p.next) {
        this.tail = p
      }
      p = p.next
    }
  }

  push(value: T) {
    this.setTail()
    if (!this.tail) {
      this.head = {value}
      this.tail = this.head
      return
    }
    this.tail.next = { value }
    this.tail = this.tail.next 
  }

  filter(fn: (node: Node<T>) => boolean): LinkedList<T> {
    const list: LinkedList<T> = new LinkedList()
    let p = this.head
    while(p) {
      if (fn(p)) {
        list.push(p.value)
      }
      p = p.next
    }
    return list
  }

  visit(fn: (n: Node<T>, index?: number) => void) {
    let p = this.head
    let index = 0
    while (p) {
      fn(p, index)
      p = p.next
      index++
    }
  }
  remove(index: number) {
    if (!this.head) { return }
    if (index === 0) {
      this.head = this.head.next
      return
    }
    let p: Node<T> | undefined = this.head
    let idx = 0
    while(p) {
      if (idx + 1 === index && p.next) {
        p.next = p.next.next
        break
      } else {
        p = p.next
      }
    }
  }
  merge(list: LinkedList<T>) {
    if (!list.head) { return }
    if (!this.head) {
      this.head = list.head
      this.tail = list.tail
      return
    }
    this.setTail()
    if (this.tail) {
      this.tail.next = list.head
      this.tail = list.tail
    }
  }
  print() {
    let msg = ''
    let p = this.head
    while (p) {
      const value = p.value
      p = p.next
      if (msg === '') {
        msg += value
        continue
      }
      msg += '->' + value
    }
    console.log(msg)
  }

  length(): number {
    let length = 0
    this.visit(() => length++)
    return length
  }
  // extra

  //find(): Node<T> {}
  //get(index: number): Node<T> {}
  //iterator(): LinkedListIterator {}
}

const list = new LinkedList();
