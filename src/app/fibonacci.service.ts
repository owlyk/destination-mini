package app;

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

  getFibonacci(input: string): Observable<any> {
    if (isNaN(Number(input)) || Number(input) < 0) {
      return throwError('Input must be a non-negative number.');
    }
    return this.http.get(`${this.apiUrl}${input}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('An error occurred while fetching Fibonacci data.');
  }
}