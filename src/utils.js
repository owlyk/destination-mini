package utils;

function validateInput(n) {
    if (isNaN(n)) {
        throw new Error("Input must be a number.");
    }
    const parsedValue = parseFloat(n);
    if (parsedValue < 0) {
        throw new Error("Negative numbers are not valid.");
    }
    return Math.floor(parsedValue);
}