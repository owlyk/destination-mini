package fibonacciService;

function handleFibonacciRequest(inputValue) {
    if (typeof inputValue !== 'string' && typeof inputValue !== 'number' || isNaN(inputValue) || !Number.isInteger(Number(inputValue)) || Number(inputValue) < 0) {
        console.error(`Invalid request: ${inputValue}`);
        return {
            status: 400,
            message: 'Invalid input. Please provide a valid integer.'
        };
    }
    
    const n = Number(inputValue);
    const fibonacci = (num) => {
        if (num === 0) return 0;
        if (num === 1) return 1;
        return fibonacci(num - 1) + fibonacci(num - 2);
    };

    return {
        status: 200,
        result: fibonacci(n)
    };
}

module.exports = handleFibonacciRequest;