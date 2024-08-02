package app.services;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  private readonly API_URL = 'http://backend/api';

  private readonly TRUNCATE_AFTER_THIS_MANY = 10;

  constructor(private http: HttpClient) { }

  validateInput(input: number): boolean {
    return Number.isInteger(input) && input > 0;
  }

  generateFibonacciNumbers(num: number): Promise<number[]> {
    return this.http.get<number[]>(`${this.API_URL}/fibonacci/${num}`).toPromise();
  }

  truncateFibonacciNumbers(fibList: number[]): number[] {
    return fibList.slice(0, this.TRUNCATE_AFTER_THIS_MANY);
  }

  fibList(num: number): Promise<{ message: string, numbers: number[] }> {
    return this.generateFibonacciNumbers(num).then((fibList) => {
      const truncatedList = this.truncateFibonacciNumbers(fibList);
      return { message: `Fibonacci numbers up to ${this.TRUNCATE_AFTER_THIS_MANY} terms:`, numbers: truncatedList };
    });
  }

}