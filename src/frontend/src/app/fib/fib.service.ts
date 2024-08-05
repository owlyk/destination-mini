```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibService {

  private baseUrl = 'http://api.example.com';

  constructor(private http: HttpClient) { }

  getTestInputs() {
    return this.http.get(`${this.baseUrl}/test-inputs`);
  }

  calculateFibonacci(input: number) {
    return this.http.get(`${this.baseUrl}/fibonacci/${input}`);
  }
}
```