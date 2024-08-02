import { Injectable } from '@angular/core';

@Injectable()
export class FibonacciUtils {
  
  generateFibonacciNumber(n: number): number {
    if (n <= 1) {
      return n;
    }
    
    let a = 0;
    let b = 1;
    let temp;
    
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    
    return b;
  }
  
  generateFibonacciSequence(count: number): number[] {
    const sequence = [];
    
    for (let i = 0; i < count; i++) {
      sequence.push(this.generateFibonacciNumber(i));
    }
    
    return sequence;
  }
  
}