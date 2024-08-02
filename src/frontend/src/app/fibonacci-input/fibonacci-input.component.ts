import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci-input',
  templateUrl: './fibonacci-input.component.html',
  styleUrls: ['./fibonacci-input.component.css']
})
export class FibonacciInputComponent {
  userInput: number;
  errorMessage: string;

  calculateFibonacci() {
    if (this.userInput === null || this.userInput === undefined || isNaN(this.userInput) || this.userInput < 0) {
      this.errorMessage = 'Invalid input. Please enter a non-negative number.';
    } else {
      // Send user input to service for Fibonacci calculation
    }
  }
}