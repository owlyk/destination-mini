package src.frontend.src.app.fibonacci;

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  testScript: string;
  userInput: number;
  fibonacciNumbers: number[];

  constructor(private http: HttpClient) {}

  fetchTestScript() {
    // Implement fetching test script from API
  }

  handleUserInput() {
    // Implement handling user input for different numbers of Fibonacci numbers
  }

  calculateFibonacci() {
    // Implement calculating Fibonacci numbers based on user input
  }

  handleInvalidInput() {
    // Implement error handling for invalid inputs
  }

  displayTestScript() {
    // Implement displaying test script with title, heading, instructions, and list of test inputs
  }
}