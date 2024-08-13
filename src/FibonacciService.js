package src;

export function generateFibonacci(num) {
    const fibonacciList = [];
    if (num <= 0) {
        return { list: fibonacciList, message: "No Fibonacci numbers can be generated." };
    }
    if (num === 1) {
        fibonacciList.push(0);
    } else if (num === 2) {
        fibonacciList.push(0, 1);
    } else {
        let a = 0, b = 1;
        for (let i = 2; i < num; i++) {
            const next = a + b;
            fibonacciList.push(next);
            a = b;
            b = next;
        }
        fibonacciList.unshift(0, 1);
    }
    return { list: fibonacciList, message: "Fibonacci numbers generated successfully." };
}