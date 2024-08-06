package server.utils;

const TRUNCATE_AFTER_THIS_MANY = 10000;

function generateFibonacci(num) {
    const fibonacciNumbers = [];
    let a = 0, b = 1;

    while (a <= num && fibonacciNumbers.length < TRUNCATE_AFTER_THIS_MANY) {
        fibonacciNumbers.push(a);
        [a, b] = [b, a + b];
    }

    return fibonacciNumbers;
}

module.exports = { generateFibonacci };