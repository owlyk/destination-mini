package app.fibonacci;

import { Component } from '@angular/core';
import { FibonacciService } from '../services/fibonacci.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  inputValue: number;
  fibonacciResult: number;
  errorMessage: string;
  fibonacciForm: FormGroup;

  constructor(private fibonacciService: FibonacciService, private fb: FormBuilder) {
    this.fibonacciForm = this.fb.group({
      inputValue: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  calculateFibonacci() {
    if (this.fibonacciForm.valid) {
      this.fibonacciService.getFibonacci(this.inputValue).pipe(
        catchError(err => {
          this.errorMessage = 'An error occurred while calculating Fibonacci.';
          return of(null);
        })
      ).subscribe(result => {
        if (result !== null) {
          this.fibonacciResult = result;
          this.errorMessage = '';
        }
      });
    } else {
      this.handleValidationErrors();
    }
  }

  handleValidationErrors() {
    if (this.inputValue < 0) {
      this.errorMessage = 'Input must be a non-negative number.';
    } else if (isNaN(this.inputValue)) {
      this.errorMessage = 'Input must be a numeric value.';
    } else {
      this.errorMessage = 'Invalid input.';
    }
  }

  reset() {
    this.inputValue = null;
    this.fibonacciResult = null;
    this.errorMessage = '';
    this.fibonacciForm.reset();
  }
}