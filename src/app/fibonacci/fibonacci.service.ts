package app.fibonacci;

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = '/api/fib/';

  constructor(private http: HttpClient) {}

  getFibonacci(input: string): Observable<any> {
    const url = `${this.apiUrl}${input}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if (error.status === 400) {
        if (error.error.message.includes('negative')) {
          errorMessage = 'Please enter a non-negative number.';
        } else if (error.error.message.includes('non-numeric')) {
          errorMessage = 'Please enter a valid numeric value.';
        } else if (error.error.message.includes('scientific notation')) {
          errorMessage = 'Scientific notation is not allowed. Please enter a whole number.';
        }
      }
    }
    return throwError(() => new Error(errorMessage));
  }
}