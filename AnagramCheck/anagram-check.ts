// Not from codewars yet similar problem
function isAnagram(string1: string, string2: string): boolean {

    // Length and null guards
    if( string1.length === 0 || string2.length === 0) return false;
    if(!string1 || !string2) return false;

    // Map the character occurences
    let occurrences1 = getCounts(string1);
    let occurrences2 = getCounts(string2);

    // Check if number of occurrences coincide. 
    // stringify is used since the props are sorted by getCounts()
    // should use is-equal package or lodash for true deep equal
    if(JSON.stringify(occurrences1) 
    == JSON.stringify(occurrences2)) 
        return true;

    return false;
}

// Function to count characters in a string (O(nlogn))
function getCounts(str: string): Record<string, number>{

    // Obtain an object of keys <'char': cnt> from string
    return [...str]
        .sort()
        .reduce((acc, char) => {

        // Set count to 1 or update the count if char already present 
        acc[char] = acc[char] ? acc[char] + 1: 1;

        return acc;
    }, {});
}


// Tests
console.log(isAnagram("abc", "bca"));
console.log(isAnagram("abc", "abb"));
console.log(isAnagram("abcc", "abbc"));
console.log(isAnagram("a gentleman", "elegant man"));
console.log(isAnagram("restful", "fluster"));
console.log(isAnagram("restfulf", "ufluster"));