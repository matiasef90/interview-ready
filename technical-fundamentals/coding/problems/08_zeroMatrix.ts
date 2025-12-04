// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][]

/**
 * 1 2 0
 * 3 4 5
 * 6 7 8
 * 
 * 0 0 0
 * 3 4 0
 * 6 7 0
 * 
 *  
 */

export default function zeroMatrix (matrix: Matrix) {
    const zeros = []
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) zeros.push([row, col])
        }
    }
    zeros.forEach((z) => {
        const [row, col] = z
        matrix[row] = matrix[row].map(_ => 0)
        matrix.forEach(r => r[col] = 0)
    })
    return
}