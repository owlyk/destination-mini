```typescript
package src.frontend.src.app.services.fibonacci.service

export class FibonacciService {
    generateFibonacciSeries(num: number): number[] {
        let fibonacciSeries: number[] = [];
        let prev1: number = 0;
        let prev2: number = 1;

        for (let i = 0; i < num; i++) {
            fibonacciSeries.push(prev1);
            let next = prev1 + prev2;
            prev1 = prev2;
            prev2 = next;
        }

        return fibonacciSeries;
    }
}
```