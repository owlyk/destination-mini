```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibService {

  constructor(private http: HttpClient) { }

  getFibonacciNumbers(n: number) {
    return this.http.get(`/api/fibonacci/${n}`);
  }

  private generateFibonacciSequence(n: number): number[] {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
  }

}
```