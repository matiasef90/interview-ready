// 2. *Stack Min*: How would you design a stack which,
// in addition to push and pop,
// has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.
//

export default class StackMin<T> {
    private stack: Array<T> = []
    private min_indexes: Array<number> = []
    
    constructor() {
    }

    push(value: T): void {
        this.stack[this.stack.length] = value
        if (!this.min_indexes.length) {
            this.min_indexes[this.min_indexes.length] = this.stack.length - 1
        }
        const min_value = this.min()
        if (min_value && value < min_value) {
            this.min_indexes[this.min_indexes.length] = this.stack.length - 1
        }
    }

    pop(): T | undefined {
        if (this.stack.length === 0) return
        const index = this.stack.length - 1
        const minIndex = this.min_indexes[this.min_indexes.length - 1]
        const value = this.stack[index]
        if (minIndex === index) {
            this.min_indexes.length = this.min_indexes.length - 1
        }
        this.stack.length = this.stack.length - 1
        return value
    }
    
    min(): T | undefined {
        const minIndex = this.min_indexes[this.min_indexes.length - 1]
        return this.stack[minIndex]
    }
}
