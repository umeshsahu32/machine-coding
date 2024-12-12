// For a given number, find all the prime numbers from zero to that number.

const findPrime = (n) => {
  const primes = new Array(n + 1).fill(true);
  primes[0] = primes[1] = false; // 0 and 1 are not prime numbers

  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        //    when i = 2 that time j = 4 and all j inner loop values will be 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30
        //    when i = 3 that time j = 9 and all j inner loop values will be 9, 12, 15, 18, 21, 24, 27, 30
        //    when i = 4 that is already false so no loop
        //    when i = 5 that time j = 10 and all j inner loop values will be 25, 30
        //    when i = 6, tha is 6*6 = 36 which is greater than 30. hence loop ends
        primes[j] = false;
      }
    }
  }

  const result = [];

  for (let i = 2; i <= n; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }

  return result;
};

const result = findPrime(30);
console.log(result);
