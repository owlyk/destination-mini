package;

function validateFibonacciInput(n) {
    if (typeof n !== 'number') {
        return { isValid: false, message: 'Input must be a number.' };
    }
    if (n < 0 || !Number.isInteger(n)) {
        return { isValid: false, message: 'Input must be a non-negative integer.' };
    }
    return { isValid: true, message: 'Input is valid for Fibonacci calculation.' };
}

export default validateFibonacciInput;