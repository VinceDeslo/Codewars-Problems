// The following algorithm uses a .sort() approach.
export function findUniq(input: number[]): number {

    // Input guard 
    if(!input?.length) {
        console.log('Provided array is invalid.')
        return null;
    }

    // Sort the array with worst case O(nlogn) assuming a merge-sort    
    // Performance will vary depending on browser engines 
    input.sort()
    
    // Find and return the unique value
    return (input[0] == input[1])
        ? input[input.length - 1] 
        : input[0]
}


/* 
Other possible implementations include:

return input.find(el => input.indexOf(el) === input.lastIndexOf(el));

return input.filter((el) => input.indexOf(el) == input.lastIndexOf(el))[0];

These tend to be more verbose and decrease readability yet offer more compact code. 
Furthermore, they require additional method calls for index fetching which will impact performance.
*/


// Test cases
console.log(findUniq([]));    
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));