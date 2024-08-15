package src;

class FibonacciCalculator {
    constructor() {}

    validateInput(n) {
        if (typeof n === 'number' && n >= 0 && Number.isInteger(n)) {
            return n;
        }
        if (typeof n === 'string') {
            const parsed = parseFloat(n);
            if (!isNaN(parsed) && parsed >= 0 && Number.isInteger(parsed)) {
                return parsed;
            }
            if (parsed < 0) {
                throw new Error('Negative inputs are not allowed.');
            }
        }
        throw new Error('Invalid input.');
    }

    calculateFibonacci(n) {
        const fibonacci = [];
        for (let i = 0; i < n; i++) {
            if (i === 0) {
                fibonacci.push(0);
            } else if (i === 1) {
                fibonacci.push(1);
            } else {
                fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
            }
        }
        return fibonacci;
    }
}