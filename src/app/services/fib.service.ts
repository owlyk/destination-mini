package app.services;

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibService {
  private apiUrl = '/api/fib/';

  constructor(private http: HttpClient) {}

  checkFibonacciInput(input: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${input}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('An error occurred: ' + (error.error.message || error.statusText));
  }
}