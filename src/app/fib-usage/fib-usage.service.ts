package src.app.fib-usage;

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibUsageService {
  private apiUrl = 'your-api-endpoint-here';

  constructor(private http: HttpClient) {}

  fetchUsageInstructions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usage-instructions`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('An error occurred: ' + error.message);
  }
}