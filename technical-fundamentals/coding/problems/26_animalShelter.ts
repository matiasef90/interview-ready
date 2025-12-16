// 6. *Animal Shelter*:

// An animal shelter, which holds only dogs and cats, operates on a strictly
// "first in, first out" basis. People must adopt either the "oldest"
// (based on arrival time) of all animals at the shelter,
// or they can select whether they would prefer a dog or a cat
// (and will receive the oldest animal of that type).
// They cannot select which specific animal they would like.
// Create the data structures to maintain this system and implement operations
// such as enqueue, dequeueAny, dequeueDog, and dequeueCat.
// You may use the built-in LinkedList data structure.

export type AnimalType = "dog" | "cat";

export class Animal {
  type: AnimalType;
  next: Animal | undefined;
  constructor(type: AnimalType) {
    this.type = type;
  }
}

export default class AnimalShelter {
    head: Animal | undefined
    tail: Animal | undefined
    constructor() {
    }

    enqueue(type: AnimalType): void {
      const animal = new Animal(type)
      if (!this.head) {
        this.head = animal
        this.tail = this.head
        return
      }
      if (this.tail) {
        this.tail.next = animal
        this.tail = this.tail?.next
      }
    }

    dequeueAny(): Animal | undefined {
      if (this.head) {
        const animal = this.head
        this.head = this.head.next
        animal.next = undefined
        return animal
      }
      return
    }

    dequeueDog(): Animal | undefined {
      let p = this.head
      if (p?.type === 'dog') {
        return this.dequeueAny()
      }
      while (p) {
        if (p.next?.type === 'dog') {
          const dog = p.next
          p.next = p.next.next
          dog.next = undefined
          return dog
        }
        p = p.next
      }
      return
    }

    dequeueCat(): Animal | undefined {
      let p = this.head
      if (p?.type === 'cat') {
        return this.dequeueAny()
      }
      while (p) {
        if (p.next?.type === 'cat') {
          const cat = p.next
          p.next = p.next.next
          cat.next = undefined
          return cat
        }
        p = p.next
      }
      return
    }
}

