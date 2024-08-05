package src;

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = '/fib';

  constructor(private http: HttpClient) {}

  getFibonacci(inputValue: number): Observable<any> {
    if (!this.isValidInput(inputValue)) {
      return throwError('Invalid input. Please provide a positive integer.');
    }

    const url = `${this.apiUrl}/${inputValue}`;
    return this.http.get(url).pipe(
      catchError(err => throwError('Error fetching Fibonacci number: ' + err))
    );
  }

  private isValidInput(value: number): boolean {
    return Number.isInteger(value) && value >= 0;
  }
}