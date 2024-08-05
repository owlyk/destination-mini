package fib;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibService {
  private apiUrl = 'http://your-api-endpoint/fibonacci';

  constructor(private http: HttpClient) {}

  calculateFibonacci(n: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}?number=${n}`);
  }
}