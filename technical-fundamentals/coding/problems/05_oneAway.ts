// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
    //modified
    if (str1.length === str2.length) {
        let mod = 0
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                mod++
            }
            if (mod > 1) return false
        }
    }
    if (Math.abs(str1.length - str2.length) > 1) return false
    return true
}
