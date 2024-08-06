package src;

class FibonacciValidator {
    validateInput(n) {
        if (typeof n !== 'number') {
            return { error: 'Input must be a number.' };
        }
        if (!Number.isInteger(n)) {
            return { error: 'Input must be an integer.' };
        }
        if (n < 0) {
            return { error: 'Input must be a non-negative integer.' };
        }
        return { success: 'Input is valid.' };
    }
}

module.exports = FibonacciValidator;