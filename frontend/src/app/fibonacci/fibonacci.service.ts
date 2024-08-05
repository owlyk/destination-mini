package app.fibonacci;

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = 'http://your-backend-api-url/fibonacci';

  constructor(private http: HttpClient) {}

  getFibonacci(argument: string): Observable<any> {
    const num = parseInt(argument, 10);
    if (isNaN(num) || num < 0) {
      return throwError('Invalid input. Please provide a positive integer.');
    }

    const params = new HttpParams().set('argument', argument);
    return this.http.get(this.apiUrl, { params }).pipe(
      catchError(error => {
        return throwError('Error occurred while fetching Fibonacci numbers.');
      })
    );
  }
}