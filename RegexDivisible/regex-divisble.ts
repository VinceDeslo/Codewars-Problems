// Match divisible by five as well as empty strings
export const divisibleByFive = /^(0|1(10)*(0|11)(01*01|01*00(10)*(0|11))*1)+$/; 

console.log(('0101').match(divisibleByFive));