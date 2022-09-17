"use strict";
/* Static class to find prime numbers. @Jasu */
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    static getAll() {
        if (this.numbers.length === 0) {
            return this.getUpTo(100);
        }
        return this.numbers;
    }
    static getUpTo(n) {
        if (n > this.max) {
            this.max = n;
            this.find();
            return this.numbers;
        }
        const i = this.numbers.findIndex((v) => (v > n));
        return (i < 0 ? this.numbers : this.numbers.slice(0, i));
    }
    static find() {
        for (let n = this.last() + 1; n <= this.max; n++) {
            if (this.isPrime(n)) {
                this.numbers.push(n);
            }
        }
    }
    static last() {
        if (this.numbers.length === 0) {
            return 1;
        }
        return this.numbers[this.numbers.length - 1];
    }
    static isPrime(n) {
        if (n > this.max) {
            this.max = n;
            this.find();
        }
        if (this.numbers.includes(n)) {
            return true;
        }
        for (const divider of this.numbers) {
            if (n % divider === 0) {
                return false;
            }
        }
        return true;
    }
    static flush() {
        this.numbers = [];
        this.max = 0;
    }
}
exports.default = default_1;
default_1.max = 0;
default_1.numbers = [];
