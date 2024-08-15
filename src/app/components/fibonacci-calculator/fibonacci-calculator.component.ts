package app.components.fibonacci-calculator;

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FibonacciService } from '../../services/fibonacci.service';

const TRUNCATE_AFTER_THIS_MANY = 1e4;

@Component({
  selector: 'app-fibonacci-calculator',
  templateUrl: './fibonacci-calculator.component.html',
  styleUrls: ['./fibonacci-calculator.component.css']
})
export class FibonacciCalculatorComponent {
  fibonacciForm: FormGroup;
  fibonacciSequence: number[] = [];
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private fibonacciService: FibonacciService) {
    this.fibonacciForm = this.fb.group({
      number: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  calculateFibonacci() {
    const inputValue = this.fibonacciForm.get('number')?.value;

    if (inputValue < 0) {
      this.errorMessage = 'Negative numbers are not allowed.';
      return;
    }

    if (inputValue > TRUNCATE_AFTER_THIS_MANY) {
      this.errorMessage = `Input exceeds the limit of ${TRUNCATE_AFTER_THIS_MANY}.`;
      return;
    }

    this.errorMessage = '';
    this.fibonacciService.getFibonacci(inputValue).subscribe(
      (response: number[]) => {
        this.fibonacciSequence = response;
      },
      (error) => {
        this.errorMessage = 'An error occurred while fetching the Fibonacci sequence.';
      }
    );
  }
}