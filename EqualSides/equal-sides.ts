export function findEvenIndex(arr: number[]): number
{
    // Iterate over the array
    for(let i=0; i < arr.length + 1; i++){

        // Sum the left portion
        const sumleft = arr.slice(0, i)
            .reduce((sum, curr) => sum + curr, 0);
        
        // Sum the right portion
        const sumright =  arr.slice(i + 1, arr.length)
            .reduce((sum, curr) => sum + curr, 0);

        // Check if equal
        if(sumleft === sumright) return i;
    }

    // no index found
    return -1;
}

// call function
console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([1,2,3,4,5,6]));
console.log(findEvenIndex([20,10,30,10,10,15,35]));
console.log(findEvenIndex([1,-1,2]));
console.log(findEvenIndex([1,-1,1]));