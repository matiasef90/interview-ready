// 3. *Magic Index*:

// A magic index in an array A[0...n-1] is defined to be an index such that A[i] = i.

// Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

// FOLLOW UP: What if the values are not distinct?

// 1 1 3 5 6 10 25
// 0 1 2 3 4  5  6
// 1 3 3 5 5 5 6
export function findMagicIndexDistinct(arr: number[]): number | null {
    return findMagic(arr, 0, arr.length)
}

export function findMagicIndexNonDistinct(arr: number[]): number | null {
    return findMagic(arr, 0, arr.length)
}
 
function findMagic(arr: number[], start: number, end: number): number | null {
    if (arr.length === 0) return null
    if (start === end) {
        return arr[start] === start ? start : null
    }
    let pivot = start + Math.floor((end - start) / 2)
    while (arr[pivot] < pivot && arr[pivot - 1] === arr[pivot]) {
        pivot--
    }
    while (arr[pivot] > pivot && arr[pivot + 1] === arr[pivot]) {
        pivot++
    }
    if (arr[pivot] === pivot) return pivot
    if (arr[pivot] < pivot) {
        return findMagic(arr, pivot + 1, end)
    } else {
        return findMagic(arr, start, pivot)
    }
}

