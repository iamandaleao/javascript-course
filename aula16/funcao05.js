// RECURSIVIDADE
function fatorial(n) {
  if (n === 1) {
    return 1
  } else {
    return n * fatorial(n - 1)
  }
}
// Function declaration can be called before its definition
console.log(fatorial(5))

/*

5! = 5 * 4 * 3 * 2 * 1
5! = 5 * 4!

N! = N * (N - 1)!
1! = 1

*/