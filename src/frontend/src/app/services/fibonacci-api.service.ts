import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibonacciApiService {

  private baseUrl = 'http://example.com/api/fibonacci';

  constructor(private http: HttpClient) { }

  validateInput(input: number) {
    return this.http.post(`${this.baseUrl}/validate`, { input });
  }

  generateFibonacciNumber(n: number) {
    return this.http.get(`${this.baseUrl}/generate/${n}`);
  }

}