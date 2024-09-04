package app.fib;

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FibService {
  private apiUrl = `${environment.apiBaseUrl}/fib/`;

  constructor(private http: HttpClient) {}

  validateInput(inputValue: string): Observable<any> {
    if (!inputValue || isNaN(Number(inputValue))) {
      return of({ error: 'Invalid input: not a number' });
    }
    return this.http.get(`${this.apiUrl}${inputValue}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('An error occurred: ' + error.message);
  }
}