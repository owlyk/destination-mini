```typescript
export class FibonacciModel {
    private static readonly TRUNCATE_AFTER_THIS_MANY: number = 10;

    private static fibList(num: number): { numbers: number[], message: string } {
        const numbers: number[] = [];
        let a: number = 0;
        let b: number = 1;

        for (let i = 0; i < num; i++) {
            numbers.push(a);
            const temp: number = a;
            a = b;
            b = temp + b;
        }

        let message: string = "Fibonacci numbers generated successfully.";
        if (num > FibonacciModel.TRUNCATE_AFTER_THIS_MANY) {
            message = "Fibonacci numbers truncated due to limit.";
            numbers.splice(FibonacciModel.TRUNCATE_AFTER_THIS_MANY);
        }

        return { numbers, message };
    }
}
```