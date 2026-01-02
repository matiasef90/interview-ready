// 5. *Recursive Multiply*: 

// Write a recursive function to multiply two positive integers without using the * operator. You can use addition, subtraction, and bit shifting, but you should minimize the number of those operations.

export function recursiveMultiply(a: number, b: number): number {
   return multiply(a, b)
}

function multiply(a: number, b: number, result: number = 0): number {
    if (b === 0) return result
    return multiply(a, b - 1, result + a)
}