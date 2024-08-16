package src;

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  constructor(private http: HttpClient) {}

  calculateFibonacci(input: string): Observable<any> {
    const url = `/api/fib/${input}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      return throwError('An error occurred: ' + error.error.message);
    } else {
      if (error.status === 400) {
        return throwError('Invalid input. Please enter a non-negative integer.');
      }
      return throwError('Server returned an error: ' + error.message);
    }
  }
}