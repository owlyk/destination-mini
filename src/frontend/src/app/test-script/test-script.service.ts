```typescript
package test-script;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestScriptService {
  private cache: Map<string, any> = new Map();

  constructor(private http: HttpClient) { }

  fetchTestInputs(): Observable<any> {
    const url = 'http://api.example.com/test-inputs';
    if (this.cache.has(url)) {
      return of(this.cache.get(url));
    } else {
      return this.http.get(url).pipe(
        map((response: any) => {
          this.cache.set(url, response);
          return response;
        }),
        catchError((error: any) => {
          console.error('Error fetching test inputs:', error);
          return of([]);
        })
      );
    }
  }
}
```