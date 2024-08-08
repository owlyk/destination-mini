package;

function calculateFibonacci(n) {
    let a = 0, b = 1, temp;
    for (let i = 0; i < n; i++) {
        temp = a;
        a = b;
        b = temp + b;
    }
    return a;
}

function validateInput(input) {
    const parsedInput = Number(input);
    if (isNaN(parsedInput)) {
        return "Invalid input. Please enter a non-negative integer.";
    }
    if (parsedInput < 0) {
        return "Negative numbers are not allowed.";
    }
    return Number.isInteger(parsedInput) ? parsedInput : parseInt(parsedInput, 10);
}

export { calculateFibonacci, validateInput };