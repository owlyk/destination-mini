package src;

class FibonacciCalculator {
    isInteger(value) {
        return !isNaN(value) && Number.isInteger(Number(value));
    }

    calculateFibonacci(n) {
        let a = 0, b = 1, temp;
        for (let i = 2; i <= n; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        return n === 0 ? a : b;
    }

    handleFibonacciRequest(index) {
        if (!this.isInteger(index)) {
            return { error: "Input must be a valid integer." };
        }
        const n = Number(index);
        if (n < 0) {
            return { error: "Negative indices are not valid for Fibonacci calculations." };
        }
        const result = this.calculateFibonacci(n);
        return { fibonacci: result };
    }
}