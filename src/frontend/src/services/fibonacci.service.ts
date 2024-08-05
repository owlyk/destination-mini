```typescript
import { TRUNCATE_AFTER_THIS_MANY } from '../constants';

export class FibonacciService {
    public validateInput(input: string): boolean {
        const num = parseInt(input);
        return !isNaN(num) && num >= 0;
    }

    public generateFibonacciSeries(input: number): { fibList: number[], message: string } {
        const fibList = [0, 1];
        let a = 0, b = 1, next = 0;

        for (let i = 2; i < input; i++) {
            next = a + b;
            a = b;
            b = next;
            fibList.push(next);
        }

        if (input <= TRUNCATE_AFTER_THIS_MANY) {
            return { fibList, message: 'Fibonacci series generated successfully.' };
        } else {
            return { fibList: fibList.slice(0, TRUNCATE_AFTER_THIS_MANY), message: 'Fibonacci series truncated successfully.' };
        }
    }
}
```