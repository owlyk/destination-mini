package app.models;

export interface FibonacciNumber {
    value: number;
}

export interface FibonacciSequence {
    numbers: FibonacciNumber[];
}