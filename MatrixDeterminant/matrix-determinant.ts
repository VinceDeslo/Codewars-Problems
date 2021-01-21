export function determinant(matrix: number[][]) {
    
    // Cover the 2x2 case matrix
    if(matrix[0].length == 2) return det(matrix);
    
    // Initialize a result variable
    let res: number = 0;
    let sign: number = -1;

    // Iterate over the first row
    for(let i=0; i<matrix[0].length; i++){
        
        // Calculate the minor determinant
        let exp: number = 0;

        // Multiply by the sign according to position
        if(i % 2) res += exp*sign;
    }

    //
    return det(matrix);
}

// Simple determinant
function det(matrix: number[][]){
    
    const ad = matrix[0][0] * matrix[1][1];
    const bc = matrix[0][1] * matrix[1][0];
    return ad - bc;
}

// Call the function
console.log(determinant([[1,3], [2,5]]));
  
