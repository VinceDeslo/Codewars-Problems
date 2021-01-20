export function findOutlier(integers: number[]): number {

    // Determine if array is odd or even
    let isEven: boolean = integers
        .slice(0,3)
        .filter(v => v % 2 === 0).length > 1;

    // Find the outlier
    if(isEven) 
      return (integers.find(v => v % 2 !== 0) || 0);
    else 
      return (integers.find(v => v % 2 === 0) || 0);
}
  
// Call function
console.log(findOutlier([0, 1, 4]))
console.log(findOutlier([1, 3, 5, 2, 9]));
console.log(findOutlier([0, 2, 10, 7, 22]));
console.log(findOutlier([1, 1, 8, 1, 1]));