function fatorial(n) {
  let fat = 1;
  for (let c = n; c > 1; c--) {
    fat *= c;
  }
  return fat;
}
// Function declaration: a function that is defined with the function keyword 
console.log(fatorial(5)); // 120
// Function declaration can be called before its definition