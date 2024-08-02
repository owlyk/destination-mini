package fibonacci.utils;

export const isValidNumber = (num: number): boolean => {
    return num >= 0 && Number.isInteger(num);
};

export const calculateFibonacci = (n: number): number => {
    if (n <= 1) {
        return n;
    }
    
    let prev = 0;
    let curr = 1;
    let result = 0;
    
    for (let i = 2; i <= n; i++) {
        result = prev + curr;
        prev = curr;
        curr = result;
    }
    
    return result;
};