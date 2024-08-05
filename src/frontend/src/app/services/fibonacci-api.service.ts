import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FibonacciApiService {

  private baseUrl = 'http://api.example.com/fibonacci';

  constructor(private http: HttpClient) { }

  getFibonacciNumber(index: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/calculate/${index}`);
  }

  getFibonacciSequence(length: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/sequence/${length}`);
  }

}