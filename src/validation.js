package src;

function validateInput(input) {
    if (Number.isInteger(input) && input >= 0) {
        return { isValid: true };
    } else {
        return { isValid: false, errorMessage: 'Input must be a non-negative integer.' };
    }
}

module.exports = { validateInput };