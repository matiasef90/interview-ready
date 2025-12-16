// 5. *Sort Stack*:

// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure (such as an array).
// The stack supports the following operations: push, pop, peek, and isEmpty.

export default class SortStack<T> {
    stack: Array<number> = []
    constructor() {
    }

    push(value: number): void {
        const temporary: Array<number> = []
        while(!this.isEmpty()) {
            const peek = this.peek()
            if (peek && peek < value) {
                const pop = this.pop()
                if (pop) { temporary.push(pop) }
            } else {
                break
            }
        }
        this.stack.push(value)
        while(temporary.length !== 0) {
            const pop = temporary.pop()
            if (pop) { this.stack.push(pop) }
        }
        this.print()
    }

    pop(): number | undefined {
        this.print()
        return this.stack.pop()
    }

    peek(): number | undefined {
        if (this.isEmpty()) { return }
        return this.stack[this.stack.length - 1]
    }

    isEmpty(): boolean {
        return this.stack.length === 0
    }

    print() {
        let msg = ''
        for (let n of this.stack) {
            if (msg === '') {
                msg += n
            } else {
                msg += '->' + n
            }
        }
        console.log(msg)
    }
}
