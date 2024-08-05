import { Injectable } from '@angular/core';

@Injectable()
export class FibonacciUtils {

  validateInput(n: number): boolean {
    return Number.isInteger(n) && n >= 0;
  }

  generateFibonacciSequence(n: number): number[] {
    const sequence: number[] = [];
    if (n === 0) {
      return sequence;
    }
    sequence.push(0);
    if (n === 1) {
      return sequence;
    }
    sequence.push(1);
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }

  handleError(error: any): void {
    console.error('An error occurred:', error);
  }

}