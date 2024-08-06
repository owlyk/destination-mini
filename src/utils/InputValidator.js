package utils;

export function validateAndParseInput(input) {
    const regex = /^(0|[1-9]\d*)([eE][+-]?\d+)?$/;
    if (typeof input !== 'string' || !regex.test(input)) {
        throw new Error('Input must be a non-negative integer or valid scientific notation.');
    }
    return parseInt(input, 10);
}