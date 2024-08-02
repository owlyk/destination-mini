import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  validateInput(argument: string): boolean {
    // Implementation here
    return true;
  }

  generateFibonacciNumbers(argument: string): Observable<number[]> {
    // Implementation here
    return new Observable<number[]>();
  }

  truncateFibonacciNumbers(numbers: number[]): number[] {
    // Implementation here
    return [];
  }

  callFibonacciEndpoint(argument: string): Observable<number[]> {
    // Implementation here
    return new Observable<number[]>();
  }

}