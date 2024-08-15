package app.services;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = '/api/myFib/';

  constructor(private http: HttpClient) {}

  getFibonacciNumbers(count: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${count}`).pipe(
      catchError(error => {
        return throwError('Error fetching Fibonacci numbers: ' + error.message);
      })
    );
  }
}