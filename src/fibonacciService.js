package fibonacciService;

function validateInput(num) {
    if (!Number.isInteger(num) || num < 0) {
        throw new Error(JSON.stringify({ error: "Input must be a positive integer." }));
    }
}

function calculateFibonacci(num) {
    validateInput(num);
    if (num === 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    const fib = [0, 1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

module.exports = { validateInput, calculateFibonacci };