package app.fibFoo;

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fib-foo',
  templateUrl: './fib-foo.component.html',
  styleUrls: ['./fib-foo.component.css']
})
export class FibFooComponent implements OnInit {
  inputValue: string;
  errorMessage: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.inputValue = '';
    this.errorMessage = '';
  }

  validateInput(): void {
    this.http.get(`/api/fib/foo?input=${this.inputValue}`).subscribe(
      (response: any) => {
        if (response.error) {
          this.errorMessage = response.error;
          console.error('Invalid input:', this.inputValue);
        } else {
          this.errorMessage = '';
        }
      },
      (error) => {
        this.errorMessage = 'An error occurred while validating input.';
        console.error('Error during API call:', error);
      }
    );
  }

  onSubmit(): void {
    this.validateInput();
  }
}