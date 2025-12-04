// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) return false
    return s1.split('').sort().join('') === s2.split('').sort().join('')
}
