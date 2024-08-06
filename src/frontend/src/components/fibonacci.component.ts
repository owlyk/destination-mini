```typescript
package src.frontend.src.components;

import { FibonacciService } from '../services/fibonacci.service';

export class FibonacciComponent {
    private fibonacciService: FibonacciService;

    constructor() {
        this.fibonacciService = new FibonacciService();
    }

    displayFibonacciSeries(num: number): void {
        if (num <= 0) {
            console.log('Invalid input. Please enter a positive number.');
            return;
        }

        const fibonacciSeries = this.fibonacciService.generateFibonacciSeries(num);
        console.log(`Fibonacci Series for ${num} numbers: ${fibonacciSeries.join(', ')}`);
    }
}
```