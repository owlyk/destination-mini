package app.fibonacci;

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const FIB_LIMIT = 2000000;

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = 'https://api.example.com/fibonacci';

  constructor(private http: HttpClient) {}

  getFibonacciSequence(inputNumber: number): Observable<number[]> {
    if (!this.isValidInput(inputNumber)) {
      return throwError('Input must be a positive integer and less than or equal to ' + FIB_LIMIT);
    }

    const params = new HttpParams().set('number', inputNumber.toString());
    return this.http.get<number[]>(this.apiUrl, { params }).pipe(
      catchError(error => throwError('Error fetching Fibonacci sequence: ' + error))
    );
  }

  private isValidInput(inputNumber: number): boolean {
    return Number.isInteger(inputNumber) && inputNumber > 0 && inputNumber <= FIB_LIMIT;
  }
}