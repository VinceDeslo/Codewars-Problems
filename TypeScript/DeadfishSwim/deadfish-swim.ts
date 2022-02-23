export function parse(data: string): number[] {
    
    // Initialize the result array and counter
    let out: number[] = [];
    let res: number = 0;

    // Iterate over the data
    [...data].forEach((character) => {
        
        switch(character){
            case 'i': res++; break;
            case 'd': res--; break;
            case 's': res *= res; break;
            case 'o': out.push(res); break;
            default: break; 
        }
    });

    return out;
}

// Call function
console.log(parse("iiisxxxdoso"));