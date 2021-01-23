export function determinant(matrix: number[][]) {
    
    // Initialize a result variable
    let res: number = 0;
    let sign: number = -1;

    // 2x2 guard
    if(matrix[0].length === 2) return det(matrix);

    // Iterate over the columns
    for(let i=0; i < matrix[0].length; i++){

        // Multiply by the sign according to position
        if(i % 2) sign*=-1;

        // Calculate the minor determinant (cofactor)
        res += sign*getCofact(matrix, 0, i);
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

    console.log('matrix= ' + matrix)
    console.log('row: '+rowNum+ ' col: '+colNum)
    let copy = [...matrix];

    // Remove the given row
    copy.splice(rowNum, 1)

    // Remove the given column
    copy.map((val)=>{
        console.log('val= '+ val)
        val.splice(colNum, 1)
    })

    console.log('submatrix= ' +copy);

    return det(copy);
}

// Call the function
console.log(determinant([[1,3,4], [2,5,7], [4,6,8]]));
  
