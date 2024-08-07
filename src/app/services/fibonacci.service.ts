package app.services;

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  constructor(private http: HttpClient) {}

  getFibonacciNumbers(num: number): Observable<any> {
    return this.http.get(`/api/fib/${num}`).pipe(
      catchError(error => throwError(error))
    );
  }
}