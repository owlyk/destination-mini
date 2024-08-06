```typescript
import { HttpClient } from '@angular/common/http';

export class FibonacciService {
  constructor(private http: HttpClient) {}

  getFibonacciNumbers(n: number) {
    return this.http.get<number[]>(`/api/fibonacci/${n}`);
  }
}
```