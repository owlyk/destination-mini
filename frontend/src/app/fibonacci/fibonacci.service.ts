package app.fibonacci;

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = '/fibonacci';

  constructor(private http: HttpClient) {}

  calculateFibonacci(argument: number) {
    if (!this.isPositiveInteger(argument)) {
      return throwError('Input must be a positive integer');
    }
    return this.http.post(this.apiUrl, { argument: argument })
      .pipe(
        catchError(this.handleError)
      );
  }

  private isPositiveInteger(value: number): boolean {
    return Number.isInteger(value) && value > 0;
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('An error occurred: ' + (error.error.message || error.statusText));
  }
}