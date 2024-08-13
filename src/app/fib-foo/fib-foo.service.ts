package src.app.fib-foo;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibFooService {
  constructor(private http: HttpClient) {}

  validateInput(inputValue: string): Observable<any> {
    if (isNaN(Number(inputValue))) {
      console.error('Invalid input:', inputValue);
      return of({ error: 'Invalid input' });
    }
    return this.http.get(`/api/fib/foo?input=${inputValue}`).pipe(
      catchError(error => {
        console.error('API call error:', error);
        return of({ error: 'API call failed' });
      })
    );
  }
}