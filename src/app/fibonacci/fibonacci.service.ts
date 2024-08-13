package src.app.fibonacci;

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = '/fib/';

  constructor(private http: HttpClient) {}

  getFibonacci(n: string): Observable<any> {
    const num = Number(n);
    if (isNaN(num)) {
      return throwError('Input is not a number');
    }
    if (num < 0) {
      return throwError('Input must be a non-negative integer');
    }

    return this.http.get(`${this.apiUrl}${n}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('An error occurred while fetching the Fibonacci number');
  }
}