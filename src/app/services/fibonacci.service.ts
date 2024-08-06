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

  getFibonacciNumbers(n: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}?n=${n}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('An error occurred while fetching Fibonacci numbers: ' + error.message);
  }
}