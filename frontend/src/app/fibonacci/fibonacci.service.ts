package src.app.fibonacci;

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = 'myFib';

  constructor(private http: HttpClient) {}

  calculateFibonacci(argument: string): Observable<any> {
    const number = parseInt(argument, 10);
    if (isNaN(number) || number < 0) {
      return throwError('Input must be a positive integer.');
    }

    return this.http.post<any>(this.apiUrl, { number })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('An error occurred while processing your request.');
  }
}