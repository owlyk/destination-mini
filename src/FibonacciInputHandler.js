package src;

const prompt = require('prompt-sync')();
const FIB_LIMIT = 100;

function getInputValue() {
    const input = prompt('Enter a number: ');
    const regex = /^-?\d+(\.\d+)?([eE][-+]?\d+)?$/;
    if (!regex.test(input)) {
        return 'Invalid input: must be a number';
    }
    const parsedValue = Number(input);
    if (parsedValue < 0) {
        return 'Invalid input: must be a non-negative integer';
    }
    if (parsedValue > FIB_LIMIT) {
        return 'Input exceeds maximum limit';
    }
    return parsedValue;
}

module.exports = { getInputValue };