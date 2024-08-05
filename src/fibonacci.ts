```typescript
class Fibonacci {
    private TRUNCATE_AFTER_THIS_MANY: number = 10;

    private fibList(num: number): string {
        let a: number = 0, b: number = 1, nextTerm: number;
        let result: string = "Fibonacci Series: ";

        for (let i = 1; i <= num; i++) {
            result += a + ", ";
            nextTerm = a + b;
            a = b;
            b = nextTerm;
        }

        return result;
    }
}
```