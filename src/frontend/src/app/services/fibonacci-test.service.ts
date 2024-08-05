import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibonacciTestService {

  private baseUrl = 'http://localhost:3000/api/fibonacci';

  constructor(private http: HttpClient) { }

  getTestInputs() {
    return this.http.get(`${this.baseUrl}/test-inputs`);
  }

  getFibonacciNumber(n: number) {
    return this.http.get(`${this.baseUrl}/calculate/${n}`);
  }

}