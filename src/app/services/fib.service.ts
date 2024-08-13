package app.services;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibService {
  private apiUrl = '/api/fib/foo';

  constructor(private http: HttpClient) {}

  checkInput(input: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?input=${input}`);
  }
}