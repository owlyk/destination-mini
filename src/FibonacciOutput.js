package src;

class FibonacciOutput {
    displayOutput(fibonacciSequence, errorMessage) {
        if (errorMessage) {
            console.log({ status: 400, message: errorMessage });
        } else {
            console.log({ status: 200, result: fibonacciSequence });
        }
    }

    calculateFibonacci(n) {
        if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
            this.displayOutput(null, 'Invalid input: must be a non-negative integer');
            return;
        }
        let fibonacciSequence = [];
        for (let i = 0; i < n; i++) {
            if (i === 0) {
                fibonacciSequence.push(0);
            } else if (i === 1) {
                fibonacciSequence.push(1);
            } else {
                fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
            }
        }
        this.displayOutput(fibonacciSequence, null);
    }
}