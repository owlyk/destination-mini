package app.fibonacci;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = '/api/fib';

  constructor(private http: HttpClient) {}

  getFibonacci(input: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/${input}`);
  }
}