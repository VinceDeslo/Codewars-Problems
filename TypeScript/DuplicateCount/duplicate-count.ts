export function duplicateCount(text: string): number{
    
    // Validate if string is present
    if(!text) return 0;

    // Split into char array
    const characters: string[] =  text.toLowerCase().split('');
    
    // Initialize result array
    let multiples: string[] = [];

    // Iterate over chars
    for(let char of characters){
        
        // Count occurences
        const count: number = characters.filter(c => c === char).length
        
        // Append if multiple
        if(count > 1) multiples.push(char);
    }

    // Return the length of non duplicates
    return [... new Set(multiples)].length;
}

// Call function
console.log(duplicateCount("aabbcde"));