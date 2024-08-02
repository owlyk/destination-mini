```javascript
const validateInput = (input) => {
    return Number.isInteger(input) && input > 0;
};

const generateFibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
};

const truncateFibonacci = (fibonacci, n) => {
    return fibonacci.slice(0, n);
};

module.exports = {
    validateInput,
    generateFibonacci,
    truncateFibonacci
};
```