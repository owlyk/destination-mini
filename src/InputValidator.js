package src;

class InputValidator {
    constructor() {}

    validate(input) {
        const number = Number(input);
        if (isNaN(number)) {
            return { isValid: false, message: "Input is not a number." };
        }
        if (number <= 0) {
            return { isValid: false, message: "Input must be a positive integer." };
        }
        return { isValid: true, message: "Input is valid." };
    }
}