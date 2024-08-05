package app.services;

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  calculateFibonacci(input: any): number[] {
    if (isNaN(input) || input === null || input === undefined || input === '') {
      throw new Error('Invalid input. Please provide a valid number.');
    }

    const n = parseInt(input, 10);

    if (n < 0) {
      throw new Error('Input must be a positive number.');
    }

    if (!Number.isInteger(n)) {
      throw new Error('Input must be a whole number.');
    }

    const fibonacciSequence = [0, 1];
    for (let i = 2; i < n; i++) {
      fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    }

    return fibonacciSequence;
  }

}