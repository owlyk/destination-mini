import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibonacciApiService {

  private readonly TRUNCATE_AFTER_THIS_MANY: number = 10;

  constructor() { }

  validateInput(num: number): boolean {
    return num >= 0 && Number.isInteger(num);
  }

  generateFibonacciList(num: number): number[] {
    let fibList: number[] = [];
    let a: number = 0;
    let b: number = 1;

    for (let i = 0; i < num; i++) {
      fibList.push(a);
      let temp: number = a;
      a = b;
      b = temp + b;
    }

    if (fibList.length > this.TRUNCATE_AFTER_THIS_MANY) {
      fibList = fibList.slice(0, this.TRUNCATE_AFTER_THIS_MANY);
    }

    return fibList;
  }

  fibList(num: number): string {
    if (!this.validateInput(num)) {
      return 'Invalid input. Please enter a non-negative integer.';
    }

    const fibList: number[] = this.generateFibonacciList(num);

    return `Fibonacci sequence for ${num}: ${fibList.join(', ')}`;
  }
}