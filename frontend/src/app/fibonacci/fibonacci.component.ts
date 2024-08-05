package app.fibonacci;

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  fibonacciForm: FormGroup;
  result: any;
  errorMessage: string;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.fibonacciForm = this.fb.group({
      argument: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  calculateFibonacci() {
    if (this.fibonacciForm.valid) {
      const argument = this.fibonacciForm.value.argument;
      this.http.post('/fibonacci', { argument }).subscribe(
        response => {
          this.result = response;
          this.errorMessage = null;
        },
        error => {
          this.errorMessage = error.error.message || 'An error occurred';
          this.result = null;
        }
      );
    } else {
      this.errorMessage = 'Please enter a valid positive integer.';
      this.result = null;
    }
  }
}