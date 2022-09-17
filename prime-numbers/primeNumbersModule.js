"use strict";
/* Module to find prime numbers. @Jasu */
Object.defineProperty(exports, "__esModule", { value: true });
let max = 0, numbers = [];
function find() {
    for (let n = last() + 1; n <= max; n++) {
        if (isPrime(n)) {
            numbers.push(n);
        }
    }
}
function getAll() {
    if (numbers.length === 0) {
        return getUpTo(100);
    }
    return numbers;
}
function getUpTo(n) {
    if (n > max) {
        max = n;
        find();
        return numbers;
    }
    const i = numbers.findIndex((v) => (v > n));
    return (i < 0 ? numbers : numbers.slice(0, i));
}
function last() {
    if (numbers.length === 0) {
        return 1;
    }
    return numbers[numbers.length - 1];
}
function isPrime(n) {
    if (n > max) {
        max = n;
        find();
    }
    if (numbers.includes(n)) {
        return true;
    }
    for (const divider of numbers) {
        if (n % divider === 0) {
            return false;
        }
    }
    return true;
}
function flush() {
    numbers = [];
    max = 0;
}
exports.default = { getAll, getUpTo, last, isPrime, flush };
