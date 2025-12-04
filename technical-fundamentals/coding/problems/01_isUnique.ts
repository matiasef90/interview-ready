// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
    let string = str.split('').sort().join('')
    let prev = string[0]
    for (let i = 1; i< string.length; i++) {
        if (string[i] === prev) return false
        prev = string[i]
    }
    return true
}
