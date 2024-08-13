package services;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = '/fib/';

  constructor(private http: HttpClient) {}

  fetchFibonacci(num: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${num}`);
  }
}