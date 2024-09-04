package fibonacci;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  constructor(private http: HttpClient) {}

  checkFibonacci(inputValue: string): Observable<any> {
    return this.http.get(`/fib/${inputValue}`);
  }
}