package fibonacci;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = '/fib/';

  constructor(private http: HttpClient) {}

  getFibonacci(num: number): Observable<number[]> {
    if (num <= 0 || !Number.isInteger(num)) {
      throw new Error('Input must be a positive integer');
    }
    return this.http.get<number[]>(`${this.apiUrl}${num}`);
  }
}