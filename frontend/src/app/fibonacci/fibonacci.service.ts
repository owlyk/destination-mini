package frontend.src.app.fibonacci;

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  calculateFibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    return fib[n];
  }

}