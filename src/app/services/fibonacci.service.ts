package app.services;

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = '/myFib';

  constructor(private http: HttpClient) {}

  calculateFibonacci(num: number): Observable<number[]> {
    return this.http.post<number[]>(this.apiUrl, { number: num }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('An error occurred: ' + error.message);
  }
}