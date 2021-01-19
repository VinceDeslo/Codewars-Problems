export function validBraces(braces: string): boolean {

    // Filter out empty strings
    if(!braces) return false;
    
    // Initialize stack
    let stack : string[] = [];

    // Initialize strings and map
    const open: string[] = ['(', '{', '['];
    type mapType = Record<string, string>;
    const braceMap: mapType = {
        '(' : ')',
        '{' : '}',
        '[' : ']',
    }

    // Iterate over the chars
    for (let i=0; i< braces.length; i++){

        // check if brace is opening
        if(open.indexOf(braces[i]) > -1){

            // Append to stack (currently being searched)
            stack.push(braces[i]);
        }
        else {

            // Get the last open brace
            let last = stack.pop();

            // Validate if the last opening doesnt match
            if (braces[i] !== braceMap[last]) {return false};
        }
    }
    
    // validate that there are no open braces left
    if(stack.length !== 0) {return false};

    // return true on success
    return true;
  }

  // Call function
  console.log(validBraces("[{({})}]"));