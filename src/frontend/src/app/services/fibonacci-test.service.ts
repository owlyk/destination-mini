```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibonacciTestService {

  private baseUrl = 'http://backend-api-url/';

  constructor(private http: HttpClient) { }

  getTestInputs() {
    return this.http.get(`${this.baseUrl}test-inputs`);
  }

  getFibonacciNumber(n: number) {
    return this.http.get(`${this.baseUrl}fibonacci/${n}`);
  }

  getZeroFibonacciNumber() {
    return this.http.get(`${this.baseUrl}fibonacci/0`);
  }

  getOneFibonacciNumber() {
    return this.http.get(`${this.baseUrl}fibonacci/1`);
  }

  getTwoFibonacciNumber() {
    return this.http.get(`${this.baseUrl}fibonacci/2`);
  }

  getThreeFibonacciNumber() {
    return this.http.get(`${this.baseUrl}fibonacci/3`);
  }

  getFourFibonacciNumber() {
    return this.http.get(`${this.baseUrl}fibonacci/4`);
  }

  getFiveFibonacciNumber() {
    return this.http.get(`${this.baseUrl}fibonacci/5`);
  }

  getTenFibonacciNumber() {
    return this.http.get(`${this.baseUrl}fibonacci/10`);
  }

}
```