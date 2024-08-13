package app.services;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  constructor(private http: HttpClient) {}

  getFibonacci(n: number): Observable<any> {
    return this.http.get(`/fib/${n}`).pipe(
      catchError(error => throwError(error))
    );
  }
}