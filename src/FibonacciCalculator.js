package src;

function validateInput(input) {
    if (typeof input !== 'number' || input <= 0 || !Number.isInteger(input)) {
        return 'Input must be a positive integer.';
    }
    return null;
}

function calculateFibonacci(n) {
    const fibonacci = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        fibonacci.push(a);
        [a, b] = [b, a + b];
    }
    return fibonacci;
}

module.exports = { validateInput, calculateFibonacci };