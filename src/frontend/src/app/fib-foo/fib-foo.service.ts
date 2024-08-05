```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibFooService {

  constructor(private http: HttpClient) { }

  getTestInputs() {
    return this.http.get('/api/fib/foo/test-inputs');
  }

  calculateFibonacci(input: number) {
    return this.http.post('/api/fib/foo/calculate', { input });
  }
}
```