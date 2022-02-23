export function determinant(matrix: number[][]) {

    // 1x1 and 2x2 matrix guard
    if(matrix[0].length === 1) return matrix[0][0];
    if(matrix[0].length === 2) return simpleDet(matrix);

    // Initialize a result variable
    let res: number = 0;

    // Iterate over every column value
    for (let j=0; j< matrix[0].length; j++){

            // Recursively continue calculating submatrixes
            let val = determinant(getCofact(matrix, 0, j));

            // result = sign * coefficient * det(submatrix) 
            res += ((j % 2)? -1: 1) * matrix[0][j] * val;
    }
    return res;
}


// Simple determinant
function simpleDet(matrix: number[][]){

    return matrix[0][0] * matrix[1][1] -matrix[0][1] * matrix[1][0];
}


// Get submatrix according to position in matrix
function getCofact(matrix: number[][], rowNum: number, colNum: number) : number[][] {

    // Clone the matrix (deep copy)
    let copy = matrix.map((row) => [...row]);

    // Remove the given row and column
    copy.splice(rowNum, 1);
    copy.map((val)=> val.splice(colNum, 1));

    // Return the submatrix
    return copy;
}

//Call the function
console.log(determinant([[1, 3], 
                         [2, 5]]));

console.log(determinant([[2, 5, 3], 
                        [1, -2, -1], 
                        [1, 3, 4]]));

console.log(determinant([[1, 2, 3, 4], 
                         [5, 6, 7, 8], 
                         [9, 10, 11, 12], 
                         [13, 14, 15, 16]]));

