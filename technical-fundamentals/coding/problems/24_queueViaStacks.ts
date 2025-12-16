// 4. *Queue via Stacks*:

// Implement a MyQueue class which implements a queue using two stacks.

export default class MyQueue<T> {
    principal: Array<T | undefined> = []
    auxiliar: Array<T | undefined> = []
    constructor() {
    }

    enqueue(value: T): void {
        this.principal.push(value)
    }

    dequeue(): T | undefined {
        if (this.principal.length === 0) { return }
        while(this.principal.length !== 1) {
            const aux = this.principal.pop()
            this.auxiliar.push(aux)
        }
        const value = this.principal.pop()
        while(this.auxiliar.length) {
            const aux = this.auxiliar.pop()
            this.principal.push(aux)
        }
        return value
    }

    peek(): T | undefined {
        return this.principal[0]
    }

    isEmpty(): boolean {
        return this.principal.length === 0
    }
}
