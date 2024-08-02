```typescript
package frontend.src;

export function parseInput(input: string): number {
    return parseInt(input);
}

export function calculateFibonacciSeries(n: number): number[] {
    let series: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        series[i] = series[i - 1] + series[i - 2];
    }
    return series;
}

export function handleEdgeCases(n: number): number[] {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else {
        return [0, 1];
    }
}
```