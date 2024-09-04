package src.app.components.fibonacci-calculator;

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fibonacci-calculator',
  templateUrl: './fibonacci-calculator.component.html',
  styleUrls: ['./fibonacci-calculator.component.css']
})
export class FibonacciCalculatorComponent {
  inputNumber: number;
  fibonacciNumbers: number[] = [];
  errorMessage: string = '';
  form: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      inputNumber: ['', [Validators.required, Validators.min(0), Validators.max(10000)]]
    });
  }

  calculateFibonacci() {
    this.errorMessage = '';
    if (this.form.invalid) {
      if (this.form.controls.inputNumber.errors?.min) {
        this.errorMessage = 'Please enter a non-negative integer.';
      } else if (this.form.controls.inputNumber.errors?.max) {
        this.errorMessage = 'Please enter a number not exceeding 10,000.';
      } else {
        this.errorMessage = 'Please enter a valid number.';
      }
      return;
    }
    this.inputNumber = this.form.value.inputNumber;
    if (this.inputNumber > 10000) {
      this.errorMessage = 'Please enter a number not exceeding 10,000.';
      return;
    }
    this.http.post<number[]>(`/api/fibonacci`, { number: this.inputNumber })
      .subscribe(
        (data) => {
          this.fibonacciNumbers = data;
        },
        (error) => {
          this.errorMessage = error.error?.message || 'Error calculating Fibonacci numbers. Please try again.';
        }
      );
  }
}