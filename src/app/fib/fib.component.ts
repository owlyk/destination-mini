package app.fib;

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent {
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  checkFibonacciInput() {
    this.http.get('/fib/foo').subscribe({
      next: (response) => {
        this.handleValidResponse(response);
      },
      error: (error) => {
        if (error.status === 400) {
          this.errorMessage = 'Bad Request: Please check your input.';
        } else if (error.status === 404) {
          this.errorMessage = 'Not Found: The requested resource could not be found.';
        } else {
          this.errorMessage = 'An unexpected error occurred: ' + error.message;
        }
      }
    });
  }

  handleValidResponse(response: any) {
    // Handle valid response
  }
} 

// In the corresponding HTML template (fib.component.html), bind the method to a button click
// <button (click)="checkFibonacciInput()">Check Fibonacci</button>