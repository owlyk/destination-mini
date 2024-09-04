package app.components.fibonacci-calculator;

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FibonacciService } from '../../services/fibonacci.service';

@Component({
  selector: 'app-fibonacci-calculator',
  templateUrl: './fibonacci-calculator.component.html',
  styleUrls: ['./fibonacci-calculator.component.css']
})
export class FibonacciCalculatorComponent implements OnInit {
  fibonacciForm: FormGroup;
  fibonacciNumbers: number[] = [];
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private fibonacciService: FibonacciService) {
    this.fibonacciForm = this.fb.group({
      inputNumber: ['', [Validators.required, Validators.min(0), Validators.max(10000), this.integerValidator]]
    });
  }

  ngOnInit(): void {}

  integerValidator(control: any): { [key: string]: boolean } | null {
    const value = control.value;
    if (typeof value !== 'number' || isNaN(value)) {
      return { notANumber: true };
    }
    if (!Number.isInteger(value)) {
      return { nonInteger: true };
    }
    return null;
  }

  onSubmit(): void {
    this.errorMessage = '';
    if (this.fibonacciForm.valid) {
      const inputValue = this.fibonacciForm.value.inputNumber;
      this.fibonacciService.getFibonacciNumbers(inputValue).subscribe(
        (data: number[]) => {
          this.fibonacciNumbers = data;
          this.fibonacciForm.reset();
        },
        (error) => {
          this.errorMessage = error.message || 'Error fetching Fibonacci numbers. Please try again later.';
        }
      );
    } else {
      this.errorMessage = 'Please enter a valid non-negative integer not exceeding 10,000.';
      if (this.fibonacciForm.get('inputNumber')?.hasError('nonInteger')) {
        this.errorMessage = 'Input must be a non-negative integer.';
      } else if (this.fibonacciForm.get('inputNumber')?.hasError('notANumber')) {
        this.errorMessage = 'Input must be a number.';
      }
    }
  }
}