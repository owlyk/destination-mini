package app;

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fibonacciForm: FormGroup;
  result: number | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.fibonacciForm = this.fb.group({
      number: ['', [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*$")]]
    });
  }

  calculateFibonacci() {
    this.result = null;
    this.errorMessage = null;

    if (this.fibonacciForm.valid) {
      const number = this.fibonacciForm.value.number;
      this.result = this.fibonacci(number);
    } else {
      this.errorMessage = this.getErrorMessage();
    }
  }

  fibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  getErrorMessage(): string {
    if (this.fibonacciForm.get('number')?.hasError('required')) {
      return 'Input is required.';
    }
    if (this.fibonacciForm.get('number')?.hasError('min')) {
      return 'Input must be a non-negative integer.';
    }
    if (this.fibonacciForm.get('number')?.hasError('pattern')) {
      return 'Input must be a valid integer.';
    }
    return 'Invalid input.';
  }

  isResponsive(): boolean {
    return window.innerWidth > 768;
  }
}