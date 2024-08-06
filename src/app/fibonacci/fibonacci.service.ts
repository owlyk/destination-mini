package app.fibonacci;

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = '/api/fibonacci';

  constructor(private http: HttpClient) {}

  calculateFibonacci(argument: string): Observable<any> {
    const number = parseInt(argument, 10);
    if (isNaN(number) || number < 0) {
      return throwError('Invalid input. Please enter a positive integer.');
    }
    return this.http.post(this.apiUrl, { number }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('An error occurred while processing your request.');
  }
}