// 7.Permutations without Dups: Write a method to compute all permutations of a string of unique characters.

export function permutationsWithoutDups(input: string): string[] {
    // a -> a
    // ab -> ab ba
    // abc -> abc acb bac bca cab cba
    if (input.length < 2) { return [input] }
    if (input.length === 2) { 
        const [a, b] = input.split('')
        console.log('input === 2', input, [b+a, a+b])
        return [b+a, a+b]
    }
    const results: string[] = []
    for (let i = 0; i < input.length; i++) {
        console.log(input.slice(0,i) + input.slice(i+1), input)
        const iteration = permutationsWithoutDups(input.slice(0,i) + input.slice(i+1))
        .map(str => input[i]+str)
        results.push(...iteration)
    }
    return results
}


// *Permutations with Dups*: Write a method to compute all permutations of a string whose characters are not necessarily unique. The list of permutations should not have duplicates.

export function permutationsWithDups(input: string): string[] {
    const set: Set<string> = new Set(permutationsWithoutDups(input))
    return [...set]
}
