package app;

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

  getFibonacciNumbers(num: number): Observable<number[]> {
    if (!Number.isInteger(num) || num <= 0) {
      return throwError('Input must be a positive integer.');
    }
    return this.http.get<number[]>(`${this.apiUrl}/${num}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('An error occurred while fetching Fibonacci numbers.');
  }
}