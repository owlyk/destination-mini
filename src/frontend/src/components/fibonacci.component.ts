package frontend;

import { FibonacciService } from '../services/fibonacci.service';

export class FibonacciComponent {
    constructor(private fibonacciService: FibonacciService) {}

    displayFibonacciSeries(): void {
        // Call the generateFibonacciSeries method from the FibonacciService
        const fibonacciSeries = this.fibonacciService.generateFibonacciSeries();

        // Display the calculated Fibonacci series to the user
        console.log('Fibonacci Series:');
        console.log(fibonacciSeries);
    }
}