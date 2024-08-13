package backend;

export function calculateFibonacci(n: number): number[] {
    const FIB_SEQUENCE: number[] = [];
    if (n === 0) return FIB_SEQUENCE;
    if (n === 1) return [0];
    
    FIB_SEQUENCE.push(0, 1);
    for (let i = 2; i < n; i++) {
        FIB_SEQUENCE.push(FIB_SEQUENCE[i - 1] + FIB_SEQUENCE[i - 2]);
    }
    return FIB_SEQUENCE;
}