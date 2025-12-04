// 9. *String Rotation*;

import { isSubstring } from "./__utils__/strings"

// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring.
// [e.g., "waterbottle" is a rotation of 'erbottlewat")

export default function stringRotation(s1: string, s2: string): boolean {
    let rotate = s1
    for (let i = 0; i < rotate.length; i++) {
        if (rotate === s2) return true
        rotate = rotate[rotate.length - 1] + rotate.slice(0, rotate.length - 1)
    }
    return false
}
