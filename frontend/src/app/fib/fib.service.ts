package app.fib;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibService {
  private apiUrl = 'http://your-api-url.com/fibonacci';

  constructor(private http: HttpClient) {}

  calculateFibonacci(number: number): Observable<number> {
    return this.http.post<number>(this.apiUrl, { number });
  }
}