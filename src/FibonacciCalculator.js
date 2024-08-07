package src;

function calculateFibonacci(number) {
    if (typeof number !== 'number' || number < 0 || !Number.isInteger(number)) {
        throw new Error('Invalid input: number must be a non-negative integer');
    }
    let a = 0, b = 1, fib = 0;
    for (let i = 2; i <= number; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }
    return number === 0 ? a : b;
}

module.exports = calculateFibonacci;