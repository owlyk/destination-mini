package src;

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = 'http://your-api-url/fibonacci';

  constructor(private http: HttpClient) {}

  getFibonacci(inputValue: number): Observable<any> {
    if (!this.isValidInput(inputValue)) {
      return throwError('Invalid input. Please enter a positive integer.');
    }

    const params = new HttpParams().set('number', inputValue.toString());
    return this.http.get<any>(this.apiUrl, { params }).pipe(
      catchError(err => throwError('Error fetching Fibonacci number: ' + err))
    );
  }

  private isValidInput(value: number): boolean {
    return Number.isInteger(value) && value >= 0;
  }
}