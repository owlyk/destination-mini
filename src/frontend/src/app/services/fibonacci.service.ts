package fibonacci;

import * as promptSync from 'prompt-sync';

export class FibonacciService {
    generateFibonacciSeries(terms: number): number[] {
        const prompt = promptSync();
        const numTerms = prompt('Enter the number of terms in the Fibonacci series: ');

        let series: number[] = [];
        let firstTerm = 0;
        let secondTerm = 1;

        for (let i = 1; i <= numTerms; i++) {
            series.push(firstTerm);
            const nextTerm = firstTerm + secondTerm;
            firstTerm = secondTerm;
            secondTerm = nextTerm;
        }

        return series;
    }
}