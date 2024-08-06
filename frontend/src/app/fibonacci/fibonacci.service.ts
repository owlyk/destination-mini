package app.fibonacci;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private baseUrl: string = 'http://your-backend-api-url';

  constructor(private http: HttpClient) {}

  getFibonacci(num: string): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/fib/${num}`);
  }
}