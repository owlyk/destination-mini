```typescript
package frontend.src.app.fib;

const FIB_LIMIT = 1476;

function fibList(num: number): { message: string, sequence: number[] } {
    if (num < 0) {
        return { message: "Input value must be non-negative", sequence: [] };
    }

    const fibonacci = [0, 1];
    let i = 2;
    while (true) {
        const nextFib = fibonacci[i - 1] + fibonacci[i - 2];
        if (nextFib > FIB_LIMIT) {
            break;
        }
        fibonacci.push(nextFib);
        i++;
    }

    return { message: "Fibonacci sequence up to limit", sequence: fibonacci.slice(0, num) };
}
```