package app.fibonacci;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {
  private apiUrl = '/api/fibonacci';

  constructor(private http: HttpClient) {}

  getFibonacciNumbers(inputValue: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}?number=${inputValue}`).pipe(
      map(response => response.slice(0, 10000))
    );
  }
}