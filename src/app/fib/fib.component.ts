package app.fib;

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FibService } from './fib.service';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent {
  fibForm: FormGroup;
  errorMessage: string;
  fibonacciResult: number;

  constructor(private fb: FormBuilder, private fibService: FibService) {
    this.fibForm = this.fb.group({
      input: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  validateInput() {
    if (this.fibForm.valid) {
      const userInput = this.fibForm.value.input;
      if (userInput === 'foo') {
        this.errorMessage = 'Please enter a valid number, not "foo".';
        return;
      }
      this.fibService.validateInput(userInput).subscribe(
        response => {
          if (response && response.errorCode) {
            this.errorMessage = response.errorMessage;
          } else if (!isNaN(userInput)) {
            this.fibonacciResult = this.calculateFibonacci(userInput);
            this.errorMessage = '';
          } else {
            this.errorMessage = 'Invalid input. Please enter a valid number.';
          }
        },
        error => {
          this.errorMessage = 'An error occurred while validating input. Please try again.';
        }
      );
    } else {
      this.errorMessage = 'Invalid input. Please enter a valid number.';
    }
  }

  calculateFibonacci(n: number): number {
    const num = Number(n);
    if (num <= 1) return num;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= num; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

  resetForm() {
    this.fibForm.reset();
    this.errorMessage = '';
    this.fibonacciResult = null;
  }
}