// 6. *Towers of Hanoi*:

// In the classic problem of the Towers of Hanoi, you have 3 towers and
// N disks of different sizes which can slide onto any tower.
// The puzzle starts with disks sorted in ascending order of size from top to bottom
// (i.e., each disk sits on top of an even larger one).
//
// You have the following constraints:
// Only one disk can be moved at a time.
// A disk is slid off the top of one tower onto another tower.
// A disk cannot be placed on top of a smaller disk.
// Write a program to move the disks from the first tower to the last using stacks.

type Tower = number[];

export function towersOfHanoi(n: number): [Tower, Tower, Tower] {
    const t1: Tower = Array(n).fill(0)
        .map((_, i) => i + 1)
        .reverse()
    const t2: Tower = []
    const t3: Tower = []
    console.log('dddd', t1)
    hanoi(n, t1, t2, t3)
    return [t1, t2, t3]
}

function hanoi(n: number, t1: Tower, t2: Tower, t3: Tower) {
    if (n === 1) {
        const value = t1.pop()
        if (value) t3.push(value)
        return
    }
    if (n === 2) {
        let value = t1.pop()
        if (value) t2.push(value)
        value = t1.pop()
        if (value) t3.push(value)
        value = t2.pop()
        if (value) t3.push(value)
        return
    }
    hanoi(n - 1, t1, t3, t2)
    const value = t1.pop()
    if (value) t3.push(value)
    hanoi(n - 1, t2, t1, t3)
}