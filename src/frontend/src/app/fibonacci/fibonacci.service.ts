```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  constructor(private http: HttpClient) { }

  getFibonacciNumbers(n: number) {
    return this.http.get<number[]>(`/api/fibonacci/${n}`);
  }
}
```