package fibonacci;

function generateFibonacci(numTerms) {
    if (numTerms <= 0 || !Number.isInteger(numTerms)) {
        return { status: 'error', message: 'Invalid input. Please provide a positive integer.' };
    }
    
    const fibonacciSequence = [];
    fibonacciSequence.push(0);
    if (numTerms > 1) {
        fibonacciSequence.push(1);
    }
    
    for (let i = 2; i < numTerms; i++) {
        const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextTerm);
    }
    
    return { status: 'success', terms: numTerms, sequence: fibonacciSequence };
}