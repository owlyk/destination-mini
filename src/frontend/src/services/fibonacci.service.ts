```typescript
import * as promptSync from 'prompt-sync';

class FibonacciService {
    generateFibonacciSeries(): number[] {
        const prompt = promptSync();
        let numTerms: number;

        do {
            numTerms = parseInt(prompt('Enter the number of terms in the Fibonacci series: '));
        } while (isNaN(numTerms) || numTerms < 0);

        let fibonacciSeries: number[] = [];

        if (numTerms === 0) {
            return fibonacciSeries;
        } else if (numTerms === 1) {
            fibonacciSeries.push(0);
            return fibonacciSeries;
        } else {
            fibonacciSeries.push(0, 1);
            for (let i = 2; i < numTerms; i++) {
                fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
            }
            return fibonacciSeries;
        }
    }
}

export default FibonacciService;
```