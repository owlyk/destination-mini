import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciApiService {

  private baseUrl = 'http://api.example.com/fibonacci';

  constructor(private http: HttpClient) { }

  getFibonacciSequence(n: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/sequence/${n}`);
  }

  calculateFibonacciNumber(n: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/calculate/${n}`);
  }

}