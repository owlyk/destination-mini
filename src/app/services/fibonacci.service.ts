package app.services;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = '/myFib';

  constructor(private http: HttpClient) {}

  calculateFibonacci(input: number): Observable<any> {
    return this.http.post(this.apiUrl, { number: input });
  }
}