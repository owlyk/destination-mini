package src;

class FibonacciError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode || 400;
    }
}

module.exports = FibonacciError;