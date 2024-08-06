```typescript
package src.frontend.src.components.fibonacci.fibonacci.component;

import { FibonacciService } from 'path/to/fibonacci.service';

export class FibonacciComponent {
    private fibonacciService: FibonacciService;

    constructor() {
        this.fibonacciService = new FibonacciService();
    }

    displayFibonacciSeries(numTerms: number): void {
        const fibonacciSeries = this.fibonacciService.generateFibonacciSeries(numTerms);
        this.displayFibonacciSeriesOnUI(fibonacciSeries);
    }

    private displayFibonacciSeriesOnUI(fibonacciSeries: number[]): void {
        // Display the generated Fibonacci series on the UI
    }
}
```