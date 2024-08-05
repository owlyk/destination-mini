package src;

class InputValidator {
    validateInput(input) {
        const regex = /^\d+$/;
        if (!regex.test(input)) {
            return { error: "Input must be a positive integer." };
        }
        const num = parseInt(input, 10);
        if (num < 0) {
            return { error: "Input must be a positive integer." };
        }
        return { validNumber: num };
    }
}