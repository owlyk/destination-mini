import { Injectable } from '@angular/core';

@Injectable()
export class FibonacciUtils {

  validateInput(input: number): boolean {
    return input >= 0 && Number.isInteger(input);
  }

  generateSequence(n: number): number[] {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
  }

  calculateFibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    let a = 0;
    let b = 1;
    let temp = 0;
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

}