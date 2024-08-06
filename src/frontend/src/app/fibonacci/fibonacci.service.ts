```typescript
package src.frontend.src.app.fibonacci.fibonacci.service;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  constructor(private http: HttpClient) { }

  calculateFibonacci(input: number): Observable<number[]> {
    if (input < 0) {
      throw new Error('Input must be a non-negative number');
    }
    return this.http.get<number[]>(`/api/fibonacci/${input}`);
  }

  getFibonacciNumber(input: number): Observable<number> {
    if (input < 0) {
      throw new Error('Input must be a non-negative number');
    }
    return this.http.get<number>(`/api/fibonacci/${input}`);
  }

  getFibonacciSequence(count: number): Observable<number[]> {
    if (count < 0) {
      throw new Error('Count must be a non-negative number');
    }
    return this.http.get<number[]>(`/api/fibonacci/sequence/${count}`);
  }

}
```