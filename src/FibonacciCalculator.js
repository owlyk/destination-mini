package src;

function calculateFibonacci(n) {
    if (n < 0) {
        throw new Error('Negative Fibonacci numbers are not defined.');
    }
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0, b = 1, c;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function isNumeric(value) {
    return !isNaN(value) && !Array.isArray(value) && value !== null;
}