// Reverse an array in 47 bytes
export let reverse=(a:any)=>[...a].map(a.pop,a)

// Call function
console.log(reverse([1,2,3]))