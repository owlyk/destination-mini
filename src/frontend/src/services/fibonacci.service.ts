```typescript
import * as promptSync from 'prompt-sync';

class FibonacciService {
    generateFibonacciSeries(): number[] {
        const prompt = promptSync();
        const numTerms = parseInt(prompt('Enter the number of terms in the Fibonacci series: '));

        if (isNaN(numTerms) || numTerms < 1) {
            throw new Error('Invalid input. Please enter a valid positive number.');
        }

        let fibonacciSeries: number[] = [];
        let num1 = 0, num2 = 1;

        for (let i = 1; i <= numTerms; i++) {
            fibonacciSeries.push(num1);
            let nextNum = num1 + num2;
            num1 = num2;
            num2 = nextNum;
        }

        return fibonacciSeries;
    }
}

export default FibonacciService;
```