"use strict";
/* Simple function to find prime numbers. @Jasu */
function primesUpTo(limit) {
    const primes = [];
    for (let n = 2; n <= limit; n++) {
        let isPrime = true;
        for (const divider of primes) {
            if (n % divider === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            primes.push(n);
        }
    }
    return primes;
}
console.log(primesUpTo(50));
