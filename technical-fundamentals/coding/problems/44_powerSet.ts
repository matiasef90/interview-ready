// 4. *Power Set*: 

// Write a method to return all subsets of a set.

// Example 
// Input: [1, 2, 3]
// Output: [ [], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3] ];


export function powerSet(set: number[]): number[][] {
    return getSets(set)
    
}

function getSets(set: number[], sets: number[][] = [[]]): number[][] {
    if (set.length === 0) return sets
    const [value, ...rest] = set
    const aux: number[][] = []
    for (let i= 0; i < sets.length; i++) {
        aux.push([...sets[i], value])
    }
    return getSets(rest, [...sets, ...aux])
}