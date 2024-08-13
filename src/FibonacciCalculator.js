package src;

const MAX_FIB_INDEX = 1000;
const FIBONACCI_CACHE = {};

function isValidInput(input) {
    const num = Number(input);
    return !isNaN(num) && num >= 0 && Number.isInteger(num);
}

function computeFibonacci(input) {
    if (!isValidInput(input)) {
        throw new Error("Invalid input. Please provide a non-negative integer or valid scientific notation.");
    }

    const index = Number(input);
    if (index in FIBONACCI_CACHE) {
        return FIBONACCI_CACHE[index];
    }

    if (index === 0) {
        FIBONACCI_CACHE[0] = 0;
        return 0;
    }
    if (index === 1) {
        FIBONACCI_CACHE[1] = 1;
        return 1;
    }

    let a = 0, b = 1, result;
    for (let i = 2; i <= index; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    FIBONACCI_CACHE[index] = result;
    return result;
}