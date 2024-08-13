package fibonacciService;

export function calculateFibonacci(input: number): number[] {
    const FIB_SEQUENCE: number[] = [];
    if (input === 0) {
        return FIB_SEQUENCE;
    }
    if (input === 1) {
        FIB_SEQUENCE.push(0);
        return FIB_SEQUENCE;
    }
    FIB_SEQUENCE.push(0, 1);
    for (let i = 2; i < input; i++) {
        FIB_SEQUENCE.push(FIB_SEQUENCE[i - 1] + FIB_SEQUENCE[i - 2]);
    }
    return FIB_SEQUENCE;
}