// 1. *Three in One*: Describe how you could use a single array to implement three stacks.

export default class ThreeStacks<T> {
    private array: T[];

    constructor(arrayLength: number) {
        this.array = new Array(arrayLength)
    }

    push(stackNum: number, value: T): void {
        const k = Math.floor(this.array.length / 3)
        let currentStack = 0
        let element = 0
        for (let i = 0; i < this.array.length; i++) {
            if (stackNum === currentStack && !this.array[i]) {
                this.array[i] = value
                break
            }
            if (element + 1 === k && currentStack < 2) {
                element = 0
                currentStack++
            } else {
                element++
            }
        }
    }

    pop(stackNum: number): T | undefined {
        let k = Math.floor(this.array.length / 3)
        let index = k * stackNum + k - 1
        while(k) {
            const value = this.array[index]
            if (value) {
                delete this.array[index]
                return value
            }
            k--
            index--
        }
        return
    }

    peek(stackNum: number): T | undefined {
        let k = Math.floor(this.array.length / 3)
        let index = k * stackNum + k - 1
        while(k) {
            const value = this.array[index]
            if (value) {
                return value
            }
            k--
            index--
        }
        return
    }

    print() {
        console.log(this.array)
    }
}