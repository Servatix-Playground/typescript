/* Simple function to find prime numbers. @Jasu */

function primesUpTo(limit: number): number[] {
    const primes: Array<number> = []

    for (let n = 2; n <= limit; n++) {
        let isPrime: boolean = true

        for (const divider of primes) {
            if (n % divider === 0) {
                isPrime = false
            }
        }

        if (isPrime) {
            primes.push(n)
        }
    }

    return primes
}

console.log(primesUpTo(50))
