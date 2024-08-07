package src;

function validateInput(num) {
    if (isNaN(num) || num < 0 || !Number.isInteger(Number(num))) {
        return "Invalid input. Please enter a positive integer.";
    }
    return null;
}

function generateFibonacci(num) {
    const fibonacci = [];
    if (num === 0) {
        return [0];
    }
    if (num === 1) {
        return [0];
    }
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (let i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}

module.exports = { validateInput, generateFibonacci };