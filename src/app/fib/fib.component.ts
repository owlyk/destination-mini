package app.fib;

import { Component } from '@angular/core';
import { FibonacciService } from '../services/fibonacci.service';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent {
  userInput: number = null;
  errorMessage: string = '';

  constructor(private fibonacciService: FibonacciService) {}

  onSubmit() {
    if (this.isValidInput(this.userInput)) {
      this.fibonacciService.sendInput(this.userInput).subscribe(
        response => {
          this.errorMessage = '';
        },
        error => {
          this.errorMessage = 'An error occurred while processing your request.';
          console.error('Service error:', error);
        }
      );
    } else {
      this.errorMessage = 'Invalid input. Please enter a non-negative number.';
      console.error('Invalid input:', this.userInput);
    }
  }

  private isValidInput(input: number): boolean {
    return typeof input === 'number' && !isNaN(input) && input >= 0;
  }
}