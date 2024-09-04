package app.services;

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = 'http://your-api-url/fibonacci';

  constructor(private http: HttpClient) {}

  calculateFibonacci(n: number): Observable<number[]> {
    if (n < 0) {
      return throwError('Input must be a non-negative integer.');
    }
    return this.http.get<number[]>(`${this.apiUrl}?n=${n}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('An error occurred while fetching Fibonacci numbers: ' + error.message);
  }
}