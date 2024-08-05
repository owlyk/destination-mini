```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibService {

  private baseUrl = 'http://backend-api-url/';

  constructor(private http: HttpClient) { }

  getTestInputs() {
    return this.http.get<any[]>(this.baseUrl + 'test-inputs');
  }

  getFibonacciSequence(value: number) {
    const url = `${this.baseUrl}fibonacci/${value}`;
    return this.http.get<number[]>(url);
  }
}
```