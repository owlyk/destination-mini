package frontend;

export interface FibonacciInput {
    number: number;
}

export interface FibonacciSeries {
    series: number[];
}

export interface FibonacciError {
    message: string;
}