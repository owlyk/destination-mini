package src;

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html'
})
export class FibonacciComponent {
  fibonacciForm: FormGroup;
  result: number | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private fibonacciService: FibonacciService) {
    this.fibonacciForm = this.fb.group({
      number: ['', [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*$")]]
    });
  }

  onSubmit() {
    if (this.fibonacciForm.valid) {
      const number = this.fibonacciForm.value.number;
      this.fibonacciService.calculateFibonacci(number).subscribe(
        response => {
          this.result = response.result;
          this.errorMessage = null;
        },
        error => {
          this.errorMessage = error.message;
          this.result = null;
        }
      );
    } else {
      this.errorMessage = 'Input must be a non-negative integer.';
      this.result = null;
    }
  }
}