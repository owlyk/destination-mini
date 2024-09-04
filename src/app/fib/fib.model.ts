package fib;

export interface FibonacciResponse {
    errorMessage?: string;
    statusCode: number;
    data: number[];
}