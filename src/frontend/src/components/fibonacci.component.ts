```typescript
package src.frontend.src.components;

import { FibonacciService } from '../services/fibonacci.service';

export class FibonacciComponent {
    private fibonacciService: FibonacciService;

    constructor() {
        this.fibonacciService = new FibonacciService();
    }

    public displayFibonacciSeries(): void {
        const numTerms = prompt('Enter the number of terms in the Fibonacci series:');
        if (numTerms === null || isNaN(parseInt(numTerms)) || parseInt(numTerms) <= 0) {
            console.log('Invalid input. Please enter a valid number of terms.');
            return;
        }

        const fibonacciSeries = this.fibonacciService.generateFibonacciSeries(parseInt(numTerms));
        console.log('Generated Fibonacci series:');
        console.log(fibonacciSeries.join(', '));
    }
}
```