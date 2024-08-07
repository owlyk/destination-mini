package app.fibonacci;

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  constructor(private http: HttpClient) {}

  getFibonacci(num: number): Observable<any> {
    if (!this.isValidInput(num)) {
      return throwError('Invalid input. Please enter a positive integer.');
    }
    return this.http.get(`/api/fib/${num}`).pipe(
      catchError(this.handleError)
    );
  }

  private isValidInput(num: number): boolean {
    return Number.isInteger(num) && num >= 0;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError('An error occurred while fetching the Fibonacci series.');
  }
}