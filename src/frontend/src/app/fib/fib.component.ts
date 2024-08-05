package fib;

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const TRUNCATE_AFTER_THIS_MANY = 10;

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent {
  userInput: number;
  fibonacciNumbers: number[];
  message: string;

  constructor(private http: HttpClient) {}

  validateInput(): boolean {
    // Implement input validation logic here
    return true;
  }

  validateInputAPI(): void {
    // Implement API call for input validation
  }

  generateFibonacciNumbers(): void {
    // Implement logic to generate Fibonacci numbers using HttpClient
  }

  truncateFibonacciNumbers(): void {
    // Implement truncation logic based on TRUNCATE_AFTER_THIS_MANY constant
  }

  renderOutputTemplate(): void {
    // Implement rendering output template with Fibonacci numbers and messages
  }
}