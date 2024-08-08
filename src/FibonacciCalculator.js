package src;

function calculateFibonacci(n) {
    if (typeof n !== 'number' || isNaN(n)) {
        return 'Invalid input: please enter a valid number';
    }
    if (n < 0) {
        return 'Invalid input: negative numbers are not allowed';
    }
    let a = 0, b = 1, fib = 0;
    for (let i = 2; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }
    return n === 0 ? a : b;
}