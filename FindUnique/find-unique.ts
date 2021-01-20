export function findUniq(arr: number[]): number {

    // Find the duplicates
    let num: number[] = arr.filter(
        (num, i, arr) => arr.indexOf(num) !== i);

    // Return the unique number
    return arr.find(val => val !== num[0]);
}

// Call function    
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));