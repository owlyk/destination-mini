package app;

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FibonacciService } from './fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
})
export class FibonacciComponent {
  fibonacciForm: FormGroup;
  result: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private fibonacciService: FibonacciService) {
    this.fibonacciForm = this.fb.group({
      input: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const inputValue = this.fibonacciForm.value.input;
    this.fibonacciService.calculateFibonacci(inputValue).subscribe(
      (response) => {
        this.result = response.result;
        this.errorMessage = null;
      },
      (error) => {
        this.errorMessage = error.message;
        this.result = null;
      }
    );
  }
}