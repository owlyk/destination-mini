package app.fibonacci;

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FibonacciService } from '../services/fibonacci.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  fibNumbers: number[] = [];
  message: string;
  fibonacciForm: FormGroup;

  constructor(private fb: FormBuilder, private fibonacciService: FibonacciService) {
    this.fibonacciForm = this.fb.group({
      inputValue: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
    this.message = '';
  }

  ngOnInit(): void {
    this.message = '';
  }

  calculateFibonacci(): void {
    const value = parseInt(this.fibonacciForm.get('inputValue').value, 10);
    if (isNaN(value)) {
      this.message = 'Could not interpret argument as an integer.';
      return;
    }
    if (value <= 0) {
      this.message = 'Invalid input. Must be a positive integer.';
      return;
    }

    this.fibonacciService.getFibonacciNumbers(value).subscribe(
      (data: number[]) => {
        if (data.length > 10000) {
          this.fibNumbers = data.slice(0, 10000);
          this.message = 'Results truncated to 10000 Fibonacci numbers.';
        } else {
          this.fibNumbers = data;
          this.message = '';
        }
      },
      (error) => {
        this.message = 'Error fetching Fibonacci numbers from the API.';
      }
    );
  }
}