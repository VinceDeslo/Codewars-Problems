export function duplicateEncode(word: string){
    
    // Validate the string exists
    if(!word) return word;
    
    // decapitalize the input string
    const lowered: string = word.toLowerCase();

    // result string variable
    let res: string = '';

    // Iterate over chars
    for(let i=0; i<lowered.length; i++){

        // count occurrences
        let count = lowered
            .split('')
            .filter(c=>c===lowered[i])
            .length
        
        // Build the encoded string
        if(count === 1) res += '(';
        else res += ')'; 
    }

    return res.toString()
}

// Call function
console.log(duplicateEncode('din'));