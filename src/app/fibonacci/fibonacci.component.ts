package app.fibonacci;

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {
  fibonacciForm: FormGroup;
  results: number[] = [];
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.fibonacciForm = this.fb.group({
      number: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.errorMessage = '';
    const inputValue = this.fibonacciForm.get('number')?.value;

    if (!this.fibonacciForm.valid) {
      this.errorMessage = 'Invalid input. Please enter a valid integer.';
      return;
    }

    if (inputValue < 0) {
      this.errorMessage = 'Please enter a non-negative integer.';
      return;
    }

    this.http.get<number[]>(`/api/fibonacci/${inputValue}`).subscribe(
      (data) => {
        this.results = data;
      },
      (error) => {
        console.error('API call failed:', error);
        if (error.status === 404) {
          this.errorMessage = 'Fibonacci series not found for the given input.';
        } else {
          this.errorMessage = 'Error fetching Fibonacci series. Please try again later.';
        }
      }
    );
  }
}