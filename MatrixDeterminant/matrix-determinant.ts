export function determinant(matrix: number[][]) {
    
    // Initialize a result variable
    let res: number = 0;
    let sign: number = -1;

    // 2x2 matrix guard
    if(matrix[0].length === 2) return det(matrix);

    // Clone the matrix
    let copy = [...matrix];

    // Iterate over the rows
    for(let i=0; i < matrix.length; i++){

        // Iterate over the columns
        for (let j=0; j< matrix[i].length; j++){

            // Multiply by the sign according to position
            if(i % 2) sign*=-1;

            // Calculate the minor determinant (cofactor)
            res += sign*getCofact(copy, i, j);
        }
    }

    // Default return (2x2)
    return res;
}

// Simple determinant
function det(matrix: number[][]){

    console.log('determinant of: ' + matrix)
    return matrix[0][0] * matrix[1][1] -matrix[0][1] * matrix[1][0];
}

// Get cofactor according to position in matrix
function getCofact(matrix: number[][], rowNum: number, colNum: number) : number{

    console.log()
    console.log('matrix= ' + matrix)
    console.log('row: '+rowNum+ ' col: '+colNum)

    // Remove the given row
    let rowRemoved = matrix.slice(rowNum, rowNum+1);

    // Remove the given column
    let colRemoved = rowRemoved.map((val)=>{
        console.log('val= '+ val)
        val.slice(colNum, colNum+1)
    })

    console.log('submatrix= ' +colRemoved);

    return det(matrix);
}

// Call the function
console.log(determinant([[1,3,4], [2,5,7], [4,6,8]]));
  
