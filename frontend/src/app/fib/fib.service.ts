package app.fib;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibService {
  constructor(private http: HttpClient) {}

  getTitle(): Observable<string> {
    return this.http.get<{ title: string }>('/api/fib').pipe(map(response => response.title));
  }
}