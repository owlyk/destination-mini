package fibonacciCalculator;

const prompt = require('prompt-sync')();
const logger = require('./logger');

const ERROR_NEGATIVE_INPUT = 'Negative inputs are not allowed.';
const ERROR_INVALID_INPUT = 'Invalid input. Please enter a non-negative integer.';

function calculateFibonacci(n) {
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return n === 0 ? a : b;
}

function handleFibonacciRequest() {
    const input = prompt('Enter a non-negative integer: ');
    logger.log(`Input received: ${input}`);
    
    const n = Number(input);
    let response;

    if (isNaN(n)) {
        logger.log(`Error: ${ERROR_INVALID_INPUT}`);
        response = { error: ERROR_INVALID_INPUT };
        return { statusCode: 400, body: response };
    }

    if (n < 0) {
        logger.log(`Error: ${ERROR_NEGATIVE_INPUT}`);
        response = { error: ERROR_NEGATIVE_INPUT };
        return { statusCode: 400, body: response };
    }

    const fibonacciNumber = calculateFibonacci(n);
    logger.log(`Fibonacci number for ${n}: ${fibonacciNumber}`);
    response = { fibonacci: fibonacciNumber };
    return { statusCode: 200, body: response };
}

module.exports = { handleFibonacciRequest };