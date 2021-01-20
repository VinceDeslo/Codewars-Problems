//import { MORSE_CODE } from './preloaded';

export function decodeMorse(morseCode: string): string {
  
    let res: string[] = [];

    // Iterate over every word
    morseCode.split('   ').forEach(w => {

        // Decode morse symbols
        //w.split(' ').forEach(c => res.push(MORSE_CODE[c]))
        res.push(' ');
    })

    return res.join('').trim();
}


// Call function
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
console.log(decodeMorse('   .... .   -.--  '));

