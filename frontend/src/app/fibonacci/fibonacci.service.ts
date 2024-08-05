package app.fibonacci;

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = 'http://your-backend-api-url/fibonacci';

  constructor(private http: HttpClient) {}

  getFibonacci(argument: string): Observable<any> {
    const params = new HttpParams().set('argument', argument);
    return this.http.get(this.apiUrl, { params });
  }
}