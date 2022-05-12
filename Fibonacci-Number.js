function fibonacci(num) {
  if (num === 1) return 0;
  if (num === 2) return 1;
  return fibonacci(num - 2) + fibonacci(num - 1);
}
const num = 10;
const fibo = []
for (let i = 1; i <= num; i++) {
  fibo.push(fibonacci(i))
}
console.log(fibo);