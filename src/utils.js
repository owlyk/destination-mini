package utils;

function validateInput(input) {
    const number = parseInt(input, 10);
    if (isNaN(number) || number <= 0) {
        return { valid: false, msg: 'Input must be a positive integer.' };
    }
    return { valid: true, msg: '' };
}

function fibonacci(n) {
    const fib = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        fib.push(a);
        const temp = a;
        a = b;
        b = temp + b;
    }
    return fib;
}

module.exports = { validateInput, fibonacci };