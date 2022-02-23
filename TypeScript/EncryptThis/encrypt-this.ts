export const encryptThis = (str: string): string => {
    
    let res: string[] = [];
    if(!str) return str;

    // Iterate over every word
    str.split(' ').forEach(word => {

        console.log(word);

        // Get Ascii code for the first char and second char
        const code: string = word.charCodeAt(0).toString();
        const second: string = word[1];

        // Replace the first letter by its Ascii code
        let replaced: string[] = [...word.replace(word.charAt(0), code)];

        if(second){

            // Swap second and last character
            replaced[replaced.indexOf(second)] = replaced[replaced.length-1];
            replaced[replaced.length-1] = second;
        }

        // Append to result array
        res.push(replaced.join(''))

        console.log(res)
    });

    return res.join(' ');
}

// Call function
console.log(encryptThis("A wise old owl lived in an oak"))