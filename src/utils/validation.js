package utils;

function isValidInput(input) {
    const regex = /^(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?$/;
    return regex.test(input);
}

function getErrorMessage(input) {
    return JSON.stringify({
        error: "Invalid input",
        message: `${input} is not a valid positive integer or scientific notation.`
    });
}