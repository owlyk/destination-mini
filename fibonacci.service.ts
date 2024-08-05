package fibonacci;

export class FibonacciService {
    validateInput(input: number): boolean {
        return Number.isInteger(input) && input > 0;
    }

    generateFibonacciNumbers(input: number): number[] {
        let fibonacciNumbers: number[] = [];
        if (input === 1) {
            fibonacciNumbers.push(0);
        } else if (input === 2) {
            fibonacciNumbers.push(0, 1);
        } else {
            fibonacciNumbers.push(0, 1);
            for (let i = 2; i < input; i++) {
                fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
            }
        }
        return fibonacciNumbers;
    }
}