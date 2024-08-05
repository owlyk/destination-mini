package fibonacciCalculator;

function validateInput(input) {
    const number = Number(input);
    if (isNaN(number) || number < 0) {
        return 'Input must be a positive integer.';
    }
    return number;
}

function calculateFibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

module.exports = { validateInput, calculateFibonacci };