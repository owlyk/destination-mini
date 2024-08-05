package frontend.src.utils;

export const validateInput = (input: number): boolean => {
    return Number.isInteger(input) && input >= 0;
};

export const calculateFibonacci = (n: number): number => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0;
    let b = 1;
    let temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
};

export const handleTruncation = (result: number): number => {
    return result > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : result;
};