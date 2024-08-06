package utils;

function isValidInput(input) {
    const number = Number(input);
    return Number.isInteger(number) && number >= 0;
}

const TRUNCATE_AFTER_THIS_MANY = 10000;

function calculateFibonacci(limit) {
    const fib = [0, 1];
    for (let i = 2; i <= limit; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, limit + 1);
}

module.exports = {
    isValidInput,
    calculateFibonacci,
    TRUNCATE_AFTER_THIS_MANY
};