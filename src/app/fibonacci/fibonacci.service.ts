package app.fibonacci;

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = 'https://api.example.com/fibonacci';

  constructor(private http: HttpClient) {}

  getFibonacci(input: number): Observable<any> {
    const url = `${this.apiUrl}/${input}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('An error occurred: ' + (error.error.message || error.statusText));
  }
}