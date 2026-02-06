function countPrimeNumbers() {
  let count = 0;

  for (let i = 2; i <= 100; i += 1) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j += 1) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      count += 1;
    }
  }

  return count;
}

const startTime = performance.now();
countPrimeNumbers();
const endTime = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);
