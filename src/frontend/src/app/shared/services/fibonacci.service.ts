package app.shared.services;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  constructor(private http: HttpClient) { }

  generateFibonacciSeries(terms: number): Observable<number[]> {
    return this.http.get<number[]>(`/api/fibonacci/series/${terms}`);
  }

  truncateFibonacciNumbers(number: number): Observable<number> {
    return this.http.get<number>(`/api/fibonacci/truncate/${number}`);
  }

}