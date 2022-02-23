export class Kata {
    static validatePin(pin: string): boolean {

        // Return match result for 4 or 6 digit pins
        return (/^((\d{4})|(\d{6}))$/).test(pin);
    }
}

// call
console.log(Kata.validatePin('123'));