```typescript
package src.frontend.src.services;

import { TRUNCATE_AFTER_THIS_MANY } from '../constants';

export class FibonacciService {
    public calculateFibonacci(num: number): { series: number[], message: string } {
        if (!Number.isInteger(num) || num < 0) {
            return { series: [], message: 'Invalid input. Please enter a positive integer.' };
        }

        let fibSeries: number[] = [0, 1];
        let i = 2;
        while (i <= num) {
            fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
            i++;
        }

        fibSeries = fibSeries.slice(0, TRUNCATE_AFTER_THIS_MANY);

        return { series: fibSeries, message: 'Fibonacci series generated successfully.' };
    }
}
```