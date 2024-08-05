package src.utils;

function isValidInput(n) {
    return Number.isInteger(n) && n >= 0;
}

function generateErrorResponse(message) {
    return {
        status: 'error',
        message: message
    };
}