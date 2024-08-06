```typescript
import * as promptSync from 'prompt-sync';

class FibonacciService {
    generateFibonacciSeries(): number[] {
        const prompt = promptSync();
        const numTerms = parseInt(prompt('Enter the number of terms in the Fibonacci series: '));

        if (isNaN(numTerms) || numTerms < 1) {
            throw new Error('Invalid input. Please enter a valid positive number.');
        }

        const fibonacciSeries: number[] = [0, 1];
        for (let i = 2; i < numTerms; i++) {
            fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
        }

        return fibonacciSeries;
    }
}
```