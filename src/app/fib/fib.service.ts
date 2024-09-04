package app.fib;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibService {
  constructor(private http: HttpClient) {}

  getFibonacci(input: string): Observable<any> {
    return this.http.get(`/fib/${input}`).pipe(
      catchError(error => {
        console.error('Error occurred while fetching Fibonacci:', error);
        return throwError(error);
      })
    );
  }
}