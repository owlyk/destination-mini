```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  private baseUrl = 'http://backend-api.com';

  constructor(private http: HttpClient) { }

  getFibonacciNumber(n: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/fibonacci/${n}`);
  }

  getFibonacciSequence(count: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/fibonacci/sequence/${count}`);
  }

}
```