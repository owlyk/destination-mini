package src;

const FIB_LIMIT = 100;
const ERROR_MESSAGE = "Invalid input. Please provide a non-negative integer.";

export function calculateFibonacci(n: number): number | string {
    if (typeof n !== 'number' || isNaN(n)) {
        return ERROR_MESSAGE;
    }

    n = Math.floor(n);

    if (n < 0) {
        return ERROR_MESSAGE;
    }

    let a = 0, b = 1, fib = 0;

    for (let i = 0; i < n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return n === 0 ? 0 : fib;
}

export function handleRequest(req: any, res: any) {
    const n = req.params.n;

    const parsedN = parseFloat(n);
    const isScientific = n.includes('e') || n.includes('E');

    if (isScientific) {
        const intN = Math.floor(parsedN);
        if (intN < 0 || isNaN(intN)) {
            res.status(400).send(ERROR_MESSAGE);
        } else {
            res.send(calculateFibonacci(intN));
        }
    } else {
        const intN = parseInt(n, 10);
        if (isNaN(intN) || intN < 0) {
            res.status(400).send(ERROR_MESSAGE);
        } else {
            res.send(calculateFibonacci(intN));
        }
    }
}