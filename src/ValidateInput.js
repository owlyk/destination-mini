package src;

export function validateInput(input) {
    const numberInput = Number(input);
    const isValid = Number.isInteger(numberInput) && numberInput > 0;
    const message = isValid ? 'Input is a valid positive integer.' : 'Input must be a positive integer.';
    return { isValid, message };
}