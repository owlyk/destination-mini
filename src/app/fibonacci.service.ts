package app;

export class FibonacciService {
    private static readonly TRUNCATE_AFTER_THIS_MANY = 10000;

    public calculateFibonacci(input: string): { fibNumbers: number[], message: string } {
        const num = Number(input);
        if (isNaN(num)) {
            return { fibNumbers: [], message: 'Invalid input. Please enter a positive integer.' };
        }
        if (num < 0) {
            return { fibNumbers: [], message: 'Negative numbers are not allowed.' };
        }
        if (num > FibonacciService.TRUNCATE_AFTER_THIS_MANY) {
            return this.fibList(FibonacciService.TRUNCATE_AFTER_THIS_MANY);
        }
        return this.fibList(num);
    }

    private fibList(num: number): { fibNumbers: number[], message?: string } {
        const fibNumbers: number[] = [];
        if (num >= 1) fibNumbers.push(0);
        if (num >= 2) fibNumbers.push(1);
        for (let i = 2; i < num; i++) {
            fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]);
        }
        if (num === FibonacciService.TRUNCATE_AFTER_THIS_MANY) {
            return { fibNumbers, message: 'Input was truncated to 10,000.' };
        }
        return { fibNumbers };
    }
}