var f = [];
function factorial (n) {
  if (n == 0 || n == 1) return 1;
  if (f[n] > 0) return f[n];
  console.log(n);
  return f[n] = factorial(n-1) * n;
}

// var f: number = 1;
// function factorial(n:number) {
// 	while (n > 0) {
// 		f = f * n;
// 		n = n - 1;
// 	}
// 	return f;
// }


//function call
console.log(factorial(5));