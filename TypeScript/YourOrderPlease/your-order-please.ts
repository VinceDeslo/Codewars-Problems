export function order(words:string):string{
 
    // Initialize results array
    let res: string[] = [];

    // Iterate over the strings
    words.split(' ').forEach(val => {

        // get index value
        const index: number = parseInt(
            val.substr(val.search(/[0-9]/), 1)
            ) - 1; 
            
        // rearrange according to index
        res[index] = val;
    });

    return res.join(' ');
}

// Call the function
console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));