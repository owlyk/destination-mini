package app.services;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  constructor(private http: HttpClient) { }

  getFibonacciSeries(num: number): Observable<number[]> {
    return this.http.get<number[]>(`/api/fibonacci/${num}`).pipe(
      catchError(error => {
        let errorMessage = 'An error occurred while fetching Fibonacci series.';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}