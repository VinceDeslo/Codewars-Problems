export class G964 {
    public static doubles(maxk:number, maxn:number):number {
        
        // Initialize a result variable
        let sumRows: number = 0;

        // Iterate over rows
        for(let k=1; k <= maxk; k++){

            let sumColumns = 0;

            // Iterate over every column
            for(let n=1; n <= maxn; n++){

                // Calculate strength of each particle
                sumColumns += 1/(k*(Math.pow(n+1, 2*k)));
            }
            sumRows += sumColumns;
        }
        return sumRows;
    }
}

// Call the function
console.log(G964.doubles(1,3));
console.log(G964.doubles(1,10));
console.log(G964.doubles(10,100));