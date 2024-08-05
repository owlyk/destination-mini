package app;

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  constructor(private http: HttpClient) {}

  getFibonacci(num: number): Observable<any> {
    if (!Number.isInteger(num) || num < 0) {
      return throwError('Input must be a positive integer.');
    }
    const url = `/fib/${num}`;
    return this.http.get(url).pipe(
      catchError(err => throwError('Error fetching Fibonacci sequence: ' + err))
    );
  }
}