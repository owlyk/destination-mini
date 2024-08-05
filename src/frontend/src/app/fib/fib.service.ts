```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibService {

  private readonly API_URL = '/api/fib/';

  constructor(private http: HttpClient) { }

  validateInput(input: number): Promise<boolean> {
    return this.http.post<boolean>(this.API_URL + 'validate', { input }).toPromise();
  }

  generateFibonacciNumbers(input: number): Promise<number[]> {
    return this.http.get<number[]>(this.API_URL + 'generate/' + input).toPromise();
  }

  truncateFibonacciNumbers(numbers: number[]): number[] {
    if (numbers.length > TRUNCATE_AFTER_THIS_MANY) {
      return numbers.slice(0, TRUNCATE_AFTER_THIS_MANY);
    }
    return numbers;
  }
}

const TRUNCATE_AFTER_THIS_MANY = 10;
```