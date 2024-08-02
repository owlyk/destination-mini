package fib;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibService {

  constructor(private http: HttpClient) { }

  generateFibonacciNumber(n: number): Observable<number> {
    return this.http.get<number>(`/api/fibonacci/${n}`);
  }

  getFibonacciSequence(count: number): Observable<number[]> {
    return this.http.get<number[]>(`/api/fibonacci/sequence/${count}`);
  }

}