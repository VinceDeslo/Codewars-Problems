export function dblLinear(n: number): number {

    // Initialize a result array
    let res = [1];
    let xi = 0, yi = 0;

    // Generate the sequence
    while(res.length - 1 < n ){

        let y = 2 * res[xi] + 1;
        let z = 3 * res[yi] + 1;

        // Append y if smaller
        if(y < z) { res.push(y); xi++; }

        // Append z if smaller
        else if( y > z) { res.push(z); yi++; }

        // Append y if equal 
        else { res.push(y); xi++; yi++; }
    }
    return res[n];
}

// Call the function
console.log(dblLinear(10));
console.log(dblLinear(20));
console.log(dblLinear(30));
console.log(dblLinear(50));
console.log(dblLinear(100));