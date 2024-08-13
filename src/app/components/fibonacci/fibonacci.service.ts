package app.components.fibonacci;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = '/fib';

  constructor(private http: HttpClient) {}

  getFibonacci(num: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${num}`);
  }
}