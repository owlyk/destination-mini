package app.services;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = '/api/fibonacci';

  constructor(private http: HttpClient) {}

  getFibonacciNumbers(num: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?num=${num}`);
  }
}