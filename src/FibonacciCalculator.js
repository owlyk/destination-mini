package src;

export function validateInput(input) {
    if (isNaN(input) || input <= 0 || !Number.isInteger(Number(input))) {
        return 'Input must be a positive integer.';
    }
    return null;
}

export function calculateFibonacci(n) {
    n = Number(n);
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    let a = 1, b = 1, fib = 0;
    for (let i = 3; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }
    return fib;
}