package app.components.fibonacci-calculator;

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

const TRUNCATE_AFTER_THIS_MANY = 10000;

@Component({
  selector: 'app-fibonacci-calculator',
  templateUrl: './fibonacci-calculator.component.html',
  styleUrls: ['./fibonacci-calculator.component.css']
})
export class FibonacciCalculatorComponent implements OnInit {
  fibonacciForm: FormGroup;
  fibonacciNumbers: number[] = [];
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.fibonacciForm = this.fb.group({
      inputNumber: ['', [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*$")]]
    });
  }

  ngOnInit(): void {}

  calculateFibonacci(): void {
    this.errorMessage = '';
    if (this.fibonacciForm.invalid) {
      this.errorMessage = 'Please enter a non-negative integer.';
      return;
    }

    const inputNumber = this.fibonacciForm.value.inputNumber;

    this.http.post<number[]>(`/api/fibonacci`, { number: inputNumber })
      .subscribe(
        (response) => {
          this.fibonacciNumbers = response.slice(0, TRUNCATE_AFTER_THIS_MANY);
        },
        (error) => {
          this.errorMessage = 'Error calculating Fibonacci numbers.';
        }
      );
  }
}