package src;

export function fibonacci(n: number): number {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return a;
}

export function validateInput(input: string): { isValid: boolean, value?: number, errorMessage?: string } {
    const parsed = Number(input);
    if (isNaN(parsed)) {
        return { isValid: false, errorMessage: "Input must be a valid number." };
    }
    if (parsed < 0) {
        return { isValid: false, errorMessage: "Input must be a non-negative integer." };
    }
    return { isValid: true, value: Math.floor(parsed) };
}