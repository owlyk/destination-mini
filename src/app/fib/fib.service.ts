package app.fib;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibService {
  constructor(private http: HttpClient) {}

  checkFibonacciInput(input: string): Observable<any> {
    return this.http.get(`/fib/${input}`);
  }
}