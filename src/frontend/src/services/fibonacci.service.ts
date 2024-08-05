```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  constructor(private http: HttpClient) { }

  validateInput(input: number): boolean {
    return input >= 0 && Number.isInteger(input);
  }

  generateFibonacciList(input: number): number[] {
    let fibonacciList: number[] = [];
    let a = 0, b = 1, temp;
    for (let i = 0; i < input; i++) {
      fibonacciList.push(a);
      temp = a;
      a = b;
      b = temp + b;
    }
    return fibonacciList;
  }

  truncateFibonacciList(fibonacciList: number[], maxLength: number): number[] {
    return fibonacciList.slice(0, maxLength);
  }

  calculateFibonacci(input: number): Promise<number[]> {
    return this.http.get<number[]>(`/api/fibonacci/${input}`).toPromise();
  }
}
```