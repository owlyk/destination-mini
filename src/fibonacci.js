package fibonacci;

class FibonacciCalculator {
    calculateFibonacci(inputValue) {
        if (typeof inputValue === 'string' && !isNaN(inputValue)) {
            inputValue = Number(inputValue);
        }
        if (typeof inputValue !== 'number' || isNaN(inputValue)) {
            throw new Error('Invalid input. Please enter a valid number.');
        }
        if (inputValue < 0) {
            throw new Error('Fibonacci numbers are not defined for negative indices.');
        }
        if (inputValue > 10000) {
            throw new Error('Input exceeds the maximum limit for Fibonacci calculation. Please enter a smaller number.');
        }
        if (inputValue === 0) return 0;
        if (inputValue === 1) return 1;
        let a = 0, b = 1, result = 0;
        for (let i = 2; i <= inputValue; i++) {
            result = a + b;
            a = b;
            b = result;
        }
        return b;
    }
}