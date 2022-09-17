/* Object literal to find prime numbers. @Jasu */

let max: number = 0, numbers: Array<number> = []

function find(): void {
    for (let n = Primes.last() + 1; n <= max; n++) {
        if (Primes.isPrime(n)) {
            numbers.push(n)
        }
    }
}

const Primes = {
    getAll(): number[] {
        if (numbers.length === 0) {
            return this.getUpTo(100)
        }

        return numbers
    },

    getUpTo(n: number): number[] {
        if (n > max) {
            max = n
            find()

            return numbers
        }

        const i = numbers.findIndex((v) => (v > n))
        return (i < 0 ? numbers : numbers.slice(0, i))
    },

    last(): number {
        if (numbers.length === 0) {
            return 1
        }

        return numbers[numbers.length - 1]
    },

    isPrime(n: number): boolean {
        if (n > max) {
            max = n
            find()
        }

        if (numbers.includes(n)) {
            return true
        }

        for (const divider of numbers) {
            if (n % divider === 0) {
                return false
            }
        }

        return true
    },

    flush(): void {
        numbers = []
        max = 0
    }
}

export default Primes