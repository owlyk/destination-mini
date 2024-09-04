package src;

const FIBO_CACHE = {};
const ERROR_MESSAGES = {
    nonNegativeInteger: 'Input must be a non-negative integer.',
    negative: 'Input cannot be negative.',
    validNumber: 'Input must be a valid number.'
};

function calculateFibonacci(n) {
    if (n in FIBO_CACHE) {
        return FIBO_CACHE[n];
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let a = 0, b = 1, result;
    for (let i = 2; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    FIBO_CACHE[n] = result;
    return result;
}

function validateInput(input) {
    if (typeof input !== 'number' || isNaN(input)) {
        throw new Error(ERROR_MESSAGES.validNumber);
    }
    if (input < 0) {
        throw new Error(ERROR_MESSAGES.negative);
    }
    if (!Number.isInteger(input)) {
        throw new Error(ERROR_MESSAGES.nonNegativeInteger);
    }
    return Math.floor(input);
}

function handleRequest(req, res) {
    const startTime = Date.now();
    const n = parseInt(req.params.n, 10);
    try {
        const validInput = validateInput(n);
        const result = calculateFibonacci(validInput);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    } finally {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < 200) {
            setTimeout(() => {}, 200 - elapsedTime);
        }
    }
}

module.exports = { calculateFibonacci, validateInput, handleRequest };