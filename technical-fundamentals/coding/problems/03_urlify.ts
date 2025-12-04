// 3.  URLify:

// Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the "true" length of the string.

export default function URLify (s1 : string): string {
    for (let i = 0; i < s1.length; i++) {
        if(s1[i] === ' ') {
            s1 = s1.slice(0, i) + '%20' + s1.slice(i+1)
        }
    }
    return s1
}