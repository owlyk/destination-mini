package app.components.index;

class IndexComponent {
    private userInput: number;
    private fibonacciNumbers: number[];
    private message: string;

    constructor() {
        this.userInput = 0;
        this.fibonacciNumbers = [];
        this.message = '';
    }

    validateInput(): boolean {
        // Implement input validation logic here
        return true;
    }

    callFibonacciService(): void {
        // Implement calling Fibonacci service logic here
    }

    updateUI(): void {
        // Implement updating UI logic here
    }
}