package fibonacci;

function generateFibonacci(numTerms) {
    if (numTerms <= 0 || !Number.isInteger(numTerms)) {
        return { error: "Invalid input. Please provide a positive integer." };
    }
    
    const fibonacciSequence = [];
    let a = 0, b = 1;

    for (let i = 0; i < numTerms; i++) {
        fibonacciSequence.push(a);
        const nextTerm = a + b;
        a = b;
        b = nextTerm;
    }

    return fibonacciSequence;
}

module.exports = { generateFibonacci };