import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  validateInput(argument: string): boolean {
    // Implementation for input validation
    return !isNaN(parseInt(argument));
  }

  generateFibonacciNumbers(argument: string): Observable<number[]> {
    // Implementation for generating Fibonacci numbers
    return new Observable<number[]>(observer => {
      // Generate Fibonacci numbers logic
    });
  }

  truncateFibonacciNumbers(numbers: number[]): number[] {
    // Implementation for truncating Fibonacci numbers
    return numbers.map(num => Math.trunc(num));
  }

  callFibonacciEndpoint(argument: string): Observable<number[]> {
    // Implementation for calling backend API endpoint
    return new Observable<number[]>(observer => {
      // Call backend API endpoint logic
    });
  }
}