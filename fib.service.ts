import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibService {

  constructor(private http: HttpClient) { }

  validateInput(input: number) {
    return this.http.post('/api/validateInput', { input });
  }

  generateFibonacciNumber(n: number) {
    return this.http.get(`/api/generateFibonacciNumber/${n}`);
  }

  renderOutput(output: string) {
    return this.http.post('/api/renderOutput', { output });
  }
}