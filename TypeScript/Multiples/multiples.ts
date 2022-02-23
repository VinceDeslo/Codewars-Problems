export class Challenge {
    static solution(number) {
        
        // Initialize sum
        let sum: number = 0;

        // Iterate over numbers
        for(let i=0; i<number; i++){

            // Verify multiples
            if(i % 3 === 0 || i % 5 === 0) sum += i;
        }
        return sum;
    }
}

// Call method
console.log(Challenge.solution(10));
console.log(Challenge.solution(-10));