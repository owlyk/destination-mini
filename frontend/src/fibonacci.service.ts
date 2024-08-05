package src;

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const API_URL = 'https://api.example.com/fibonacci';
const input_value = 'input_value';
const fibonacci_number = 'fibonacci_number';
const error_message = 'error_message';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  constructor(private http: HttpClient) {}

  getFibonacci(inputValue: number): Observable<any> {
    if (!this.isValidInput(inputValue)) {
      return throwError({ [error_message]: 'Invalid input. Please provide a positive integer.' });
    }

    const params = new HttpParams().set(input_value, inputValue.toString());
    return this.http.get(API_URL, { params }).pipe(
      map(response => ({
        [input_value]: inputValue,
        [fibonacci_number]: response[fibonacci_number]
      })),
      catchError(err => throwError({ [error_message]: 'Error fetching Fibonacci number.' }))
    );
  }

  private isValidInput(value: number): boolean {
    return Number.isInteger(value) && value >= 0;
  }
}