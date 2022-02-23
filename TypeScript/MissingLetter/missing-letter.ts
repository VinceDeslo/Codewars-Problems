export function findMissingLetter(array : string[]) : string {

    // Initialize the last symbol
    let last : number = array[0].charCodeAt(0);

    // Iterate over the letters
    for(let i=0; i< array.length; i++){
        
        // Fetch current  
        let curr : number = array[i].charCodeAt(0);
      
        // Check if a symbol is skipped
        if (curr === last + 2) break ; 
        else last = curr;
    }

    return String.fromCharCode(last + 1);
}

// Call function
console.log(findMissingLetter(["a","b","c","d","f"]));
console.log(findMissingLetter(['O','Q','R','S']));