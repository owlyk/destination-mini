```typescript
import { HttpClient } from '@angular/common/http';

export class FibonacciService {
  constructor(private http: HttpClient) {}

  getTestScriptData() {
    return this.http.get('/fib/-9');
  }
}
```