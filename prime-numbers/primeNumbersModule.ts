/* Module to find prime numbers. @Jasu */

let max: number = 0, numbers: Array<number> = []

function find(): void {
    for (let n = last() + 1; n <= max; n++) {
        if (isPrime(n)) {
            numbers.push(n)
        }
    }
}

function getAll(): number[] {
    if (numbers.length === 0) {
        return getUpTo(100)
    }

    return numbers
}

function getUpTo(n: number): number[] {
    if (n > max) {
        max = n
        find()

        return numbers
    }

    const i = numbers.findIndex((v) => (v > n))
    return (i < 0 ? numbers : numbers.slice(0, i))
}

function last(): number {
    if (numbers.length === 0) {
        return 1
    }

    return numbers[numbers.length - 1]
}

function isPrime(n: number): boolean {
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
}

function flush(): void {
    numbers = []
    max = 0
}

export default { getAll, getUpTo, last, isPrime, flush }