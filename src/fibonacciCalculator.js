package src;

function validateInput(input) {
    const parsedInput = parseInt(input, 10);
    if (isNaN(parsedInput)) {
        return 'Invalid input: Please enter a valid integer.';
    }
    if (parsedInput < 0) {
        return 'Error: Fibonacci numbers are not defined for negative indices.';
    }
    return parsedInput;
}

function calculateFibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

export { validateInput, calculateFibonacci };