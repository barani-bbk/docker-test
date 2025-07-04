console.log("hello world");

export function sum(a, b) {
  return a + b;
}

export function isPrime(x) {
  if (x < 2) return false;

  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) return false;
  }

  return true;
}
