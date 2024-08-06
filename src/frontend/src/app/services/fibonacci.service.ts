```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  constructor(private http: HttpClient) { }

  getFibonacciNumbers(number: number): Promise<number[]> {
    return this.http.get<number[]>(`/fib/${number}`).toPromise();
  }
}
```