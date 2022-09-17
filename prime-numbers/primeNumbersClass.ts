/* Static class to find prime numbers. @Jasu */

export default class {
    protected static max: number = 0
    protected static numbers: Array<number> = []

    public static getAll(): number[] {
        if (this.numbers.length === 0) {
            return this.getUpTo(100)
        }

        return this.numbers
    }

    public static getUpTo(n: number): number[] {
        if (n > this.max) {
            this.max = n
            this.find()

            return this.numbers
        }

        const i = this.numbers.findIndex((v) => (v > n))
        return (i < 0 ? this.numbers : this.numbers.slice(0, i))
    }

    protected static find(): void {
        for (let n = this.last() + 1; n <= this.max; n++) {
            if (this.isPrime(n)) {
                this.numbers.push(n)
            }
        }
    }

    public static last(): number {
        if (this.numbers.length === 0) {
            return 1
        }

        return this.numbers[this.numbers.length - 1]
    }

    public static isPrime(n: number): boolean {
        if (n > this.max) {
            this.max = n
            this.find()
        }

        if (this.numbers.includes(n)) {
            return true
        }

        for (const divider of this.numbers) {
            if (n % divider === 0) {
                return false
            }
        }

        return true
    }

    public static flush(): void {
        this.numbers = []
        this.max = 0
    }
}